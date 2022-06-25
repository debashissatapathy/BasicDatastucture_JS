const read = require("readline-sync");
var number = read.question("Enter a number: ");
function primeFactors(number)
{
    while (number % 2 == 0)
    {
        console.log(2 + " ");
        number = Math.floor(number / 2);
    } 
    
    for(let i = 3; i <= Math.floor(Math.sqrt(number)); i += 2)
    {  
        
        while (number % i == 0)
        {
            console.log(i + " ");
            number = Math.floor(number / i);
        }
    }
    if (number > 2)
        console.log(number + " ");
        
} 

primeFactors(number);