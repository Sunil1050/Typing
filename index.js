let timerId = document.getElementById('timer1');
let timerText = document.getElementById('timer');
let quoteEle = document.getElementById('quoteDisplay');
let spinnerEle = document.getElementById('spinner');
spinnerEle.classList.remove('d-none');
let resultEle = document.getElementById('result');
let inputEle = document.getElementById('quoteInput');
let submitBtn = document.getElementById('submitBtn');
let resetBtn = document.getElementById('resetBtn');

let countDown = parseInt(timerId.textContent);
let timer = function() {
    countDown += 1;
    timerId.textContent = countDown;
};
let intervalId = setInterval(timer, 1000);

let options = {
    method: "GET"
};

let url = "https://apis.ccbp.in/random-quote";
fetch(url, options)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonData) {
        console.log(jsonData)
        spinnerEle.classList.add('d-none');
        quoteEle.textContent = jsonData.content;

    })
submitBtn.addEventListener('click', function() {
    if (inputEle.value == quoteEle.textContent) {
        clearInterval(intervalId);
        resultEle.textContent = "You typed in " + timerText.textContent;
    } else {
        resultEle.textContent = "You typed incorrect sentence";
    }
});
resetBtn.addEventListener('click',function(){
    timerId.textContent = 0;
    let countDown = parseInt(timerId.textContent);
    let timer = function() {
    countDown += 1;
    timerId.textContent = countDown;
};
let intervalId = setInterval(timer, 1000);

let options = {
    method: "GET"
};

let url = "https://apis.ccbp.in/random-quote";
fetch(url, options)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonData) {
        console.log(jsonData)
        spinnerEle.classList.add('d-none');
        quoteEle.textContent = jsonData.content;

    })
    inputEle.value = "";
    resultEle.textContent = "";
submitBtn.addEventListener('click', function() {
    if (inputEle.value == quoteEle.textContent) {
        clearInterval(intervalId);
        resultEle.textContent = "You typed in " + timerText.textContent;
    } else {
        resultEle.textContent = "You typed incorrect sentence";
    }
});
})