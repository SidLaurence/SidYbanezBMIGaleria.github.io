function solveBMI(){
    let weight = document.getElementById
    ("weight").value;
    let height = document.getElementById
    ("height").value;
    let bmi = weight / height **2;
    return bmi;
}

function getStatus(bmi){
    var status;
if (bmi<18.5){
    status = " Underweight";
} else if (bmi>=18.5 && bmi<25.0){
    status = " Normal";
} else if (bmi>=25.0 && bmi<30.0){
    status = " Discord Mod"
} else {
    status = " Discord Mod that has never touched grass";
}
return status;
}

function displayRes() {
    let bmiRes = solveBMI();
    document.getElementById("bmi").innerText = bmiRes.toFixed(2);

let status = getStatus (bmiRes);
console.log (status);
document.getElementById("status").
innerText = status;
console.log(bmiRes)
document.getElementsByClassName("result-cont")[0].style.display = "block";
}