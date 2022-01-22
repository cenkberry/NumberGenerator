const numberbox = document.getElementById('numberbox');
const button = document.getElementById('button');
const result = document.getElementById("result");

button.addEventListener("click", () => {

    const userInput = document.getElementById('userInput').value;
    const numDivide = document.getElementById('divide').value;
    let resultnum = 1;
    numberbox.innerHTML = " ";
    result.innerHTML = "Total Number: " + 0;

    for (let i = 1; i <= userInput; i++) {
        const newdiv = document.createElement("div");
        newdiv.style.width = "80px";
        newdiv.style.height = "60px";
        newdiv.style.fontSize = "2rem";
        newdiv.style.display = "inline-flex";
        newdiv.style.alignItems = "center";
        newdiv.style.justifyContent = "center";
        newdiv.style.border = "3px solid #000000";
        newdiv.innerHTML = i;
        numberbox.appendChild(newdiv);

        if (newdiv.innerHTML % numDivide === 0) {

            newdiv.style.backgroundColor = "#007e00";
            newdiv.style.color = "#ffffff";
            result.innerHTML =  "Total Number: " + resultnum++;

        } else {
            newdiv.style.backgroundColor = "#ebeb00";
            newdiv.style.color = "#000000";
            newdiv.style.opacity = "0.2";
        }

    }
});