function register() {
    const username = document.getElementById("email").value;
    const password = document.getElementById("pass").value;

    if (!username || !password) {
        alert("All fields required");
        return;
    }
    const user = { username, password };
    localStorage.setItem("user", JSON.stringify(user));
    alert("Regestrtion sucesfully");
    window.location.href = "index.html";
}
function login() {
    const username = document.getElementById("email").value;
    const password = document.getElementById("pass").value;
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (!storedUser) {
        alert("No user found");
        return;
    }
    if (username === storedUser.username && password === storedUser.password) {
        localStorage.setItem("isLoggedIn", "true");
        window.location.href = "dashboard.html"

    }
    else {
        alert("invalid credentials");
    }
}

if (window.location.pathname.includes("dashboard")) {
    if (localStorage.getItem("isLoggedIn") !== "true") {
        window.location.href = "index.html"
    }
}
function logout() {
    localStorage.removeItem("isLoggedIn");
    window.location.href = "index.html";
}



