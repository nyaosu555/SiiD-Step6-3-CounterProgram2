(() => {
    const $counter = document.getElementById('js-counter-number');

    window.randomNumber = Math.floor(Math.random() * 15 ) + 1;

    const clickHandler = (e) => {
        const $targetButton = e.currentTarget;
        let currentCount = parseInt($counter.textContent);
        if($targetButton.textContent === '+'){
            $counter.textContent = currentCount + 1;
        } else {
            if(currentCount <= 0) {
                alert('負の数にはなりません');
                return;
            }
            $counter.textContent = currentCount - 1;
        }
    }

    for(let i = 0; i < document.getElementsByClassName('js-counter-button').length; i++) {
        document.getElementsByClassName('js-counter-button')[i].addEventListener('click', (e) => clickHandler(e));
    }

    document.getElementById('js-check-button').addEventListener('click', () => {
        if(parseInt($counter.textContent) === window.randomNumber){
            alert(`正解です！ランダムな数は${window.randomNumber}でした！`);
        } else{
            alert('不正解です！');
        }
    });
})();

/*
↓自分で考えたコード
*/
// const counterNumber = document.getElementById("js-counter-number");
// const counterButton = document.querySelectorAll(".js-counter-button");

// let count = 0;
// counterNumber.textContent = count;

// counterButton.forEach(button => {
//     button.addEventListener('click', () => {
//         handleClick(button.textContent);
//     })
// })

// const handleClick = (buttonText) => {
//     if(buttonText === '+'){
//         count++;
//         counterNumber.textContent = count;
//     } else if(buttonText === '-'){
//         count--;
//         counterNumber.textContent = count;
//     }
// }
/*
↑自分で考えたコード
*/