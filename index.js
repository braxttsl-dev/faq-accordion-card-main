const questions = document.querySelectorAll(".question-container")

questions.forEach(question => {
    question.addEventListener("click", event => {
        document.querySelector(".question-container.hide")?.classList.remove("hide")
        event.currentTarget.classList.add("hide")
    })
})