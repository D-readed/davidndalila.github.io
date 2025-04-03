
let generatedCode = "";

// Switching between login and sign-up
document.getElementById('signUpLink').addEventListener('click', function() {
    document.getElementById('loginContainer').classList.add('hidden');
    document.getElementById('signUpContainer').classList.remove('hidden');
});

document.getElementById('backToLogin').addEventListener('click', function() {
    document.getElementById('signUpContainer').classList.add('hidden');
    document.getElementById('loginContainer').classList.remove('hidden');
});

// Handle sign-up form submission
document.getElementById('signUpForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Account created successfully! You can now log in.");
    document.getElementById('signUpContainer').classList.add('hidden');
    document.getElementById('loginContainer').classList.remove('hidden');
});

// Handle forgot password
document.getElementById('forgotPasswordLink').addEventListener('click', function() {
    document.getElementById('loginContainer').classList.add('hidden');
    document.getElementById('resetContainer').classList.remove('hidden');
});

document.getElementById('backToLoginFromReset').addEventListener('click', function() {
    document.getElementById('resetContainer').classList.add('hidden');
    document.getElementById('loginContainer').classList.remove('hidden');
});

document.getElementById('sendCode').addEventListener('click', function() {
    const email = document.getElementById('email').value;
    if (!email) {
        alert("Please enter your email.");
        return;
    }

    generatedCode = Math.floor(100000 + Math.random() * 900000).toString();
    alert(`A verification code has been sent to ${email}.\n(For demo, your code is: ${generatedCode})`);

    document.getElementById('verificationSection').classList.remove('hidden');
});

document.getElementById('verifyCode').addEventListener('click', function() {
    const enteredCode = document.getElementById('verificationCode').value;
    if (enteredCode === generatedCode) {
        alert("Code verified! You can now set a new password.");
        document.getElementById('newPasswordSection').classList.remove('hidden');
    } else {
        alert("Invalid code. Please try again.");
    }
});

document.getElementById('resetPassword').addEventListener('click', function() {
    const newPassword = document.getElementById('newPassword').value;
    if (newPassword.length <= 5) {
        alert("Password must be more than 5 characters.");
        return;
    }
    alert("Password reset successfully! You can now log in.");
    document.getElementById('resetContainer').classList.add('hidden');
    document.getElementById('loginContainer').classList.remove('hidden');
});
