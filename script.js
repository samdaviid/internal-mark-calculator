document.addEventListener("DOMContentLoaded", function () {
    const calculateBtn = document.getElementById("calculateBtn");
    calculateBtn.addEventListener("click", calculateMarks);
});

function calculateMarks() {
    // Get user input for scores
    const cat1Score = parseInt(document.getElementById("cat1").value);
    const cat2Score = parseInt(document.getElementById("cat2").value);
    const cat3Score = parseInt(document.getElementById("cat3").value);
    const assignmentScore = parseInt(document.getElementById("assignment").value);

    // Convert CAT 1 score (if originally out of 60)
    const convertedCat1 = cat1Score * (50 / 60);

    // Calculate total internal marks (out of 200)
    const internalMarks = convertedCat1 + cat2Score + cat3Score + assignmentScore;

    // Calculate scaling factor
    const scalingFactor = 40 / 200;

    // Calculate converted marks (out of 40)
    const convertedMarks = internalMarks * scalingFactor;

    // Display the result
    const resultElement = document.getElementById("result");
    resultElement.textContent = `Your internal marks is: ${convertedMarks.toFixed(2)} (out of 40)`;
}
