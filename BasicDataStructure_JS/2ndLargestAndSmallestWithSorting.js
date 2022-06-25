var array = [];
console.log("Ten Random 3 digit Numbers are:");

function SecondLargestSmallestBySorting(min, max) 
{
    for (let i=0; i<10; i++)
    {
        array[i] = Math.floor(Math.random() * (max - min)) +min
        console.log("Array[" + i + "]: " + array[i]);
    }
    array.sort();
    console.log("Sorted array values are: ");
    for (let i=0; i<10; i++)
    {
        console.log("Array[" + i + "]: " + array[i]);
    }
    let secondSmallestNum = array[1];
    let secondLargestNum = array[8];
    console.log("Second smallest Number in the array is " + secondSmallestNum);
    console.log("Second Largest Number in the array is " + secondLargestNum);
}
SecondLargestSmallestBySorting(100,999);