document.addEventListener('DOMContentLoaded', function () {
    const startElement = document.getElementById('start');
    const endElement = document.getElementById('end');
    const boundaries = document.querySelectorAll('.boundary');
    let test = 0;

    const audio = new Audio("myAudio.mp3");
    const mouseAudio = new Audio("mouseAudio.mp3");
    const womam = document.getElementById('womam');

    startElement.addEventListener('mousedown', mousedown);

    function mousedown() {
        startElement.addEventListener('mousemove', mousemove);
        startElement.addEventListener('mouseup', mouseup);
        function mousemove(e) {
            var x = e.clientX - 10 + 'px';
            var y = e.clientY - 10 + 'px';
            this.style.left = x;
            this.style.top = y;
        }
        function mouseup() {
            startElement.removeEventListener('mouseup', mouseup);
        }
    }

    startElement.addEventListener('click', function () {
        boundaries.forEach(function (boundary) {
            boundary.classList.remove('youlose');
        });
        womam.classList.remove('active');
    });

    endElement.addEventListener('mouseover', function () {
        MouseAudio();
        if (test == 0) {
            
            window.alert('You win!');
        } else {
            window.alert('You lose ' + test + ' touch');
        }
    });

    function playAudio() {
        audio.play().then(() => {
            console.log("Audio played successfully.");
        }).catch(error => {
            console.log("Failed to play audio:", error);
        });
    }

    function MouseAudio() {
        mouseAudio.play().then(() => {
            console.log("Audio played successfully.");
        }).catch(error => {
            console.log("Failed to play audio:", error);
        });
    }

    boundaries.forEach(function (boundary) {
        boundary.addEventListener('mouseover', function () {
            test = test + 1;
            console.log(test);
            boundaries.forEach(function (item) {
                item.classList.add('youlose');
                playAudio();
                womam.classList.add('active');
            });
        });

        boundary.addEventListener('mouseout', function () {
            boundaries.forEach(function (item) {
                item.classList.remove('youlose');
                womam.classList.remove('active');
            });
        });
    });
});
