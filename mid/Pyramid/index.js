function check(){
    document.getElementById("p1").innerText = ""
    var n = document.getElementById("in1").value

    for(var i=0;i<n;i++)
    {
        for(var j=0;j<(i/2);j++)
        {
            document.getElementById("p1").innerText += " "
        }
        for(var k=0;k<=i;k++)
        {
            document.getElementById("p1").innerText += "*"
        }
        document.getElementById("p1").innerHTML += "<br>"
    }
    
    
}