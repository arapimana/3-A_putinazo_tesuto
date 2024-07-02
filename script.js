function checkAnswer() {
    const answerInput = document.getElementById('answerInput').value;
    const result = document.getElementById('result');

    if (answerInput === "解決") {
        result.textContent = "おめでとう";
    } else {
        result.textContent = "残念";
    }
}
