const questionBoxes = document.querySelectorAll('.question-box');

questionBoxes.forEach(questionBox => {
    questionBox.addEventListener('click', () => {
        const answerBox = questionBox.nextElementSibling;
        answerBox.classList.toggle('visible');

        const icon = questionBox.querySelector('.icon')

        if(answerBox.classList.contains('visible')){
            icon.src = "assets/images/icon-minus.svg";
        } else{
            icon.src = "assets/images/icon-plus.svg";
        }
    })
});