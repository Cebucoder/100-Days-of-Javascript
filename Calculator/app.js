let total = 0;
let buffer = "0";
let prevOperator;

const screen = document.querySelector(".screen1");

function buttonClick(value){
    if(isNaN(value)){
        handleSymbol(value);
    }else{
        handleNumber(value);
    }
    screen.innerText = buffer.toLocaleString();

}

function handleSymbol(symbol){
    switch(symbol){
        case 'C':
            buffer = '0';
            total = 0;
            break;
        case '=':
            if(prevOperator === null){
                return;
            }
            flushOperation(parseInt(buffer));
            prevOperator = null;
            buffer = total;
            total = 0;
            break;
        case '←':
            if(buffer.length ===1){
                buffer = '0';
            }else{
                buffer = buffer.substring(0, buffer.length - 1);
            }
            break;   
        case '+':
        case '−':
        case '×':
        case '÷':
            handleMath(symbol);
            break;
    }
}

function handleMath(symbol){
    if(buffer === '0'){
        return;
    }

    const intBuffer = parseInt(buffer);

    if(total === 0){
        total = intBuffer;
    }else{
        flushOperation(intBuffer);
    }
    prevOperator =  symbol;
    buffer = '0';
}

function flushOperation(intBuffer){
    if(prevOperator === '+'){
        total += intBuffer;
    }else if(prevOperator === '−'){
        total -= intBuffer;
    }else if(prevOperator === '×'){
        total *= intBuffer;
    }else if(prevOperator === '÷'){
        total /= intBuffer;
    }
}

function handleNumber(numberString){
    if(buffer === "0"){
        buffer = numberString;

    }else{
        buffer += numberString;

    }
}

function init(){
    document.querySelector('.button-sec').addEventListener('click', function(event){
        buttonClick(event.target.innerText);
    })
}

init();