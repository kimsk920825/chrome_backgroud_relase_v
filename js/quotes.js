const quotes = [
  {
    quote: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
  },
  {
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall",
    author: "Nelson Mandela",
  },
  {
    quote:
      "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
    author: "Steve Jobs",
  },
  {
    quote:
      "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "김승규",
  },
  {
    quote:
      "If life were predictable it would cease to be life, and be without flavor. ",
    author: "Eleanor Roosevelt",
  },
  {
    quote:
      "A lie gets halfway around the world before the truth has a chance to get its pants on.",
    author: "김건",
  },
  {
    quote:
      "Success consists of going from failure to failure without loss of enthusiasm.",
    author: "김강",
  },
  {
    quote:
      "Courage is what it takes to stand up and speak; courage is also what it takes to sit down and listen.",
    author: "대니배",
  },
  {
    quote:
      "All the great things are simple, and many can be expressed in a single word: freedom, justice, honor, duty, mercy, hope.",
    author: "세종대왕",
  },
  {
    quote: "김승규는 2022년에 서비스를 런칭하고 월10억을 번다",
    author: "퓨처김승규",
  },
];
const quote = document.querySelector("div#quote span:first-child");
const author = document.querySelector("div#quote span:last-child");

const todayQuotes = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuotes.quote;
quote.classList.add("jb-white");
author.innerText = todayQuotes.author;
author.classList.add("jb-white");
