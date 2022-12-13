const quotes = [
    {
        quote: "When you have faults, do not fear to abandon them.",
        author: "Confucius",
    },
    {
        quote: "Well done is better than well said.",
        author: "Benjamin Franklin",
    },
    {
        quote: "The merit of an action lies in finishing it to the end.",
        author: "Genghis Khan",
    },
    {
        quote: "I hear and I forget. I see and I remember. I do and I understand.",
        author: "Confucius",
    },
    {
        quote: "Isn't it a pleasure to study, and to practice what you have learned?",
        author: "Confucius",
    },
    {
        quote: "The Bible promises no loaves to the loafer.",
        author: "Unknown",
    },
    {
        quote: "Weakness of attitude becomes weakness of character.",
        author: "Albert Einstein",
    },
    {
        quote: "If everything isn't black and white, I say, 'Why the hell not?'",
        author: "John Wayne",
    },
    {
        quote: "The greatest risk is the risk of riskless living.",
        author: "Stephen Covey",
    },
    {
        quote: "Risk comes from not knowing what you're doing.",
        author: "Warren Buffett"
    }
];

const quote = document.querySelector("#quotes .quote");
const author = document.querySelector("#quotes .author");

const todayQuotes = (quotes[Math.floor(Math.random() * quotes.length)]);

quote.innerText = todayQuotes.quote;
author.innerText = todayQuotes.author;