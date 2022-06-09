function check(){

    var n = document.getElementById("in1").value

    
    if((n%2)==0)
    {
        document.getElementById("p1").innerText = "Answer: Even"
    }
    else
    {
        document.getElementById("p1").innerText = "Answer: Odd"
    }
    
}