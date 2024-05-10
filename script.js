document.addEventListener("DOMContentLoaded", function () {
    const calculateBtn = document.getElementById("calculateBtn");
    calculateBtn.addEventListener("click", calculateMarks);
});

function calculateMarks() {
    const cat1Score = parseInt(document.getElementById("cat1").value);
    const cat2Score = parseInt(document.getElementById("cat2").value);
    const cat3Score = parseInt(document.getElementById("cat3").value);
    const assignmentScore = parseInt(document.getElementById("assignment").value);

    const convertedCat1 = cat1Score * (50 / 60);

    const internalMarks = convertedCat1 + cat2Score + cat3Score + assignmentScore;

    const scalingFactor = 40 / 200;

    const convertedMarks = internalMarks * scalingFactor;

    const resultElement = document.getElementById("result");
    resultElement.textContent = `Your internal marks is: ${convertedMarks.toFixed(2)} (out of 40)`;
}
