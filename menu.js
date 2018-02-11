document.getElementById("Open").addEventListener("click",function(){
    document.getElementById("menu").style.left = 0 + "px";
})

document.getElementById("Close").addEventListener("click",function(){
    document.getElementById("menu").style.left = -110 + "px";
})

document.getElementById("MakeBG").addEventListener("click",function(){
    
    document.getElementById("bg").style.backgroundImage = document.getElementById("zoom").style.backgroundImage;
})

document.getElementById("Reset").addEventListener("click",function(){
    
    document.getElementById("bg").style.backgroundImage = 'none';
})

document.getElementById("ShowApp").addEventListener("click",function(){
    
    document.getElementById("app1").style.display = "block";
})

document.getElementById("HideApp").addEventListener("click",function(){
    
    document.getElementById("app1").style.display = "none";
})