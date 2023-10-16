document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            playAudiosWithInterval();
        }
    });

    function playAudiosWithInterval() {
        var audios = document.querySelectorAll('audio');
        var interval = 5000; // 5 seconds

        audios.forEach(function(audio, index) {
            setTimeout(function() {
                audio.play();
            }, index * interval);
        });
    }

    var recognition = new webkitSpeechRecognition() || new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;

    var audios = document.querySelectorAll('audio');
    var currentAudio = null;
    var currentIndex = -1;

    recognition.onresult = function(event) {
        var command = event.results[event.results.length - 1][0].transcript.toLowerCase();
        console.log('Command:', command);

        if (command.includes('play') && currentAudio) {
            currentAudio.play();
        } else if (command.includes('stop') && currentAudio) {
            currentAudio.pause();
        } else if (command.includes('next')) {
            if (currentAudio) {
                currentAudio.pause();
            }
            currentIndex = (currentIndex + 1) % audios.length;
            currentAudio = audios[currentIndex];
            currentAudio.play();
        }
    };

    recognition.onend = function() {
        recognition.start();
    };

    recognition.start();

    audios.forEach(function(audio, index) {
        audio.addEventListener('play', function() {
            currentAudio = this;
            currentIndex = index;
        });

        audio.addEventListener('pause', function() {
            currentAudio = null;
        });
    });
});
