var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    modal.style.display = "block";
}
span.onclick = function () {
    modal.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

window.onload=function(){
    var menuElem = document.getElementById('dropdown-menu'),
        titleElem = menuElem.querySelector('.title');
    document.onclick = function(event) {
        var target = elem = event.target;
        while (target != this) {
            if (target == menuElem) {
                if(elem.tagName == 'A') {
                    titleElem.innerHTML = elem.textContent;
                    titleElem.style.backgroundImage =  getComputedStyle(elem, null)['backgroundImage']
                }
                menuElem.classList.toggle('open')
                return;
            }
            target = target.parentNode;
        }
        menuElem.classList.remove('open');
    }
}