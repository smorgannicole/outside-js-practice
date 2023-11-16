export const debounce = (fn, delay) => {
    let timeoutId;
    return (...args) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            fn(...args);
        }, delay);
    };
};
export const formatMoney = (number) => {
    let text = number.toLocaleString("en-US", {style:"currency", currency:"USD"});
    return text;
}
