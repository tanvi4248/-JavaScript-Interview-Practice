const string = prompt('Enter a string to count numbers of vowel','Christmas is here')

const vowels = ['a','e','i','o','u']

function countVowels(text){
    let counter = 0;
    for(let letter of text.toLowerCase()){
        if(vowels.includes(letter)){
            counter++
        }
    }
    return counter
}
console.log(`The String contains ${countVowels(string)} vowel(s)`)


const fnum = prompt('Enter a number to find factorial','5')


function factorial(num){
    let result = 1
    if(num == 0 || num == 1){
        return result
    }else if(num > 1){
        for(var i = num; i>=1; i--){
            result = result * i
        }
        return result
    }  else{
        return "number has to be positive."
      } 
}

result = factorial(fnum)
console.log("Factorial of " + fnum + " : " + result);



var styear = prompt('Enter a Starting Year', "2015")
var endyear = prompt('Enter a End Year', "2023")

function leap_year_range(st_year,end_year){
    var year_range = []
    for(let i = st_year; i <= end_year ; i++){
        year_range.push(i)
    }
    var new_array = []
    year_range.forEach(
        function(year)
         { 
            if (test_LeapYear(year)) 
            new_array.push(year);
         });
     
       return new_array;
          }
     
     function test_LeapYear(year) {
        if ((year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)) {
                     return year;
             } else {
                     return false;
             }
     }

     console.log(leap_year_range(styear,endyear));


     const library = [ 
        {
            title: 'The Devil in the White City',
            author: 'Erik Larson',
            readingStatus: true
        },
        {
            title: 'Mythos: A Retelling of the Myths of Ancient Greece',
            author: 'Stephen Fry',
            readingStatus: true
        },
        {
            title: 'The Lord of the Rings',
            author: 'JRR Tolkien',
            readingStatus: false
        }
    ];
  
    const read = library.map((element)=>{
        if(element.readingStatus === true){
            return `You have already read ${element.title} by ${element.author}.`
        }else{
            return `You still need to read ${element.title} by ${element.author}.`
        }
    })  
   console.log(read)


const userInput = prompt('Enter numbers with 0','6,0,8,4,0')
const array = userInput.split(",")

var numberArray = array.map(Number)

function moveZero(){
    for(let i = 0; i<= numberArray.length; i++){
        if(numberArray[i] === 0){
            numberArray.splice(i,1)
            numberArray.push(0)
            return numberArray
        }
    }
}
console.log(moveZero())



let userInput1 = prompt('Enter numbers to convert Roman','369')
  const numerals  = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  let roman_r = ''
  for(const key in numerals) {
    roman_r += key.repeat(Math.floor(userInput1/numerals[key])) 
    userInput1 = userInput1 % numerals[key]
  }
console.log(roman_r)
