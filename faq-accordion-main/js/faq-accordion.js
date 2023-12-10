
const expandEventListener = () => {
    const buttons = document.querySelectorAll(`.expandWhenClicked`);
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', e => {
            const tabId = buttons[i].getAttribute('data-plus');
            console.log(tabId)
            // for (let content of buttons) {
            //     content.classList.remove('active');
            // }
            // const selectedTab = document.querySelector(`${tabId}`);
            // if (selectedTab) {
            //     selectedTab.classList.add('active');
            // }
        });
    }
}


// MAIN
(() => {
    expandEventListener();
})();