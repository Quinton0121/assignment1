var zoomW = 100;
var zoomH = 70;
picClick = 119;
imageSet = [
    "url(i1.jpg)",
    "url(i2.jpg)",
    "url(i3.jpg)",
    "url(i4.jpg)",
    "url(i5.jpg)",
    "url(i6.jpg)",
    "url(i7.jpg)",
    "url(i8.jpg)",
    "url(i9.jpg)",
    "url(i10.jpg)",
    "url(i11.jpg)",
    "url(i12.jpg)",
    
]



document.getElementById("BG1").addEventListener("click",function(){
    document.getElementById("ch1").style.backgroundImage = "url(i1.jpg)";
})

document.getElementById("BG1").addEventListener("click",function(){
    document.getElementById("ch2").style.backgroundImage = "url(i2.jpg)";
})

document.getElementById("BG1").addEventListener("click",function(){
    document.getElementById("ch3").style.backgroundImage = "url(i3.jpg)";
})

document
    .getElementById("BG2").addEventListener("click",function(){
    document.getElementById("ch1").style.backgroundImage = "url(i4.jpg)";
})

document.getElementById("BG2").addEventListener("click",function(){
    document.getElementById("ch2").style.backgroundImage = "url(i5.jpg)";
})

document.getElementById("BG2").addEventListener("click",function(){
    document.getElementById("ch3").style.backgroundImage = "url(i6.jpg)";
})

document.getElementById("BG3").addEventListener("click",function(){
    document.getElementById("ch1").style.backgroundImage = "url(i7.jpg)";
})

document.getElementById("BG3").addEventListener("click",function(){
    document.getElementById("ch2").style.backgroundImage = "url(i8.jpg)";
})

document.getElementById("BG3").addEventListener("click",function(){
    document.getElementById("ch3").style.backgroundImage = "url(i9.jpg)";
})

document.getElementById("BG4").addEventListener("click",function(){
    document.getElementById("ch1").style.backgroundImage = "url(i10.jpg)";
})

document.getElementById("BG4").addEventListener("click",function(){
    document.getElementById("ch2").style.backgroundImage = "url(i11.jpg)";
})

document.getElementById("BG4").addEventListener("click",function(){
    document.getElementById("ch3").style.backgroundImage = "url(i12.jpg)";
})

document.getElementById("ch1").addEventListener("mouseenter",function(){
    
    document.getElementById("zoom").style.backgroundImage = document.getElementById("ch1").style.backgroundImage;
})

document.getElementById("ch2").addEventListener("mouseenter",function(){
    
    document.getElementById("zoom").style.backgroundImage = document.getElementById("ch2").style.backgroundImage;
})

document.getElementById("ch3").addEventListener("mouseenter",function(){
    
    document.getElementById("zoom").style.backgroundImage = document.getElementById("ch3").style.backgroundImage;
})

document.getElementById("zoom").addEventListener("click",function(){
    
    document.getElementById("zoomcontrols").style.display = "block";
})

document.getElementById("zoomIn").addEventListener("click",function(){
    zoomH = zoomH + 7
    zoomW = zoomW + 10
    document.getElementById("zoom").style.width = zoomW + "%";
    
    document.getElementById("zoom").style.height = zoomH + "%";
})

document.getElementById("zoomOut").addEventListener("click",function(){
    zoomH = zoomH - 7;
    zoomW = zoomW - 10;
   document.getElementById("zoom").style.width = zoomW + "%";
    
    document.getElementById("zoom").style.height = zoomH + "%";
})

document.getElementById("Next").addEventListener("click",function(){
    picClick += 1;
    document.getElementById("ch1").style.backgroundImage = imageSet[picClick%12]
    
    picClick += 1
     document.getElementById("ch2").style.backgroundImage = imageSet[picClick%12]
    
    picClick += 1
     document.getElementById("ch3").style.backgroundImage = imageSet[picClick%12]
})

document.getElementById("Previous").addEventListener("click",function(){
    picClick -= 5;
    document.getElementById("ch1").style.backgroundImage = imageSet[picClick%12]
    
    picClick += 1
     document.getElementById("ch2").style.backgroundImage = imageSet[picClick%12]
    
    picClick += 1
     document.getElementById("ch3").style.backgroundImage = imageSet[picClick%12]
})
