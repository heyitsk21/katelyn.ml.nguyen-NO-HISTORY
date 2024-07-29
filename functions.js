const STYLESHEET_KEY = "stylesheet";
const DEFAULT = "second_style.css";
const ALT = "style_home.css";

function toggleStyleSheet() {
    var styleElement = document.getElementById("selected_css");
    var fileName = styleElement.getAttribute("href");
    var newFileName = DEFAULT;
    if (fileName == ALT) {
        newFileName = DEFAULT;
    } else {
        newFileName = ALT;
    }
    styleElement.setAttribute("href", newFileName);
    localStorage.setItem(STYLESHEET_KEY, newFileName);
}

window.onload = function () {
    var stylesheetValue = localStorage.getItem(STYLESHEET_KEY) || DEFAULT;
    var styleElement = document.getElementById("selected_css");
    styleElement.setAttribute("href", stylesheetValue);
};

function copyToClipboard(text) {
    const tempInput = document.createElement("input");
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    alert("Link copied to clipboard: " + text);

    // var Text = document.getElementById("")

    // navigator.clipboard.writeText(text);
}