var obj = null;

function init() {
    moveBananatop()
    moveBanana();
    // Author: Jason van den Berg
    obj = document.getElementById("DK");
    obj.style.left = '0px';
    obj.style.top = '0px';
}

function getKeyAndMove(e) {
    var key_code = e.which || e.keyCode;
    switch (key_code) {
        case 65: //left arrow key
            moveLeft();
            break;
        case 68: //right arrow key
            moveRight();
            break;
        case 32: //space key
            jump();
            break;
    }
}

function moveLeft() {
    obj.style.left = parseInt(obj.style.left) - 10 + 'px';
    obj.style.webkitTransform = "rotateY(360deg)";

}

function jump() {
    obj = document.getElementById("DK");
    document.addEventListener("keydown", (evt) => {
        if (event.keyCode == 32)
            obj.style.top = -150 + "px";
        setTimeout(function() {
            obj.style.top = 0 + "px";
        }, 300);
        document.addEventListener("keyup", (evt) => { if (obj.style.top == -150) { obj.style.top = 0 + "px", clearInterval(interval) } });

    });

}

function moveRight() {
    obj.style.left = parseInt(obj.style.left) + 10 + 'px';
    obj.style.webkitTransform = "rotateY(180deg)";

}

function moveBanana() {
    var x = Math.floor((Math.random() * 650) + 1);
    document.getElementById("banaan").style.marginLeft = x + "px";
}

function moveBananatop() {
    var x = Math.floor((Math.random() * 200) + 450);
    document.getElementById("banaan").style.bottom = x + "px";
}
window.onload = init();


var score = 0

function checkCollision(elm1, elm2) {
    var elm1Rect = elm1.getBoundingClientRect();
    var elm2Rect = elm2.getBoundingClientRect();

    return (elm1Rect.right >= elm2Rect.left &&
            elm1Rect.left <= elm2Rect.right) &&
        (elm1Rect.bottom >= elm2Rect.top &&
            elm1Rect.top <= elm2Rect.bottom);
}

function moveDK(evt) {
    var key;

    var dk = document.getElementById('DK');
    var banana = document.getElementById('banaan');
    var scoreDiv = document.getElementById('score');

    var x = parseInt(dk.style.left);
    switch (evt.keyCode) {
        case 65: //A KEY
            dk.style.left = `${x+-5}px`;
            break;
        case 68: //D KEY
            dk.style.left = `${x+5}px`;
            break;

    }


    setTimeout(function() {

        if (checkCollision(banana, dk)) {
            scoreDiv.innerHTML = ++score;
            moveBanana()
            moveBananatop()
            if (score == 10) {
                alert("GameOver")
                window.location.reload()
            }
        }
    }, 1);


}

window.addEventListener('keydown', moveDK);