var array = [0, -2, 4, -6, 2];

function Sum3IntAddToZero()
{
    let got = false;
    for (let i=0; i<array.length-2; i++)
    {
        for (let j=i+1; j<array.length-1; j++)
        {
            for (let k=j+1; k<array.length; k++)
            {
                if(array[i] - array[j] - array[k] == 0)
                {
                    console.log("(" + array[i] + "," + array[j] + "," + array[k] + ")");
                    got = true;
                }
            }
        }
        if (got == false)
        {
            console.log("Add to zero not exist.");
        }
    }
}
Sum3IntAddToZero();