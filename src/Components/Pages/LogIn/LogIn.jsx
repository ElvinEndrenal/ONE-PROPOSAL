import React, { useEffect } from 'react';
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
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

    useEffect(() => {
        // Function to switch from LOG-IN to SIGN-IN
        const goToSignIn = () => {
            const LogInBox = document.getElementById("regisBox");
            LogInBox.style.display = "none";
            const SignInBox = document.getElementById("regisBox2");
            SignInBox.style.display = "block";
        };

        // Function to switch from SIGN-IN to LOG-IN
        const backToLogin = () => {
            const SignInBox = document.getElementById("regisBox2");
            SignInBox.style.display = "none";
            const LogInBox = document.getElementById("regisBox");
            LogInBox.style.display = "block";
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
            alert("Username must be in Pascal Case (e.g., JohnDoe).");
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
        alert("CREATED ACCOUNT");
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
                    /><br />
                    <input
                        className="fontStyle1 fontSizeL textBox mt"
                        type="password"
                        placeholder="Password"
                    />
                    <br /><br /><br />
                    <button className="fontStyle1 button">LOGIN</button>
                    <p
                        className="fontStyle1 fontSizeM fontColor1"
                        id="goToSignIn"
                    >
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
                    />
                    <br />

                    <input
                        className="fontStyle1 fontSizeL textBox mt"
                        id="confirmPasswordTextBox"
                        type="password"
                        placeholder="Confirm Password"
                    />

                    <br /><br />

                    <input type="radio" id="student" name="occupation" value="student" />
                    <label className="fontStyle1 fontSizeL"> Student </label>
                    <input type="radio" id="teacher" name="occupation" value="teacher" />
                    <label className="fontStyle1 fontSizeL"> Teacher </label>
                    <br /><br />

                    {/* <label for="club">Club</label>
                    <select id="clubs" name="club">
                        <option value="cops">Club of Programmers</option>
                        <option value="prestige">Prestige Club</option>
                        <option value="fil-tura">Fil-Tura Klub</option>
                        <option value="rcy">Red Cross Youth Council</option>
                        <option value="sci-pi">Sci-Pi</option>
                        <option value="ofam">Organization of Future Accountants and Manager</option>
                        <option value="sipnayan">Sipnayan Society</option>
                        <option value="act">Alliance of Chefs and Travelers</option>
                    </select>
                    <br /> <br /> */}

                    <button
                        className="fontStyle1 button"
                        onClick={handleSignIn}
                    >
                        SIGN IN
                    </button>
                    <p
                        className="fontStyle1 fontSizeM fontColor1"
                        id="backToLogin"
                    >
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
