
var words=countWords()

console.log(words)
// This is to set what need to display in screen when loaded 
window.onload = () => {
    let result = countWords();
    console.log(result);
  };
  
  function countWords() {
    // The text variable add the contents 
    let text =
      "A question like this is testing your fluency, a person who was really comfortable with the vocabulary could pick nearly any topic and weave many of these in. Starting with a topic first is a good approach here.";
  
    //Set code to remove , . and convert all to lowercase whivh able to count the word
     text=text.replace(/[,.]/g).toLowerCase();
    // The wordArray array will contains a key value pair for words and their occurences in the text
    const wordArray = text.split(" ");
  
    //  loop creates goes through the wordArray 
    const wordCount = {};
    wordArray.forEach((item) => {
      if (wordCount[item] == null) wordCount[item] = 1;
      else {
        wordCount[item] += 1;
      }
    });
  
    // The converted object is converted to an array
    let myArray = Object.entries(wordCount);
    let bArray= myArray.sort(function(a, b)
    {
      return b[1] - a[1]
    }); 
    
    
    bArray=bArray.slice(0,3)
    
    return bArray;
    
  }
  
  
  if (typeof module !== "undefined") {
    module.exports = countWords;
  }
  