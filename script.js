window.onload = function () {

    var seconds = 00;
    var tens = 00;
    var addTens = document.getElementById('tens');
    var addSeconds = document.getElementById('seconds');
    var buttonStart = document.getElementById('btn-start');
    var buttonStop = document.getElementById('btn-stop');
    var buttonReset = document.getElementById('btn-reset');
    var Interval ; 

    buttonStart.onclick = function() {

        clearInterval(Interval);
        Interval = setInterval(startWatch, 10);
    }

    buttonStop.onclick = function() {
        clearInterval(Interval);
    }


    function startWatch () {
        tens++;

        if(tens <= 9){
            addTens.innerHTML = "0" + tens;
        }

        if(tens > 9){
            addTens.innerHTML = tens;
        }

        if(tens > 99){
            console.log('seconds');
            seconds++;
            addSeconds.innerHTML = "0" + seconds;
            tens = 0;
            addTens.innerHTML = "0" + 0;
        }

        if(seconds > 9){
            addSeconds.innerHTML = seconds;
        }
    }

}