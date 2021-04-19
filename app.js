const quotes = [ "Never stop", "Be better", "Do not give up", "Keep drinking", "Call me an Uber", "Want to get some TacoBell?"]
const p1Button = document.querySelector('#p1Button')
const resetButton = document.querySelector('#reset')
const displayQuote = document.querySelector('#newQuote')
 
p1Button.addEventListener('click', function () {
let randomNumber = Math.floor(Math.random() * quotes.length);
document.getElementById('newQuote').innerHTML = quotes[randomNumber];
})

resetButton.addEventListener('click', function () {
    document.getElementById('newQuote').innerHTML = "Find your quote here!"; 
    })