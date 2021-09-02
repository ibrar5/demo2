function dub(){
    if(document.getElementById("inp").checked){
        document.getElementById("dub").style.display ="block";
        document.getElementById("sub").style.display="none";
    }else {
        document.getElementById("dub").style.display ="none";
        document.getElementById("sub").style.display="block";
    }
}

var width = screen.width;

    if(width < 576)
    {
        document.getElementById("sobi").style.display = "none";
        document.getElementById("cobi").style.display = "block";
    }