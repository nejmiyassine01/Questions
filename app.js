//using selectors inside the element
// traversing the dom


/*
const question = document.querySelector('.question');
const questionBtn = document.querySelectorAll('.question-btn');

questionBtn.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const target = e.currentTarget.parentElement.parentElement;     
        target.classList.toggle('show-text');
    })
});
*/

const questions = document.querySelectorAll('.question');

questions.forEach(function (question) {
    const btn = question.querySelector('.question-btn');

    btn.addEventListener('click', function() {
        questions.forEach(function (item) {
            if (item !== question) {
                item.classList.remove('show-text');
            };
        })

        question.classList.toggle('show-text');
    })
});
