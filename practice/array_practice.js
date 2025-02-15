//  arrays.js
const steps = ["one", "two", "three"];
const listTemplate = (step) => {
  return `<li>${step}</li>`;//the html string made from step
};
const stepsHtml = steps.map(listTemplate).join("");// use map to convert the list from strings to HTML
document.querySelector("#myList").innerHTML = stepsHtml;// set the innerHTML


const grades = ["A", "B", "A"];
function convertGradeToPoints(grade) {
  let points = 0;
  if (grade === "A") {
    points = 4;
  } else if (grade === "B") {
    points = 3;
  }
  return points;
}
const gpaPoints = grades.map(convertGradeToPoints);