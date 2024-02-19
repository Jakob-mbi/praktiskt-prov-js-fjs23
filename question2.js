// 2.1 (1p) Gör om följande funktion till en arrow-funktion
const getCurrentDateTime = function () {
  const now = new Date();
  return now.toLocaleString(); // Converts to a more readable format
};

// Din kod här:
const getCurrentDateTimeArrow = () => {
  const now = new Date();
  return now.toLocaleString();
}


//2.2 (1p) Gör om följande funktion till en arrow-funktion:
function stringIncludes(string, substring) {
  return string.indexOf(substring) !== -1;
}

// Din kod här:

const stringIncludesArrow = (string, substring) => {
  return string.indexOf(substring) !== -1;
}


//2.3 (1p) Gör om följande funktion till en arrow-funktion:
const numbers = [1, -1, 2, -2, 3, -3];

const removeNegatives = numbers.filter(function (number) {
  return number >= 0;
});

// Din kod här:
const removeNegativesArrow = numbers.filter((number) => {return number >= 0;})



// 2.4 (2p) Skriv om följande funktion (och callback-funktionen) till arrow-funktioner:

function logMessageLater() {
  setTimeout(function () {
    console.log("Logged after 2 seconds");
  }, 2000);
}

// Din kod här:
const logMessageLaterArrow = () =>{
  setTimeout(()=>{console.log("Logged after 2 seconds")}, 2000)
}



// Test
console.log(getCurrentDateTimeArrow()); // Ska logga dagens datum och tid
console.log(stringIncludesArrow("Hello World", "Hello")); // Ska logga true
console.log(removeNegativesArrow); // Ska logga [1, 2, 3]
console.log(logMessageLaterArrow()); // Ska logga "Logged after 2 seconds" efter 2 sekunder
