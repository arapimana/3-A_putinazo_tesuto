function checkAnswer() {
    const answerInput = document.getElementById('answerInput').value;
    const result = document.getElementById('result');

    if (answerInput === "俺はお兄様だぞ") {
        result.textContent = "や、やるじゃない、、、";
    } else {
        result.textContent = "ざぁこ♡ざぁこ♡";
    }
}
