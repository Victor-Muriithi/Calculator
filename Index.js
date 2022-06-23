const result = document.getElementById('result');

const button = Array.from(document.getElementsByClassName('button'));

var count = 1;


const background = document.getElementsByTagName('body');
const calculator = document.getElementsByClassName('calculator');
const calc = document.getElementsByClassName('calc');
const buttonEach = document.getElementsByClassName('button');
const theme = document.getElementsByClassName('theme');
const numbers = document.getElementsByClassName('numbers');
const change = document.getElementsByClassName('change');
const roundBtn = document.getElementsByClassName('roundBtn');
const resultArea = document.getElementsByClassName('result');
const buttons = document.getElementsByClassName('buttons');
const btnReset = document.getElementsByClassName('buttonReset');
const btnDel = document.getElementsByClassName('buttonDel');
const btnEquals = document.getElementsByClassName('buttonEquals');





console.log(button);

button.map((button) => {
    button.addEventListener('click', (e) => {
        switch (e.target.innerText) {
            case "Reset":
                result.innerText="";
                break;
            case "Del":
                result.innerText = result.innerText.slice(0, -1);
                break;
            case '=':
                try{
                    result.innerText = eval(result.innerText);
                } catch{
                    result.innerText= "Invalid!";
                }
                break;

            case 'x':
                result.innerText = "*";
                break;
            default:
                result.innerText += e.target.innerText;
        }
    });
});

const handleClick=()=>{
     count++;
    console.log(count);


    if(count==1){
        background[0].style.backgroundColor="#3b4664";

    }
    else if(count==2){
        background[0].style.backgroundColor="#17062a";
        calculator[0].style.backgroundColor="#17062a";
        calc[0].style.color="#f9dc3e";
        theme[0].style.color="#f9dc3e";
        numbers[0].style.color="#f9dc3e";
        change[0].style.backgroundColor="#1e0836";
        roundBtn[0].style.backgroundColor="#08dcd7";
        resultArea[0].style.backgroundColor="#1e0836";
        resultArea[0].style.color="#f9dc3e";
        buttons[0].style.backgroundColor="#1e0836";
        buttonEach.style.color ="#f9dc3e";
        buttonEach.style.backgroundColor="#331b4d";
        buttonEach.style.borderBottom="3px solid #861f9d";
        btnDel[0].style.backgroundColor="#56077c";
        btnDel[0].style.color="white";
        btnReset[0].style.backgroundColor="#56077c";
        btnReset[0].style.color="#white";
        btnEquals[0].style.backgroundColor="#08dcd7";
        btnEquals[0].style.color="black";
    }
    else if(count==3){
        background[0].style.backgroundColor="yellow";
        count=0;    //reset the counter
    }



}