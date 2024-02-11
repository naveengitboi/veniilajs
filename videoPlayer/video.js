const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const toggle = player.querySelector(".toggle");
const progressBar = player.querySelector(".progressFilled");
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll(".playerSlider");


function togglePlay() {
    if (video.paused) {
        video.play();
    }
    else {
        video.pause();
    }
}

function updateBtn() {
    if (video.paused) {
        toggle.textContent = '▶️';
    }
    else {
        toggle.textContent = '⏸️'
    }
}

function skip() {
    video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
    video[this.name] = this.value
}

function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100
    progressBar.style.flexBasis = `${percent}%`

}

function scrub(e) {
    console.log(e)
    const scrubtime = (e.layerX / progress.offsetWidth) * video.duration;
    console.log(scrubtime)
    video.currentTime = scrubtime;
}

function fullScreen(e) {
    e.preventDefault()
    video.requestFullscreen()
}

//listeners

video.addEventListener('click', togglePlay);

video.addEventListener('play', updateBtn);
video.addEventListener('pause', updateBtn)
video.addEventListener('timeupdate', handleProgress)

toggle.addEventListener('click', togglePlay);

skipButtons.forEach((btn) => {
    btn.addEventListener('click', skip)
})


ranges.forEach((range) => {
    range.addEventListener('change', handleRangeUpdate)
})

ranges.forEach((range) => {
    range.addEventListener('mousemove', handleRangeUpdate)
})

let mouseDown = false;
progress.addEventListener('click', (e) => scrub(e))

progress.addEventListener('mousemove', (e) => mouseDown && scrub(e))
progress.addEventListener('mousedown', () => mouseDown = true)
progress.addEventListener('mouseup', () => mouseDown = false)

