var array = [];
Maximum = 100;
Minimum = 999;
let largestNum;
let secondLargestNum = 0;
let SmallestNum;
let secondSmallestNum=0;

console.log("Ten random 3 digit number are: ");
function SecondLargestAndSmallest(min, max)
{
    for(let i=0; i<10; i++)
    {
        array[i] = Math.floor(Math.random() * (max - min)) +min
        console.log("Array[" + i + "]: " + array[i]);
        if(array[i]>Maximum)
        {
            Maximum = array[i];
        }
        if (array[i]< Minimum)
        {
            Minimum = array[i];
        }
    }
    let largestNum = array[0];
    let SmallestNum = array[0];
    for(let i = 1; i < array.length; i++) 
    {
        if(array[i] > largestNum)
        {
        secondLargestNum = largestNum;
        largestNum = array[i];  
        }
        else if (array[i] != largestNum && array[i] > secondLargestNum)
        {
            secondLargestNum = array[i];
        }
    };
    console.log("Largest Number in the array is " + largestNum);
    
    let secondSmallestNum = Maximum;
    for(let i = 1; i < array.length; i++) 
    {
        if(array[i] < SmallestNum) 
        {
            secondSmallestNum = SmallestNum;
            SmallestNum = array[i];  
        }
      else if (array[i] !== SmallestNum && array[i] < secondSmallestNum) 
      {
        secondSmallestNum = array[i];
      }
    };
    console.log("Smallest Number in the array is " + SmallestNum);
    console.log("Second smallest Number in the array is " + secondSmallestNum);
}
SecondLargestAndSmallest(100,999);
console.log("Second Largest Number in the array is " + secondLargestNum);

