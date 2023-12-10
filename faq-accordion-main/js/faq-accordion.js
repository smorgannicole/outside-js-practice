
const expandEventListener = () => {
    const buttons = document.querySelectorAll(`.expandWhenClicked`);
    for (let button of buttons) {
        button.addEventListener(`click`, e => {
            const buttonId = button.getAttribute(`data-plus`);
            const selectedButton = document.querySelector(`[data-plus="${buttonId}"]`);
            const selectedQuestion = button.querySelector('.question');
            const selectedAnswer = document.querySelector(`[data-answer="${buttonId}"]`);
            const selectedCircle = document.querySelector(`[data-circle="${buttonId}"]`)
            selectedQuestion.classList.toggle(`active`);
            selectedCircle.classList.toggle(`btnActive`);
            selectedAnswer.classList.toggle(`hidden`);
            selectedAnswer.classList.toggle('fade-in');
        });
    }
}


// MAIN
(() => {
    expandEventListener();
})();