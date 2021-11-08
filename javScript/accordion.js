var questions = document.querySelectorAll(".question");

questions.forEach(question => {
    question.addEventListener("click", event => {
        question.classList.toggle("active");
        question.nextElementSibling.classList.toggle("active");
    })
})