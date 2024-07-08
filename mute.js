document.addEventListener('DOMContentLoaded', function() {
    const audio = document.querySelector('audio');
    const muteButton = document.getElementById('muteButton');

    if (audio.muted) {
        muteButton.textContent = 'Unmute';
    } else {
        muteButton.textContent = 'Mute';
    }

 
    muteButton.addEventListener('click', function() {
        if (audio.muted) {

            audio.muted = false;
            muteButton.textContent = 'Mute';
        } else {

            audio.muted = true;
            muteButton.textContent = 'Muted';
        }
    });
});
