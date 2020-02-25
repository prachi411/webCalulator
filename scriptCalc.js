const numbers = document.querySelectorAll(".number");
// console.log(numbers);
const calscreen = document.querySelector('.calculator-screen');
const updatescreen=(n)=>{
    calscreen.value=n
}

numbers.forEach((n)=>{
    // console.log(n);
    // n.addEventListener("click",()=>{
    //     console.log("nuber is pressed");
    // })
    n.addEventListener("click",(p)=>{
        updatescreen(p.target.value);
    })
})

let prevInput='0'
let calcOperator = ''
let currentInput = '0'

const inputnumber =(num)=>{
    if(currentInput==='0')
    {
        currentInput=num
    }
    else{
        currentInput += num
    }    
}
numbers.forEach((num)=>{
    
    num.addEventListener("click",(event)=>{
        inputnumber(event.target.value)
        updatescreen(currentInput);
    })
})
const operators = document.querySelectorAll(".operator");
const inputOperator = (op)=>{
    prevInput = currentInput
    calcOperator=op
    currentInput='0'
}
operators.forEach((op)=>{
    op.addEventListener("click",(p)=>{
        inputOperator(p.target.value);
    })
})
const equalSign =document.querySelector(".equal-sign");
equalSign.addEventListener("click",()=>{
    //console.log("equal pressed");
    calculate()
    updatescreen(currentInput);
})
const calculate=()=>{
    let result='0'
    switch(calcOperator){
        case '+':
            result=parseInt(currentInput)+parseInt(prevInput);
            break
        case '-':
            result = parseInt(prevInput)-parseInt(currentInput);
            break;
        case '*':
            result = parseInt(prevInput) * parseInt(currentInput);
            break;
        case '/':
            result= parseInt(prevInput)/parseInt(currentInput);
            break;
            default:
                return
    }
    currentInput=result.toString();
    calcOperator=''
}
const clearbtn = document.querySelector('.all-clear');
clearbtn.addEventListener('click',(p)=>{
    console.log('AC is pressed');
    clearAll()
    updatescreen(currentInput)
})
const  clearAll=()=>{
    prevInt=0
    calcOperator=''
    currentInput='0'
}