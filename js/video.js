const video = document.querySelector('video')

video.volume = .2

const play = document.querySelector('.video__play')
const pause = document.querySelector('.video__pause')
const sound = document.querySelector('.video__sound-btn')

video.addEventListener('click', () => {
    video.classList.toggle('pause')
    sound.classList.toggle('paused')

    if (video.classList.contains('pause')) {
        video.pause()
        pause.classList.remove('hidden')
    } else {
        video.play()
        pause.classList.add('hidden')
    }
})

sound.addEventListener('click', () => {
    sound.classList.toggle('paused')

    if (sound.classList.contains('paused')) {
        video.volume = 0
    } else {
        video.volume = .1
    }
})