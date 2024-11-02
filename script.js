let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let string = "";
let lastAnswer = ""; 

let arr = Array.from(buttons);
arr.forEach(button => {
  button.addEventListener('click', (e) => {
    if (e.target.innerHTML == '=') {
      try {
        lastAnswer = eval(string); 
        string = lastAnswer.toString();  
        input.value = string;
      } catch {
        input.value = "Error";
      }
    } else if (e.target.innerHTML == 'AC') {
      string = "";
      input.value = string;
    } else if (e.target.innerHTML == 'DEL') {
      string = string.substring(0, string.length - 1);
      input.value = string;
    } else if (e.target.innerHTML == 'Ans') {
      string += lastAnswer.toString();  
      input.value = string;
    } else {
      string += e.target.innerHTML;
      input.value = string;
    }
  });
});