function check(){

    var n = document.getElementById("in1").value

    var b = true;
    if(n==2)
    {
        b = false;
    }
    if(b==true)
    {
        for(let i=2 ; i<n; i++)
    
    
        {
            if((n%i)== 0 )
            {
                b = false
            }
            
            
        }
    }
    if(b==true)
    {
        document.getElementById("p1").innerText = "Answer: Not Prime"
    }
    if(b==false)
    {
        document.getElementById("p1").innerText = "Answer: Prime Number"
    }
    
}