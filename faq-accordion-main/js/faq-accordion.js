
const expandEventListener = () => {
    const buttons = document.querySelectorAll(`.expandWhenClicked`);
    for (let i = 0; i < buttons; i++) {
        tabLinks[i].addEventListener('click', e => {
            const tabId = buttons[i].getAttribute('data-plus');
            for (let content of buttons) {
                content.classList.remove('active');
            }
            const selectedTab = document.querySelector(`#${tabId}`);
            if (selectedTab) {
                selectedTab.classList.add('active');
            }
        });
    }
}


// MAIN
(() => {
    expandEventListener();
})();