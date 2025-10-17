
var quoteArray = [
    {
        'quote': '\“So many books, so little time.\”',
        'author': '― Frank Zappa',
        'img_src': "./img/1.jpg"
    },

    {
        'quote': '\“Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.\”',
        'author': '― Albert Einstein',
        'img_src': "./img/2.jpg"
    },

    {
        'quote': '\“Be the change that you wish to see in the world.\”',
        'author': '― Mahatma Gandhi',
        'img_src': "./img/3.jpg"
    },

    {
        'quote': '\“Here\'s to the crazy ones. The misfits. The rebels. The troublemakers. The round pegs in the square holes.\”',
        'author': '― Steve Jobs',
        'img_src': "./img/4.jpg"
    },

    {
        'quote': '\“A room without books is like a body without a soul.\”',
        'author': '― Marcus Tullius Cicero',
        'img_src': "./img/5.jpg"
    },
]

var quoteText = document.getElementById("quoteText");
var quoteAuthor = document.getElementById("quoteAuthor");
var quoteImg = document.getElementById("quoteImg");

var prevIndex;
var randomIndex;
var selectedQuote;

function quoteGen() {

    do {
        randomIndex = Math.floor(Math.random() * quoteArray.length);
    } while (randomIndex === prevIndex);
    prevIndex = randomIndex;

    selectedQuote = quoteArray[randomIndex];
    quoteText.innerText = selectedQuote.quote;
    quoteAuthor.innerText = selectedQuote.author;
    quoteImg.src = selectedQuote["img_src"];
}