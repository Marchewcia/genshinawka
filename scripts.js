function enable(buttonNumber){
    let index = buttonNumber - 1;
    innerButton = document.getElementsByTagName("button")[index].innerHTML;
    innerButton = innerButton.slice(4);
    document.getElementsByTagName("button")[index].innerHTML = "Hide" + innerButton;
    document.getElementsByTagName("button")[index].setAttribute("onclick", "disable(" + buttonNumber + ")")
    document.getElementsByClassName("section")[index].style.display = "flex";
}
function disable(buttonNumber){
    let index = buttonNumber - 1;
    innerButton = document.getElementsByTagName("button")[index].innerHTML;
    innerButton = innerButton.slice(4);
    document.getElementsByTagName("button")[index].innerHTML = "Show" + innerButton;
    document.getElementsByTagName("button")[index].setAttribute("onclick", "enable(" + buttonNumber + ")")
    document.getElementsByClassName("section")[index].style.display = "none";
}

function getWeeklyTable(){
    let website = document.getElementsByTagName("iframe")[0].innerHTML;
    let tab = website.getElementsByTagName("table")[1];
    document.getElementsByTagName("iframe")[0].innerHTML = tab;
}