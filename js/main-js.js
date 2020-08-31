var a=0;
function openNav() {
    if(a==0)
    {
        document.getElementById("mySidepanel").style.width = "250px";
        a=1;
    }else{
        if(a==1)
        {
            document.getElementById("mySidepanel").style.width = "0";
            a=0;
        }
    }
}
function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
}


/** load page  */
$('#indice1').on('click', function () {
    $( "#container-id" ).load("view-index/windows-1.html");
});

/** load page  */
$('#indice2').on('click', function () {
    $( "#container-id" ).load("view-index/windows-2.html");
});

/** load page  */
$('#indice4').on('click', function () {
    $( "#container-id" ).load("view-index/windows-9.html");
});

/** load page  */
$('#indice5').on('click', function () {
    $( "#container-id" ).load("view-index/windows-10.html");
});


/*$( "#a" ).load("windows-gare.html");
document.getElementById("iron").innerHTML = Math.floor(Math.random() * (60 - 10) + 10)+'%';
document.getElementById("bronze").innerHTML = Math.floor(Math.random() * (60 - 20) + 10)+'%';
document.getElementById("silver").innerHTML = Math.floor(Math.random() * (60 - 30) + 10)+'%';
document.getElementById("golden").innerHTML = Math.floor(Math.random() * (60 - 40) + 10)+'%';
document.getElementById("platinum").innerHTML = Math.floor(Math.random() * (50 - 10) + 6)+'%';
document.getElementById("diamond").innerHTML = Math.floor(Math.random() * (40 - 10) + 5)+'%';
document.getElementById("granmaster").innerHTML = Math.floor(Math.random() * (30 - 10) + 5)+'%';
document.getElementById("challenge").innerHTML = Math.floor(Math.random() * (20 - 10) + 5)+'%';
var x = document.getElementsByClassName("gameover");
*/