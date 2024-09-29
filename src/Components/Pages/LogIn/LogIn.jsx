import React, { useEffect, useState } from 'react';
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, push, get } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
import { useNavigate } from 'react-router-dom';
import './LogIn.css';

const LogIn = () => {
    // Initialize Firebase app and database
    const appSettings = {
        databaseURL: "https://one-proposal-a5325-default-rtdb.asia-southeast1.firebasedatabase.app/"
    };
    const app = initializeApp(appSettings);
    const database = getDatabase(app);
    const studentInDB = ref(database, "student");
    const teacherInDB = ref(database, "teacher");

    const navigate = useNavigate(); // Hook for navigation
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        // Function to switch from LOG-IN to SIGN-IN
        const goToSignIn = () => {
            document.getElementById("regisBox").style.display = "none";
            document.getElementById("regisBox2").style.display = "block";
        };

        // Function to switch from SIGN-IN to LOG-IN
        const backToLogin = () => {
            document.getElementById("regisBox2").style.display = "none";
            document.getElementById("regisBox").style.display = "block";
        };

        // Attach click event handlers
        document.getElementById("goToSignIn").onclick = goToSignIn;
        document.getElementById("backToLogin").onclick = backToLogin;

        // Cleanup event handlers on component unmount
        return () => {
            document.getElementById("goToSignIn").onclick = null;
            document.getElementById("backToLogin").onclick = null;
        };
    }, []);

    // Function to handle login
    const handleLogin = async () => {
        const studentSnapshot = await get(studentInDB);
        const teacherSnapshot = await get(teacherInDB);

        let userFound = false;

        // Check in student database
        studentSnapshot.forEach(childSnapshot => {
            const userData = childSnapshot.val();
            if (userData.email === email && userData.password === password) {
                userFound = true;
                navigate('/StudentMain'); // Redirect to StudentMain
            }
        });

        // Check in teacher database if not found in student
        if (!userFound) {
            teacherSnapshot.forEach(childSnapshot => {
                const userData = childSnapshot.val();
                if (userData.email === email && userData.password === password) {
                    userFound = true;
                }
            });
        }

        if (!userFound) {
            alert("Invalid email or password.");
        }
    };

    // Function to handle SIGN-IN button click
    const handleSignIn = () => {
        const usernameInput = document.getElementById("usernameTextBox").value;
        const emailInput = document.getElementById("emailTextBox").value;
        const passwordInput = document.getElementById("passwordTextBox").value;
        const confirmPasswordInput = document.getElementById("confirmPasswordTextBox").value;
        const radios = document.getElementsByName("occupation");

        let selectedOccupation = "";
        // Check which radio button is selected
        for (const radio of radios) {
            if (radio.checked) {
                selectedOccupation = radio.value;
                break;
            }
        }

        // PHASE 1: Validate username format
        const pascalCaseRegex = /^[A-Z][a-z]+(?:[A-Z][a-z]+)*$/;
        if (!usernameInput.match(pascalCaseRegex)) {
            alert("Username must be in Pascal Case (e.g., JohnElvin).");
            return;
        }

        // PHASE 2: Validate email format
        if (!emailInput.endsWith("@sti")) {
            alert("Invalid email format");
            return;
        }

        // PHASE 3: Validate password length and confirmation
        if (passwordInput.length < 8 || !/\d/.test(passwordInput)) {
            alert("Password must be at least 8 characters and include a number.");
            return;
        }
        if (passwordInput !== confirmPasswordInput) {
            alert("Passwords do not match");
            return;
        }

        // PHASE 4: Check if an occupation is selected
        if (!selectedOccupation) {
            alert("Please select an occupation.");
            return;
        }

        // PHASE 5: Push data to the Firebase database
        const dbRef = selectedOccupation === "student" ? studentInDB : teacherInDB;
        push(dbRef, {
            username: usernameInput,
            email: emailInput,
            password: passwordInput,
            occupation: selectedOccupation
        });
        alert("Account Created");
    };

    return (
        <div>
            {/* LOGIN SECTION */}
            <center>
                <div id="regisBox">
                    <p className="fontStyle1 fontColor1 headLogin">LOG-IN</p>
                    <p className="fontStyle1 fontSizeL fontColor2 subLogin">Welcome to One Proposal!</p>
                    <input
                        className="fontStyle1 fontSizeL textBox mt"
                        type="text"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    /><br />
                    <input
                        className="fontStyle1 fontSizeL textBox mt"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <br /><br /><br />
                    <button className="fontStyle1 button" onClick={handleLogin}>
                        LOGIN
                    </button>

                    <p className="fontStyle1 fontSizeM fontColor1" id="goToSignIn">
                        Create Account
                    </p>
                </div>
            </center>

            {/* SIGN-IN SECTION */}
            <center>
                <div id="regisBox2" style={{ display: 'none' }}>
                    <p className="fontStyle1 fontColor1 headLogin">SIGN-IN</p>
                    <input
                        className="fontStyle1 fontSizeL textBox mt"
                        id="usernameTextBox"
                        type="text"
                        placeholder="Create Username"
                    /><br />
                    <input
                        className="fontStyle1 fontSizeL textBox mt"
                        id="emailTextBox"
                        type="text"
                        placeholder="Create Email"
                    /><br />
                    <input
                        className="fontStyle1 fontSizeL textBox mt"
                        id="passwordTextBox"
                        type="password"
                        placeholder="Create Password"
                    /><br />
                    <input
                        className="fontStyle1 fontSizeL textBox mt"
                        id="confirmPasswordTextBox"
                        type="password"
                        placeholder="Confirm Password"
                    /><br /><br />
                    <input type="radio" id="student" name="occupation" value="student" />
                    <label className="fontStyle1 fontSizeL"> Student </label>
                    <input type="radio" id="teacher" name="occupation" value="teacher" />
                    <label className="fontStyle1 fontSizeL"> Teacher </label>
                    <br /><br />
                    <button
                        className="fontStyle1 button"
                        onClick={handleSignIn}
                    >
                        SIGN IN
                    </button>
                    <p className="fontStyle1 fontSizeM fontColor1" id="backToLogin">
                        Already have an Account
                    </p>
                </div>  
            </center>

            {/* Images */}
            <img id="logo" src="../src/assets/logo.png" alt="Logo" />
            <img id="background" src="../src/assets/whiteBg.png" alt="Background" />
        </div>
    );
};

export default LogIn;