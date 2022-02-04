var trainSpeed = 10;
var trainPosition = 0;
var animation;



var stopButton = document.getElementById("stopButton");
stopButton.addEventListener("click", stopTrain);

function speedUp() {
    if (trainSpeed > 10) {
        trainSpeed -= 10;
    }

    clearInterval(animation);
    animation = setInterval(frame, trainSpeed);

    function frame() {
        trainPosition += 2;
        train.style.left = trainPosition + 'px';
        checkPosition(trainPosition);
    }
}



function checkPosition(currentPosition) {
    if (currentPosition === 260) {
        alert(":O!");
        clearInterval(animation);
        trainPosition = 0;
        //document.getElementById("train").style.left ="0px";

    }

}

function stopTrain() {
    if (trainPosition < 260) {
        clearInterval(animation);
        console.log("Whew! That was close!");
    }
}