function showLogin() {
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('signup-form').style.display = 'none';
    document.getElementById('login-message').innerText = '';
}

function showSignup() {
    document.getElementById('signup-form').style.display = 'block';
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('signup-message').innerText = '';
}

// Populate Date of Birth Dropdown
window.onload = function() {
    let daySelect = document.getElementById("dob-day");
    let monthSelect = document.getElementById("dob-month");
    let yearSelect = document.getElementById("dob-year");
    
    for (let i = 1; i <= 31; i++) {
        daySelect.innerHTML += `<option value="${i}">${i}</option>`;
    }
    
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    months.forEach((month, index) => {
        monthSelect.innerHTML += `<option value="${index + 1}">${month}</option>`;
    });
    
    let currentYear = new Date().getFullYear();
    for (let i = currentYear - 60; i <= currentYear - 16; i++) {
        yearSelect.innerHTML += `<option value="${i}">${i}</option>`;
    }
}

// Register function (mock)
function register() {
    let name = document.getElementById('signup-name').value;
    let admission = document.getElementById('signup-admission').value;
    let email = document.getElementById('signup-email').value;
    let dob = document.getElementById('dob-day').value + '/' + document.getElementById('dob-month').value + '/' + document.getElementById('dob-year').value;
    let program = document.getElementById('signup-program').value;

    // Simple validation
    if (!name || !admission || !email || !dob || !program) {
        document.getElementById('signup-message').innerText = 'All fields are required!';
        return;
    }

    let userData = {
        name: name,
        admission: admission,
        email: email,
        dob: dob,
        program: program
    };

    localStorage.setItem('user', JSON.stringify(userData));
    document.getElementById('signup-message').innerText = 'Registration successful! You can now log in.';
    setTimeout(() => showLogin(), 2000); // Show login form after 2 seconds
}

// Login function (mock)
function login() {
    let username = document.getElementById('login-username').value;
    let password = document.getElementById('login-password').value;

    let userData = JSON.parse(localStorage.getItem('user'));

    // Simple validation
    if (!username || !password) {
        document.getElementById('login-message').innerText = 'Please enter both username and password.';
        return;
    }

    if (userData && username === userData.email && password === userData.admission) {
        document.getElementById('login-message').style.color = 'green';
        document.getElementById('login-message').innerText = 'Login successful!';
        setTimeout(() => alert('Welcome to the student portal!'), 1500); // Welcome message after login
    } else {
        document.getElementById('login-message').innerText = 'Invalid credentials. Please try again.';
    }
}
