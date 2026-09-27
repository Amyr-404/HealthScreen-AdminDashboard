const loginForm = document.getElementById("loginForm");
const loginMessage = document.getElementById("loginMessage");

const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

const showPasswordButton =
    document.getElementById("showPassword");


/*
========================================
TEMPORARY LOGIN
========================================

This is ONLY for testing.

Firebase Authentication will replace
this later.
*/

const DEMO_USERNAME = "admin";
const DEMO_PASSWORD = "admin123";


/*
========================================
LOGIN
========================================
*/

loginForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const username = usernameInput.value.trim();
    const password = passwordInput.value;


    // Clear previous message
    loginMessage.textContent = "";


    // Check credentials
    if (
        username === DEMO_USERNAME &&
        password === DEMO_PASSWORD
    ) {

        // Save login state temporarily
        sessionStorage.setItem(
            "healthscreenAdmin",
            "true"
        );


        // Open dashboard
        window.location.href = "dashboard.html";

    } else {

        loginMessage.textContent =
            "Invalid username or password.";

        passwordInput.value = "";

    }

});


/*
========================================
SHOW / HIDE PASSWORD
========================================
*/

showPasswordButton.addEventListener(
    "click",
    function() {

        if (passwordInput.type === "password") {

            passwordInput.type = "text";

            showPasswordButton.textContent = "🙈";

        } else {

            passwordInput.type = "password";

            showPasswordButton.textContent = "👁";

        }

    }
);