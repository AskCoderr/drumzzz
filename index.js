// setting nav margin
var margTop = window.getComputedStyle(document.body).marginTop;
var margLeft = window.getComputedStyle(document.body).marginLeft;
var margRight = window.getComputedStyle(document.body).marginRight;
var mainCont = document.querySelector('.nav');
mainCont.style.marginTop = '-' + margTop;
mainCont.style.marginLeft = '-' + margLeft;
mainCont.style.marginRight = '-' + margRight;

// assigning img sources and sound sources
var imgElems = document.querySelectorAll('.main-container img');
var overlays = document.querySelectorAll('.overlay')
var images = ['tom1', 'tom2', 'tom3', 'tom4', 'crash', 'kick', 'snare'];
var keys = ['w', 'a', 's', 'd', 'i', 'j', 'l'];
for (var i = 0; i < imgElems.length; i++) {
    var temp = 'images/' + images[i] + '.png';
    var temp2 = 'sounds/' + images[i] + '.mp3';
    imgElems[i].setAttribute('src', temp);
    addOverlayClickHandler(overlays[i], temp2);
    addOverlayKeyHandler(overlays[i], temp2, keys[i]);
}

function addOverlayClickHandler(overlay, soundSrc) {
    overlay.addEventListener('mousedown', function () {
        if (overlay.getAttribute('class').includes('pressed') != true) {
            overlay.setAttribute('class', overlay.getAttribute('class') + ' pressed');
        }
        var sound = new Audio(soundSrc);
        sound.play();
    });
    overlay.addEventListener('mouseup', function(){
        overlay.setAttribute('class', overlay.getAttribute('class').replace(' pressed', ''));
    })
}

function addOverlayKeyHandler(overlay, soundSrc, keyPress) {
    document.addEventListener('keydown', function (event) {
        if (event.key === keyPress || event.key === keyPress.toUpperCase()) {
            if (overlay.getAttribute('class').includes('pressed') != true) {
                overlay.setAttribute('class', overlay.getAttribute('class') + ' pressed');
            }
            var sound = new Audio(soundSrc);
            sound.play();
        }
    });
    document.addEventListener('keyup', function (event) {
        if (event.key === keyPress || event.key === keyPress.toUpperCase()) {
            overlay.setAttribute('class', overlay.getAttribute('class').replace(' pressed', ''));
        }
    })

}
// ---