import React, { useEffect } from 'react';
import './LogIn.css';

const LogIn = () => {

    useEffect(() => {
        const goToSignIn = () => {
            const LogInBox = document.getElementById("regisBox");
            LogInBox.style.display = "none";
            const SignInBox = document.getElementById("regisBox2");
            SignInBox.style.display = "block";
        };

        const backToLogin = () => {
            const SignInBox = document.getElementById("regisBox2");
            SignInBox.style.display = "none";
            const LogInBox = document.getElementById("regisBox");
            LogInBox.style.display = "block";
        };

        document.getElementById("goToSignIn").onclick = goToSignIn;
        document.getElementById("backToLogin").onclick = backToLogin;

        return () => {
            document.getElementById("goToSignIn").onclick;
            document.getElementById("backToLogin").onclick;
        };

    }, []);

    return (
        <div>
            {/* LOGIN */}
            <center>
                <div id="regisBox">
                    <p className="fontStyle1 fontColor1 headLogin" id="head">LOG-IN</p>
                    <p className="fontStyle1 fontSizeL fontColor2 subLogin " id="subHead" >Welcome to One Proposal!</p>
                    <input className="fontStyle1 fontSizeL textBox mt" id="emaiLTextBox" type="text" placeholder="Email" /><br />
                    <input className="fontStyle1 fontSizeL textBox mt" type="password" placeholder="Password" />
                    <br /><br /><br />
                    <button className="fontStyle1 button">LOGIN</button>
                    <p className="fontStyle1 fontSizeM fontColor1" id="goToSignIn">Create Account</p>
                </div>
            </center>

            {/* SIGN IN */}
            <center>
                <div id="regisBox2" style={{ display: 'none' }}>
                    <p className="fontStyle1 fontColor1 headLogin" id="head" >SIGN-IN</p>
                    <p className="fontStyle1 fontSizeL fontColor2 subLogin" id="subHead">Be a part of One Proposal!</p>
                    <input className="fontStyle1 fontSizeL textBox mt" id="emaiLTextBox"  type="text" placeholder="Create Email" /><br />
                    <input className="fontStyle1 fontSizeL textBox mt" type="password" placeholder="Create Password" />
                    <br /><br /><br />
                    <button className="fontStyle1 button">SIGN IN</button>
                    <p className="fontStyle1 fontSizeM fontColor1" id="backToLogin">Already have an Account</p>
                </div>
            </center>

            <img id="logo" src="../src/assets/logo.png" alt="Logo" />
            <img id="background" src="../src/assets/whiteBg.png" alt="Background" />
        </div>
    );
};

export default LogIn;