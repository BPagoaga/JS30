/**
 * Get elements
 */

const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

/**
 * Build out functions
 */

function togglePlay() {
    video.paused ? video.play() : video.pause();
}

function updateButton() {
    const icon = this.paused ? '►' : 'pause';
    toggle.textContent = icon;
}

function skip() {
    let dataskip = parseInt(this.dataset.skip);
    video.currentTime += dataskip;
}

/**
 * Hook to listeners
 */

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);

toggle.addEventListener('click', togglePlay);

skipButtons.forEach(skipButton => skipButton.addEventListener('click', skip));