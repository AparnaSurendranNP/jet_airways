
function hideMobile(){
    document.getElementById("default-navi-icon").style.display = "none";
    document.getElementById("default-navi-btn").style.display = "none";
    document.getElementById("mb-navigation").style.display = "block";
}

function showMobile(){
    document.getElementById("mb-navigation").style.display = "none";
    document.getElementById("default-navi-icon").style.display = "block";
    document.getElementById("default-navi-btn").style.display = "block";
}