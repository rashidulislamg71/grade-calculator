let form = document.querySelector("form");
let input = document.querySelector("input");

let result = document.querySelector(".result");

// let banglaGPM = document.querySelector(".banglaGPM");
// let englishGPA = document.querySelector(".englishGPA");
// let mathGPA = document.querySelector(".mathGPA");

const calculatGPA = (mark) => {
  if (mark > 100) alert("Invalid Mark");
  else if (mark >= 80) return 5.0;
  else if (mark >= 70) return 4.0;
  else if (mark >= 60) return 3.5;
  else if (mark >= 50) return 3.0;
  else if (mark >= 40) return 2.0;
  else if (mark >= 33) return 1.0;
  else {
    return 0.0;
  }
};
const calculateGrade = (mark) => {
  if (mark > 100) alert("Invalid Mark");
  else if (mark >= 80) return "A+";
  else if (mark >= 70) return "A";
  else if (mark >= 60) return "A-";
  else if (mark >= 50) return "B";
  else if (mark >= 40) return "C";
  else if (mark >= 33) return "D";
  else return "F";
};

// const total = (e)=> {

// }

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let bangla = parseFloat(document.querySelector("#bangla").value);
  let english = parseFloat(document.querySelector("#english").value);
  let math = parseFloat(document.querySelector("#math").value);

  const banglaGPA = calculatGPA(bangla);
  const englishGPA = calculatGPA(english);
  const mathGPA = calculatGPA(math);

  const totalGPA = (banglaGPA + englishGPA + mathGPA) / 3;

  result.innerHTML = `
    <p>Bangla: ${calculateGrade( bangla)} (GPA: ${banglaGPA.toFixed(2)})</p>
    <p>English: ${calculateGrade( english)} (GPA: ${englishGPA.toFixed(2)})</p>
    <p>Math: ${calculateGrade(math)} (GPA: ${mathGPA.toFixed(2)})</p>
    <p>আপনার মোট GPA: ${totalGPA.toFixed(2)}</p>`;
});
