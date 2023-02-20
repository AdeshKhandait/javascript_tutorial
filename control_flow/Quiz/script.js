//
//   TODO: 2. Select all elements needed
//     * The form element (has the id `quiz-form`)
const form = document.querySelector("#quiz-form");
//     * The answer inputs (have the class `answer`)
const ans = Array.from(document.querySelectorAll(".answer"));
//     * BONUS: The questions (have the class `question-item`)
const question = document.querySelectorAll(".question-item");
//     * BONUS: The alert (has the id `alert`)
const alert = document.querySelector("#alert");
//

console.log(form);
console.log(ans);
console.log(question);
console.log(alert);

// TODO: 3. Create a submit event listener for the form that does the following.
form.addEventListener("submit", (e) => {
  e.preventDefault(0);

  question.forEach((ques) => {
    ques.classList.add("incorrect");
    ques.classList.remove("correct");
  });

  // Selecting only the checked radio button
  const checked = ans.filter((n) => n.checked);

  // adding class to question based on ans selected by iterating on selected radio button
  checked.forEach((ans) => {
    const isCorrect = ans.value === "true";
    const questionItem = ans.closest(".question-item");
    if (isCorrect) {
      questionItem.classList.add("correct");
      questionItem.classList.remove("incorrect");
    } else {
      questionItem.classList.add("incorrect");
      questionItem.classList.remove("correct");
    }
  });

  // Showing pop-up
  const allTrue = checked.every((ans) => ans.value === "true");
  const allAnswered = checked.length === question.length;

  if (allTrue && allAnswered) {
    alert.classList.add("active");
    setTimeout(() => {
      alert.classList.remove("active");
      window.location.reload();
    }, 2000);
  }
});
//  1. Prevent the default behaviour
//    2. Get all selected answers (use the `checked` property on the input to determine if it is selected or not)
//    3. Loop through the selected answer to see if they are correct or not (Check the value of the answer to see if it is the string "true")
//    4. For each correct answer add the class `correct` to the parent with the class `question-item` and remove the class `incorrect`.
//    5. For each incorrect answer add the class `incorrect` to the parent with the class `question-item` and remove the class `correct`.
//    6. BONUS: Make sure unanswered questions show up as incorrect. The easiest way to do this is to add the incorrect class and removing the correct class from all question items before checking the correct answers
//    7. BONUS: If all answers are correct show the element with the id `alert` and hide it after one second (look into setTimeout) (use the class active to show the alert and remove the class to hide it)
