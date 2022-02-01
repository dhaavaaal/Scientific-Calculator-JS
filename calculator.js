let buttons = document.querySelectorAll("button");
let display = document.querySelector("#screen");
let secondFunctions = document.querySelector("button.operator-btn.secondFunctions")
let second = document.querySelector("button.operator-btn.second");
let storedMemory = "";
let resultValue = "";
let currentValue = "";
//let secondbtn = document.querySelector("#second");
//let firstbtn = document.querySelector("#first");

// function degreeFunc() {
  // return display.innerText * (180.0/Math.PI);
// }

// function changeLogFunctions(buttonID) {
//     var hideButton, showButton;
//     let xSquare = document.querySelector("button.xSquare");
//     let squareRoot = document.querySelector("button.squareRoot");
//     let power = document.querySelector("button.power");
//     let tenRaisedTox = document.querySelector("button.tenRaisedTox");
//     let log = document.querySelector("button.log");
//     let ln = document.querySelector("button.ln");
//     if(buttonID === 'two') {
//         //let secondbtn = document.querySelector("#second");
//         showButton = '#first';
//         hideButton = '#second';
//         // xSquare.classList.remove("xSquare");
//         // xSquare.classList.add("")
//             document.querySelector("button.xSquare").innerHTML = ' <div class="operator-btn xCube">x<sup>3</sup></div>';
//             document.querySelector("button.squareRoot").innerHTML = ' <div class="operator-btn cubeRoot"><sup>3</sup>√x</div>';
//             document.querySelector("button.power").innerHTML = ' <div class="operator-btn yRootx">y√x</div>';
//             document.querySelector("button.tenRaisedTox").innerHTML = ' <div class="operator-btn twoRaisedTox">2<sup>x</sup></div>';
//             document.querySelector("button.log").innerHTML = ' <div class="operator-btn logxBasedy">log<sub>y</sub>x</div>';
//             document.querySelector("button.ln").innerHTML = ' <div class="operator-btn eRaisedTox">e<sup>x</sup></div>';
//         //document.querySelector("#second").innerHTML = '<button class="operator-btn" id="first">1<sup style="font-size: 0.7rem">st</sup></button>'
//     }
//     if(buttonID === 'one') {
//         //document.querySelector("button.first").innerHTML = '<button class="operator-btn" id="second">2<sup style="font-size: 0.7rem">nd</sup></button>'
//         showButton = '#second';
//         hideButton = '#first';
//             // document.querySelector("button.xCube").innerHTML = ' <div class="operator-btn xSquare">x<sup>3</sup></div>';
//             // document.querySelector("button.cubeRoot").innerHTML = ' <div class="operator-btn squareRoot"><sup>3</sup>√</div>';
//             // document.querySelector("button.yRootx").innerHTML = ' <div class="operator-btn power">y√x</div>';
//             // document.querySelector("button.twoRaisedTox").innerHTML = ' <div class="operator-btn tenRaisedTox">2<sup>x</sup></div>';
//             // document.querySelector("button.logxBasedy").innerHTML = ' <div class="operator-btn log">log<sub>y</sub>x</div>';
//             // document.querySelector("button.eRaisedTox").innerHTML = ' <div class="operator-btn ln">e<sup>x</sup></div>';
//     }
//     document.querySelector(showButton).style.display = '';
//     document.querySelector(hideButton).style.display = 'none';
// }

for (let btns of buttons) {

    btns.addEventListener("click", (e) => {

        let buttonValue = e.target.innerText;

        switch(buttonValue) {

            // case "DEG": degreeFunc();
            //     break;

            case "F-E": let fix = display.innerText;
                        if (fix.length > 20) {
                            display.innerText = display.innerText.substring(0, 8);
                        }
                break; 
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

            /*Trigo*/
            case "sin": display.innerText = Math.sin(display.innerText).toFixed(3);
                break;

            case "cos": display.innerText = Math.cos(display.innerText).toFixed(3);
                break;
      
            case "tan": display.innerText = Math.tan(display.innerText).toFixed(3);
                break;

            case "cot": display.innerText = 1 / Math.tan(display.innerText).toFixed(3);
                break;

            case "cosec": display.innerText = 1 / Math.sin(display.innerText).toFixed(3);
                break;

            case "sec": display.innerText = 1 / Math.cos(display.innerText).toFixed(3);
                break;
            
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

            case "2nd": for (items of secondFunctions) {
                            let value = items.innerText;
                            console.log(value);
                            switch(value) {

                                case "x2": display.innerHTML = 'x<sup>3</sup>';
                                           break;
                                           
                                case "2√x": display.innerHTML = '3√x';
                                           break;           
                                
                                case "xy": display.innerHTML = 'y√x';
                                           break;    
                            
                                case "10x": display.innerHTML = '2x';
                                           break;
                                
                                case "log": display.innerHTML = 'logyx';
                                           break;
                                           
                                case "ln": display.innerHTML = 'ex';
                                           break;                                                     
                            }
                            second.innerText = "1st";
                        }
                // const second = document.querySelector('#second');
                // second.addEventListener('click', changeLogFunctions('two'));
                // break;  

            // case "1st": const first = document.querySelector('#first');
            //             first.addEventListener('click', changeLogFunctions('one'));
            //     break;

            case "π": if(display.innerText == "0") {
                          display.innerText = Math.PI.toFixed(5);
                      }
                      else {
                          display.innerText *= Math.PI.toFixed(5);
                      }
                break; 
            case "e": if(display.innerText == "0") {
                          display.innerText = Math.E.toFixed(5);
                      }
                      else {
                          display.innerText *= Math.E.toFixed(5);
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

            case "x3": display.innerText = eval(display.innerText) * eval(display.innerText) * eval(display.innerText);
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
                
            case "3√x": display.innerText = Math.cbrt(display.innerText);
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