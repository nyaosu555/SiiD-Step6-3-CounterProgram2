(() => {
    const $counter = document.getElementById('js-counter-number');

    const handleClick = () => {
        $counter.textContent = 0;
        window.randomNumber = Math.floor(Math.random() * 15 ) + 1;
    }

    document.getElementById('js-reset-button').addEventListener('click', handleClick);
})();