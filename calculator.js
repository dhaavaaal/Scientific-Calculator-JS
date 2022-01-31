let buttons = document.querySelectorAll("button");
let display = document.querySelector("#screen");
let storedMemory = "";
let resultValue = "";
let currentValue = "";

// function degreeFunc() {

// }

for (let btns of buttons) {

    btns.addEventListener("click", (e) => {

        let buttonValue = e.target.innerText;

        switch(buttonValue) {

            // case "DEG": degreeFunc();
            //     break;

            // case "F-E": 
            //     break;

            /*memory*/
            case "MC": storedMemory = "";
                break;

            case "MR": display.innerText += storedMemory;
                break;    

            case "M+": currentValue = Number.parseFloat(display.innerText);
                       storedMemory = Number.parseFloat(storedMemory);
                       storedMemory += currentValue; 
                       display.innerText = storedMemory; 
                break;

            case "M-": currentValue = Number.parseFloat(display.innerText);
                       storedMemory = Number.parseFloat(storedMemory);
                       storedMemory -= currentValue; 
                       display.innerText = storedMemory;
                break;
            
            case "MS": storedMemory = display.innerText;
                break;

            /*Trigo
            case "sin": display.innerText = Math.sin(display.innerText).toFixed(8);
                break;

            case "cos": display.innerText = Math.cos(display.innerText).toFixed(8);
                break;
      
            case "tan": display.innerText = Math.tan(display.innerText).toFixed(8);
                break;

            case "cot": display.innerText = 1 / Math.tan(display.innerText).toFixed(8);
                break;

            case "cosec": display.innerText = 1 / Math.sin(display.innerText).toFixed(8);
                break;

            case "sec": display.innerText = 1 / Math.cos(display.innerText).toFixed(8);
                break;
            */
            /*functions*/
            case "Floor": display.innerText = Math.floor(display.innerText);
                break;

            case "Ceiling": display.innerText = Math.ceil(display.innerText);
                break;

            case "Round": display.innerText = Math.round(display.innerText);
                break;

            case "Sign": display.innerText = Math.sign(display.innerText);
                break;

            case "Truncate": display.innerText = Math.trunc(display.innerText);
                break;
                
            /*2nd */

            case "π": if(display.innerText == "0") {
                          display.innerText = Math.PI.toFixed(8);
                      }
                      else {
                          display.innerText *= Math.PI.toFixed(8);
                      }
                break; 
            case "e": if(display.innerText == "0") {
                          display.innerText = Math.E.toFixed(8);
                      }
                      else {
                          display.innerText *= Math.E.toFixed(8);
                      }
                break;

            case "C": display.innerText = "";
                break;
            
            case "←": if (display.innerText) {
                          display.innerText = display.innerText.slice(0, -1);
                      }
                break;

            case "x2": display.innerText = eval(display.innerText) * eval(display.innerText);
                break;
            
            case "1/x": display.innerText = eval(1 / display.innerText);
                break;
            
            case "|x|": display.innerText = Math.abs(display.innerText);
                break;
            
            case "exp":display.innerText = Math.exp(display.innerText);
                break;
            
            case "mod": buttonValue = "%";
                        display.innerText += buttonValue;
                break;    
            
            case "2√x": display.innerText = Math.sqrt(display.innerText);
                break;    

            case "n!": let number = Number.parseFloat(display.innerText)
                       function factorial(num) {
                           if(num < 0) return "Invalid Input";
                           else if(num == 0) return 1;
                           else return (num * factorial(num - 1));
                       }    
                       output = factorial(number);
                       display.innerText = output;
                break;
            
            case "x^y": buttonValue = "**";
                        display.innerText += buttonValue;
                break;

            case "10x": display.innerText = 10 ** eval(display.innerText);
                break;
            
            case "log": display.innerText = Math.log10(display.innerText);
                break;
            
            case "ln": display.innerText = Math.log(display.innerText).toFixed(8);
                break;
                        
            case "+/-": display.innerText = display.innerText * -1;
                break;   
               
            /*. wala */           
            case "=": try{
                          resultValue = display.innerText;
                          display.innerText = eval(resultValue);
                      }
                      catch {
                          display.innerText = "Invalid Input";
                      }
                break;

            default: display.innerText+=buttonValue;
        }
    })
}