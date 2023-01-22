let isCalculator = true
const calculator = () => {
    data = document.querySelector('.calcInput').value;
    const newData = data.trim();
    const isValidExp = /^\d+\s?[\+\-\*\/]\s?\d+$/;
    if (!isValidExp.test(newData)) {
      return document.querySelector(".calcResult").innerHTML = ('Not a valid expression');
    }
  
    const exp = newData.match(/[\+\*\/\-]/)[0];
    const stringSplit = newData.replaceAll(' ', '').split(exp);
    switch (exp) {
      case '+':
        return document.querySelector(".calcResult").innerHTML = `${Number(stringSplit[0]) + Number(stringSplit[1])}`;
      case '-':
        return document.querySelector(".calcResult").innerHTML = `${stringSplit[0] - stringSplit[1]}`;
      case '*':
        return document.querySelector(".calcResult").innerHTML = `${stringSplit[0] * stringSplit[1]}`;
      case '/':
        if (stringSplit[1] !== '0') {
          return document.querySelector(".calcResult").innerHTML = `${stringSplit[0] / stringSplit[1]}`;
        }
        return document.querySelector(".calcResult").innerHTML = ("Can't divide by zero");
      default:
        return document.querySelector(".calcResult").innerHTML = 'error';
    }
  };

  const fizzBuzz = () => {
    // document.querySelector('.fizzbuzzlist').innerHTML='';
    const ulEle = document.querySelector(".fizzbuzzlist");
    ulEle.innerHTML = '';
    index = document.querySelector('.from').value;
    length = document.querySelector('.to').value;
    if((index < 0 || index > 100) || (length < 0 || length > 100)){
        return ulEle.innerHTML = 'Input has to be between 1 and 100';
    }
    // if(typeof index === 'string' || typeof length === 'string'){
    //     return ulEle.innerHTML = 'Input has to be a NUMBER!!!';
    // }
        for(let i = index; i < length; i++){
        const newLi = document.createElement('li');
        newLi.innerHTML = `${i % 3 === 0 && i % 5 === 0
            ? 'FizzBuzz'
            : i % 3 === 0
            ? 'Fizz'
            : i % 5 === 0
            ? 'Buzz'
            : i}`
            ulEle.appendChild(newLi);
    }
    return 
  };

 function switchChange(){
    const selected = document.querySelector('.selectedText');
    const unselected = document.querySelector('.unselectedText');
    const calculatorContainer = document.querySelector('.calculatorContainer');
    const fizzyBuzzyContainer = document.querySelector('.fizzyBuzzyContainer');
    selected.classList.replace('selectedText', 'unselectedText');
    unselected.classList.replace('unselectedText','selectedText');
    if (isCalculator){
        calculatorContainer.style.display = 'none';
        fizzyBuzzyContainer.style.display = 'flex';
        isCalculator = false;
    } else {
        calculatorContainer.style.display = 'flex';
        fizzyBuzzyContainer.style.display = 'none';
        isCalculator = true;
    }



 } 