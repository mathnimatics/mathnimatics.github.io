import anime from 'animejs'

export class Animationss {
    constructor(target, duration, ease) {
        this.target = target
        this.duration = duration
        this.ease = ease
    }

    addition() {
        const newSquare = document.createElement('div')
        newSquare.setAttribute('class', 'square')
        let parent = document.getElementById('first-div')
        parent.appendChild(newSquare)
        this.move()

    }

    del(domTree) {
        let targets = document.querySelectorAll(domTree)
        targets[targets.length - 1].remove();
    }

    move() {
        console.log(document.querySelectorAll('.square').length - 1)
        anime({
            targets: [...document.querySelectorAll('.square')].at(-1),
            translateX: 250,
            easing: 'linear'
          });
    }

}