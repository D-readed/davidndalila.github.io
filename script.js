let generatedCode = "";
let email = "";
let userPassword = "";

// Switching between login and sign-up
document.getElementById('signUpLink').addEventListener('click', function() {
    document.getElementById('loginContainer').classList.add('hidden');
    document.getElementById('signUpContainer').classList.remove('hidden');
});

document.getElementById('backToLoginFromSignUp').addEventListener('click', function() {
    document.getElementById('signUpContainer').classList.add('hidden');
    document.getElementById('loginContainer').classList.remove('hidden');
});

// Handle sign-up form submission
document.getElementById('signUpForm').addEventListener('submit', function(e) {
    e.preventDefault();
    email = document.getElementById('email').value;

    // Generate verification code for sign-up
    generatedCode = Math.floor(100000 + Math.random() * 900000).toString();
    alert(`A verification code has been sent to ${email}.\n(For demo, your code is: ${generatedCode})`);

    // Hide the sign-up form and show the verify email form
    document.getElementById('signUpContainer').classList.add('hidden');
    document.getElementById('verifyEmailContainer').classList.remove('hidden');
});

// Handle verify email code submission
document.getElementById('verifyCodeButton').addEventListener('click', function() {
    const enteredCode = document.getElementById('verificationCodeInput').value;

    if (enteredCode === generatedCode) {
        alert("Verification successful! You can now set your password.");
        document.getElementById('verifyEmailContainer').classList.add('hidden');
        document.getElementById('setPasswordContainer').classList.remove('hidden');
    } else {
        alert("Wrong code. Please try again.");
    }
});

// Handle password set form submission
document.getElementById('setPasswordButton').addEventListener('click', function() {
    const newPassword = document.getElementById('newPasswordInput').value;

    // Validate password (at least 6 characters and must include a special character)
    const passwordRegex = /^(?=.*[!@#$%^&*(),.?":{}|<>;~_+\-=\[\]\\\/`])(?=.*[A-Za-z\d@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    if (!passwordRegex.test(newPassword)) {
        alert("Password must be at least 6 characters long and contain a special character.");
        return;
    }

    userPassword = newPassword; // Store password
    alert("Account created successfully!");

    // Hide all content and redirect to login page
    document.getElementById('setPasswordContainer').classList.add('hidden');
    document.getElementById('forgotPasswordContainer').classList.add('hidden');
    document.getElementById('loginContainer').classList.remove('hidden');

    // Clear all forms (optional)
    document.getElementById('signUpForm').reset();
    document.getElementById('loginForm').reset();
});

// Back to sign up from verify email
document.getElementById('backToSignUpFromVerify').addEventListener('click', function() {
    document.getElementById('verifyEmailContainer').classList.add('hidden');
    document.getElementById('signUpContainer').classList.remove('hidden');
});

// Forgot password form handling
document.getElementById('forgotPasswordLink').addEventListener('click', function() {
    document.getElementById('loginContainer').classList.add('hidden');
    document.getElementById('forgotPasswordContainer').classList.remove('hidden');
});

// Handle sending verification code for password reset
document.getElementById('sendVerificationCode').addEventListener('click', function() {
    email = document.getElementById('forgotEmail').value;

    // Generate verification code for password reset
    generatedCode = Math.floor(100000 + Math.random() * 900000).toString();
    alert(`A verification code has been sent to ${email}.\n(For demo, your code is: ${generatedCode})`);

    // Show the verification section
    document.getElementById('verificationSection').classList.remove('hidden');
});

// Handle verification of code for password reset
document.getElementById('verifyCode').addEventListener('click', function() {
    const enteredCode = document.getElementById('verificationCode').value;
    if (enteredCode === generatedCode) {
        alert("Code verified! You can now reset your password.");
        document.getElementById('verificationSection').classList.add('hidden');
        document.getElementById('newPasswordSection').classList.remove('hidden');
    } else {
        alert("Wrong code. Please try again.");
    }
});

// Handle password reset
document.getElementById('resetPassword').addEventListener('click', function() {
    const newPassword = document.getElementById('newPassword').value;

    // Validate password (at least 6 characters and must include a special character)
    const passwordRegex = /^(?=.*[!@#$%^&*(),.?":{}|<>;~_+\-=\[\]\\\/`])(?=.*[A-Za-z\d@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    if (!passwordRegex.test(newPassword)) {
        alert("Password must be at least 6 characters long and contain a special character.");
        return;
    }

    alert("Password reset successfully! You can now log in.");
    document.getElementById('newPasswordSection').classList.add('hidden');
    document.getElementById('loginContainer').classList.remove('hidden');

    // Clear all forms (optional)
    document.getElementById('forgotPasswordContainer').reset();
});

// Back to login from forgot password
document.getElementById('backToLoginFromForgotPassword').addEventListener('click', function() {
    document.getElementById('forgotPasswordContainer').classList.add('hidden');
    document.getElementById('loginContainer').classList.remove('hidden');
});
