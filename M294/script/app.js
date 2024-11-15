const quotes = {
  quotes: [
    {
      id: 1,
      quote:
        "Life isn’t about getting and having, it’s about giving and being.",
      author: "Kevin Kruse",
    },
    {
      id: 2,
      quote:
        "Whatever the mind of man can conceive and believe, it can achieve.",
      author: "Napoleon Hill",
    },
    {
      id: 3,
      quote: "Strive not to be a success, but rather to be of value.",
      author: "Albert Einstein",
    },
    {
      id: 4,
      quote:
        "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.",
      author: "Robert Frost",
    },
    {
      id: 5,
      quote: "I attribute my success to this: I never gave or took any excuse.",
      author: "Florence Nightingale",
    },
    {
      id: 6,
      quote: "You miss 100% of the shots you don’t take.",
      author: "Wayne Gretzky",
    },
    {
      id: 7,
      quote:
        "I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.",
      author: "Michael Jordan",
    },
    {
      id: 8,
      quote:
        "The most difficult thing is the decision to act, the rest is merely tenacity.",
      author: "Amelia Earhart",
    },
    {
      id: 9,
      quote: "Every strike brings me closer to the next home run.",
      author: "Babe Ruth",
    },
    {
      id: 10,
      quote:
        "Definiteness of purpose is the starting point of all achievement.",
      author: "W. Clement Stone",
    },
    {
      id: 11,
      quote:
        "We must balance conspicuous consumption with conscious capitalism.",
      author: "Kevin Kruse",
    },
    {
      id: 12,
      quote:
        "Life is what happens to you while you’re busy making other plans.",
      author: "John Lennon",
    },
    {
      id: 13,
      quote: "We become what we think about.",
      author: "Earl Nightingale",
    },
    {
      id: 14,
      quote:
        "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails.  Explore, Dream, Discover.",
      author: "Mark Twain",
    },
    {
      id: 15,
      quote: "Life is 10% what happens to me and 90% of how I react to it.",
      author: "Charles Swindoll",
    },
    {
      id: 16,
      quote:
        "The most common way people give up their power is by thinking they don’t have any.",
      author: "Alice Walker",
    },
    {
      id: 17,
      quote: "The mind is everything. What you think you become.",
      author: "Buddha",
    },
    {
      id: 18,
      quote:
        "The best time to plant a tree was 20 years ago. The second best time is now.",
      author: "Chinese Proverb",
    },
    {
      id: 19,
      quote: "An unexamined life is not worth living.",
      author: "Socrates",
    },
    {
      id: 20,
      quote: "Eighty percent of success is showing up.",
      author: "Woody Allen",
    },
    {
      id: 21,
      quote:
        "Your time is limited, so don’t waste it living someone else’s life.",
      author: "Steve Jobs",
    },
    {
      id: 22,
      quote: "Winning isn’t everything, but wanting to win is.",
      author: "Vince Lombardi",
    },
    {
      id: 23,
      quote:
        "I am not a product of my circumstances. I am a product of my decisions.",
      author: "Stephen Covey",
    },
    {
      id: 24,
      quote:
        "Every child is an artist.  The problem is how to remain an artist once he grows up.",
      author: "Pablo Picasso",
    },
    {
      id: 25,
      quote:
        "You can never cross the ocean until you have the courage to lose sight of the shore.",
      author: "Christopher Columbus",
    },
    {
      id: 26,
      quote:
        "I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
      author: "Maya Angelou",
    },
    {
      id: 27,
      quote: "Either you run the day, or the day runs you.",
      author: "Jim Rohn",
    },
    {
      id: 28,
      quote: "Whether you think you can or you think you can’t, you’re right.",
      author: "Henry Ford",
    },
    {
      id: 29,
      quote:
        "The two most important days in your life are the day you are born and the day you find out why.",
      author: "Mark Twain",
    },
    {
      id: 30,
      quote:
        "Whatever you can do, or dream you can, begin it.  Boldness has genius, power and magic in it.",
      author: "Johann Wolfgang von Goethe",
    },
  ],
  total: 100,
  skip: 0,
  limit: 30,
};

let apiQuotesObject;

//FETCH
// fetch function

async function fetchQuotes(){
  const response = await fetch("https://dummyjson.com/quotes?limit=100");
  const fetchJson = await response.json();
  const apiQuotes = fetchJson.quotes;
  return apiQuotes;
}

async function displayApiQuotes() {
  const apiQuotes = await fetchQuotes();
  apiQuotes.forEach(element => {
    displayQuote(element);
  });
}

displayApiQuotes();




// javascript
const quotesList = document.getElementById("quotes-list");
const searchBar = document.getElementById("search-bar");
searchBar.addEventListener("keyup", queryQuotes);
const quotesAmount = document.getElementById("qoutes-amount-selection");
quotesAmount.addEventListener("click", showAmount);
const quotesArray = quotes.quotes;
let searchInput = searchBar.value;




function showAmount() {
  let value = quotesAmount.value;
  console.log(value);
  return value;
}



async function queryQuotes()
{
  const apiQuoteArray = await fetchQuotes();
  console.log(apiQuoteArray);
  searchInput = searchBar.value;
  if(searchInput != "")
  {
    quotesList.textContent = "";
    for (let i = 0; i < apiQuoteArray.length; i++) {
      const quote = apiQuoteArray[i].quote;
      if (quote.includes(searchInput)) {
        displayQuote(apiQuoteArray[i]);
      }
    }
  } else {
    quotesList.textContent = "";
    for (let i = 0; i < apiQuoteArray.length; i++) {
      displayQuote(apiQuoteArray[i]);
    }
  }
}

function displayQuote(quoteObj)
{
    const li = document.createElement("li");
  const p = document.createElement("p");
  const i = document.createElement("i");
  
  p.textContent = quoteObj.quote;
  i.textContent = quoteObj.author;

  li.append(p);
  li.append(i);

  quotesList.append(li);
}






/* append a Hello Quote
const li = document.createElement("li");
const p = document.createElement("p");
p.textContent = "Hello";
li.append(p);
quotesList.append(li);
*/


/*
fetch("https://dummyjson.com/quotes?limit=100")
.then(res => {
    if (res.ok) {
        console.log('Successfully fetched quotes')
        return res.json()
    } else {
        console.log('Fail to fetch quotes')
        console.log(res)
    }
})
.then(async data => {
  try {
  apiQuotes = data;
  console.log(apiQuotes);
  }
  catch(error) { 
    console.log(error);
  }
})
*/