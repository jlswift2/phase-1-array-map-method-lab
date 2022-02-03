const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  let breakTheArray = tutorials.map(toTitle) 
  console.log(breakTheArray)
  return breakTheArray
}

function toTitle(string) {
  // let lower = string.toLowerCase()
  // console.log(lower)
  let stringSplit = string.split(' ');
  // console.log(stringSplit)
  let camelString = stringSplit.map(element => (element.charAt(0).toUpperCase() + element.slice(1)));
  // console.log(camelString)
  return camelString.join(' ')
}

titleCased()
// console.log(toTitle('Help me I AM trapped'))