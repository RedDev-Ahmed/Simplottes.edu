

const hamburger = document.querySelector(".hamburger-btn");
const hamburgerContainer = document.querySelector(".hamburger-btn-container");
const hamburgerTopStick = document.querySelector(".hamburger-top-stick");
const hamburgerCenterStick = document.querySelector(".hamburger-center-stick");
const hamburgerBottomStick = document.querySelector(".hamburger-bottom-stick");
const navList = document.querySelector(".nav-list");
const profileImg = document.querySelector(".profile-img");
const adminProfile = document.querySelector(".admin-profile");

function openList() {
    hamburger.classList.toggle("hamburger-btn-changed")
    hamburgerTopStick.classList.toggle("hamburger-top-stick-changed");
    hamburgerCenterStick.classList.toggle("hamburger-center-stick-changed");
    hamburgerBottomStick.classList.toggle("hamburger-bottom-stick-changed");
    navList.classList.toggle("nav-list-changed");
}

hamburger.addEventListener('click', openList);

function openProfile() {
    adminProfile.classList.toggle("admin-profile-changed");
}

profileImg.addEventListener('click', openProfile);

const nameField = document.querySelector(".name-input");
const emailField = document.querySelector(".email-input");
const descriptionField = document.querySelector(".description-input");
const message = document.getElementById("feedbackMessage");
const submitBtn = document.querySelector(".submit-btn");

submitBtn.addEventListener('click', function submitFeedback() {
    if(nameField.value === "" && emailField.value === "") {
        message.innerHTML = "Please fill in the required fields";
        message.style.color = "red";
    }else {
        message.innerHTML = "Thanks for your feedback!";
        message.style.color = "green";
    }
});

const themeBtn = document.querySelector(".theme-para");
const themeList = document.querySelector(".theme-list");
const themeArrow = document.querySelector(".theme-svg");
const darkTheme = document.querySelector(".theme-dark-option");
const lightTheme = document.querySelector(".theme-light-option");
const statsIcons = {
    eye: document.querySelector(".eye-img"),
    graduatehat: document.querySelector(".graduatehat-img"),
    portfolio: document.querySelector(".portfolio-img")
};

themeBtn.addEventListener('click', function openThemeList() {
    themeList.classList.toggle("theme-list-changed");
    themeArrow.classList.toggle("theme-svg-rotate");
});

function applyTheme(theme) {
    const isDark = theme === "dark";

    document.body.classList.toggle("dark-body", isDark);
    statsIcons.eye.src = isDark ? "images/eye-icon-white.png" : "images/eye-icon.png";
    statsIcons.graduatehat.src = isDark ? "images/graduatehat-icon-white.png" : "images/graduatehat-icon.png";
    statsIcons.portfolio.src = isDark ? "images/portfolio-icon-white.png" : "images/portfolio-icon.png";
    themeList.classList.remove("theme-list-changed");
    themeArrow.classList.remove("theme-svg-rotate");
}

darkTheme.addEventListener('click', function changeToDark() {
    localStorage.setItem("theme", "dark");
    applyTheme("dark");
});

lightTheme.addEventListener('click', function changeToLight() {
    localStorage.setItem("theme", "light");
    applyTheme("light");
});

applyTheme(localStorage.getItem("theme") || "light");

document.querySelector("body").addEventListener('click', function closeList(event) {
    if (!adminProfile.contains(event.target) && !profileImg.contains(event.target)) {
        adminProfile.classList.remove("admin-profile-changed");
    }

    if (!hamburgerContainer.contains(event.target)) {
        hamburger.classList.remove("hamburger-btn-changed");
        hamburgerTopStick.classList.remove("hamburger-top-stick-changed");
        hamburgerCenterStick.classList.remove("hamburger-center-stick-changed");
        hamburgerBottomStick.classList.remove("hamburger-bottom-stick-changed");
        navList.classList.remove("nav-list-changed");
    }

    if (!themeList.contains(event.target) && !themeBtn.contains(event.target)) {
        themeList.classList.remove("theme-list-changed");
        themeArrow.classList.remove("theme-svg-rotate");
    }
});
