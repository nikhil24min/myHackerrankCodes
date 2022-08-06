
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
