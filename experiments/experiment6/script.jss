// Get elements
const heading = document.getElementById("mainHeading");
const input = document.getElementById("messageInput");
const para = document.getElementById("para");

// Buttons
const changeTextBtn = document.getElementById("changeTextBtn");
const bgColorBtn = document.getElementById("bgColorBtn");
const fontSizeBtn = document.getElementById("fontSizeBtn");
const toggleParaBtn = document.getElementById("toggleParaBtn");
const resetBtn = document.getElementById("resetBtn");

// Change heading text (onclick)
changeTextBtn.onclick = function () {
    if (input.value !== "") {
        heading.textContent = input.value;
    } else {
        alert("Please enter a message!");
    }
};

// Change background color (addEventListener)
bgColorBtn.addEventListener("click", function () {
    document.body.style.backgroundColor =
        document.body.style.backgroundColor === "lightblue" ? "white" : "lightblue";
});

// Change font size (onmouseover)
fontSizeBtn.onmouseover = function () {
    para.style.fontSize = "25px";
};

// Show/Hide paragraph (onclick)
toggleParaBtn.onclick = function () {
    if (para.style.display === "none") {
        para.style.display = "block";
    } else {
        para.style.display = "none";
    }
};

// Input change event (onchange)
input.onchange = function () {
    console.log("Input changed to: " + input.value);
};

// Reset page (addEventListener)
resetBtn.addEventListener("click", function () {
    heading.textContent = "Welcome to My Webpage";
    document.body.style.backgroundColor = "white";
    para.style.fontSize = "18px";
    para.style.display = "block";
    input.value = "";
});