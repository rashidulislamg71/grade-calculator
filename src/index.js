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

  let totalGPA = (banglaGPA + englishGPA + mathGPA) / 3;

  if(calculateGrade( bangla) === "F"){
    totalGPA = 0.00
  }
 else if(calculateGrade( english) === "F"){
    totalGPA = 0.00
  }
 else if(calculateGrade( math) === "F"){
    totalGPA = 0.00
  }
  else{
    totalGPA 
  }

  result.innerHTML = `
    <p>Bangla: <b>${calculateGrade( bangla)}</b> </p>
    <p>English: <b>${calculateGrade( english)}</b> </p>
    <p>Math: <b>${calculateGrade(math)}</b> </p>
    <p>You got Point: <b>${totalGPA.toFixed(2)}</b></p>`;
});
