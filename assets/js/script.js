 // timer

function startTimer(duration, displayMin, displaySec) {

    let timer = duration, minutes, seconds

    setInterval(() => {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10)

        minutes = minutes < 10 ? "0" + minutes : minutes
        seconds = seconds < 10 ? "0" + seconds : seconds

        displayMin.textContent = minutes
        displaySec.textContent = seconds

        if(--timer < 0) {
            timer = duration
        }

    }, 1000);
}

window.onload = () => {
    
    let duration = 60 * 15
    let displayMin = document.getElementById('displayMin')
    let displaySec = document.getElementById('displaySec')

    startTimer(duration, displayMin, displaySec)
}

// vsl script

const video = document.getElementById('video')
const controlVideo = document.getElementById('controlVideo')
const progressBar = document.getElementById('progressBar')
const progressBarControl = document.querySelector('.progress')

video.muted = true

controlVideo.onclick = () => {
    progressBarControl.classList.remove('invisible')
    video.currentTime = 0
    video.muted = false
    controlVideo.classList.add('d-none')
    
    video.onended = () => {
        progressBar.style.width = "100%"
    }
    
    let counter = 0
    const barSizing = setInterval(() => {
        progressBar.style.width = counter + "%"

        if(progressBar.style.width === '50%') {
            clearInterval(barSizing)
            let getCounterValue = counter
            getTimeOfVideo (getCounterValue)
        }

        counter++
    }, 500);
}

function getTimeOfVideo (counter) {

    let newTimer = counter

    video.addEventListener('timeupdate', () => {
        const realTimeVideo = video.currentTime % video.duration / video.duration * 100

        if(Math.trunc(realTimeVideo) >= newTimer) {
            progressBar.style.width = syncTime(realTimeVideo)
        } else {
            newTimer+= 0.05
            progressBar.style.width = newTimer + "%"
        }
        
    })
}

function syncTime (time) {
    return time + "%"
}
