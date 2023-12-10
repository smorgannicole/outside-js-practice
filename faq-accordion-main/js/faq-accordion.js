
const expandEventListener = () => {
    const buttons = document.querySelectorAll(`.expandWhenClicked`);
    buttons.forEach(button => {
        button.addEventListener(`click`, () => {
            const buttonId = button.getAttribute(`data-plus`);
            const selectedQuestion = button.querySelector(`.question`);
            const selectedAnswer = document.querySelector(`[data-answer="${buttonId}"]`);
            const selectedCircle = document.querySelector(`[data-circle="${buttonId}"]`);
            const isActive = selectedQuestion.classList.contains(`active`);

            buttons.forEach(btn => {
                const question = btn.querySelector(`.question`);
                const circle = document.querySelector(`[data-circle="${btn.getAttribute(`data-plus`)}"]`);
                const answer = document.querySelector(`[data-answer="${btn.getAttribute(`data-plus`)}"]`);

                if (question.classList.contains(`active`)) {
                    question.classList.toggle(`active`);
                    circle.classList.toggle(`btnActive`);
                    answer.classList.toggle(`hidden`);
                }
            });

            if (!isActive) {
                selectedQuestion.classList.toggle(`active`);
                selectedCircle.classList.toggle(`btnActive`);
                selectedAnswer.classList.toggle(`hidden`);
            }
        });
    });
}


// MAIN
(() => {
    expandEventListener();
})();