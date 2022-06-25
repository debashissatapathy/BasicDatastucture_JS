function PrintReapetedNumber()
{
    console.log("Reapeted number from 1 to 100  are: ");
    for (let i=1; i<=100; i++)
    {
        if(i%11 == 0)
        {
            console.log(i + ",");
        }
    }
}
PrintReapetedNumber();

