
/// problem 1
function plusMinus(arr) {
    // Write your code here
    let [p,n,z] = [0,0,0];
    let len = arr.length;
    
    for(let i =0; i< len; i++)
    {
        if(arr[i]>0)
        {
            p++;
        }
        else if(arr[i]<0)
        {
            n++;
        }
        else{
            z++;
        }
    }
    
    p = p/len;
    z = z/len;
    n = n/len;
    console.log(p.toFixed(6))
    console.log(n.toFixed(6))
    console.log(z.toFixed(6))
}


//// Problem 2.. Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers.
//// Then print the respective minimum and maximum values as a single line of two space-separated long integers.

function miniMaxSum(arr) {
    // Write your code here
    let max = Math.max(...arr);
    let min = Math.min(...arr)
    
    arr.splice(arr.indexOf(max),1);
    arr.splice(arr.indexOf(min),1);
    
    let sum = arr.reduce((partialSum, a) => partialSum + a, 0);
    
    console.log(String(sum+min)+" "+String(sum+max))
}
