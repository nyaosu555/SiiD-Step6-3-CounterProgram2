(() => {
    const $counter = document.getElementById('js-counter-number');

    const handleClick = () => {
        $counter.textContent = 0;
    }

    document.getElementById('js-reset-button').addEventListener('click', handleClick);
})();