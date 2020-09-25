class BlobMachine {
    constructor(blob) {
        this.blob = blob
        this.runningBlob = setInterval(
            this.newBorderRadius.bind(this),
            parseFloat(getComputedStyle(blob).transitionDuration) * 1000
        )
    }

    start() {
        this.newBorderRadius()
    }

    stop() {
        clearInterval(this.runningBlob)
    }

    newBorderRadius() {
        this.blob.style.borderRadius = `
            ${this.randGenerator()}%
            ${this.randGenerator()}%
            ${this.randGenerator()}%
            ${this.randGenerator()}%
            /
            ${this.randGenerator()}%
            ${this.randGenerator()}%
            ${this.randGenerator()}%
            ${this.randGenerator()}%
        `
    }

    randGenerator() {
        return Math.round(Math.random() * (100 - 60) + 60)
    }
}

const whitePart = new BlobMachine(document.getElementById('blob'))
whitePart.start()

const yellowPart = new BlobMachine(document.getElementById('eggCore'))
yellowPart.start()






addEventListener('mousemove', ({ pageX, pageY }) => {
    const EYES = document.getElementsByClassName('eye')

    Array.from(EYES).forEach(eye => {
        const [CENTER_X, CENTER_Y] = [
            eye.getBoundingClientRect().left + eye.clientWidth / 2,
            eye.getBoundingClientRect().top + eye.clientHeight / 2
        ]

        eye.style.transform = `
            rotate(
                ${Math.atan2(pageX - CENTER_X, - (pageY - CENTER_Y)) * (180 / Math.PI)}deg
            )
        `
    })
})
