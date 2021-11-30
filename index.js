const button = document.getElementsByClassName('app__go')
const select = document.getElementsByClassName('btn')
const modal = document.querySelector('.modal__main')
const slider = document.querySelector('.modal')

for(var k = 0; k < select.length; k++) {
    select[k].addEventListener('click', (e) => {
        modal.classList.add('close')
        slider.classList.add('close1')
        player(e.target.innerHTML)
    })
}

class Machine {
    constructor(node, depth, a, b, minMaxLength, ) {
        this.node = node
        this.depth = depth
        this.a = a
        this.b = b
        this.minMaxLength = minMaxLength
    }

    render() {
        const random = Math.floor(Math.random() * this.node)
        if(random !== this.node) {
            if(button[random].innerHTML === '') {
                button[random].innerHTML = 'X'
            }
        }
    }

}

const player = (signal) => {
    for(var i = 0; i < button.length; i++) {
        let visited = i
        button[i].addEventListener('click', (e) => {
            if(e.target.innerHTML === "") {
                console.log(signal)
                e.target.innerHTML 
                new Machine(visited, 1).render()
            }
        })
    }
}

player()
