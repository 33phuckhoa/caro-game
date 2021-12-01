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

    render(check, random) {
        if(random === this.node)return 
        if(random !== this.node) {
            if(button[random].innerHTML === '') {
                if(check === 'O') {
                    button[random].innerHTML = "X"
                }
                else if(check === 'X') {
                    button[random].innerHTML = "O"
                }

            }  
        }
    }

    
}

const player = (check) => {
    for(var i = 0; i < button.length; i++) {
        let visited = i
        const arr = []
        const random = Math.floor(Math.random() * visited )
        button[i].addEventListener('click', (e) => {
            if(e.target.innerHTML === '') {
                if(check !== undefined) {
                    e.target.innerHTML = check
                }
            } 
            const machine = new Machine(visited)
            machine.render(check, random)

            arr.push(button[i])
            console.log(arr)
            isVictory()
        })
    }
}

player()

const isVictory = () => {
    if(button[0].innerHTML === 'X' && button[5].innerHTML === 'X' && button[6].innerHTML === 'X')
    {
        alert("Victory")
    }
    else if(button[0].innerHTML === 'X' && button[1].innerHTML === 'X' && button[2].innerHTML === 'X') {
        alert("Victory")       
    }
    else if(button[2].innerHTML === 'X' && button[7].innerHTML === 'X' && button[8].innerHTML === 'X') {
        alert("Victory")
    }
    else if(button[6].innerHTML === 'X' && button[4].innerHTML === 'X' && button[8].innerHTML === 'X') {
        alert("Victory")
    }
    else if(button[1].innerHTML === 'X' && button[3].innerHTML === 'X' && button[4].innerHTML === 'X') {
        alert("Victory")
    }
    else if(button[5].innerHTML === 'X' && button[3].innerHTML === 'X' && button[7].innerHTML === 'X') {
        alert("Victory")
    }
    else if(button[0].innerHTML === 'X' && button[7].innerHTML === 'X' && button[8].innerHTML === 'X') {
        alert("Victory")
    }
    else if(button[0].innerHTML === 'X' && button[5].innerHTML === 'X' && button[6].innerHTML === 'X') {
        alert("Victory")
    }
    else if(button[6].innerHTML === 'X' && button[3].innerHTML === 'X' && button[2].innerHTML === 'X') {
        alert("Victory")
    }
    if(button[0].innerHTML === 'O' && button[5].innerHTML === 'O' && button[6].innerHTML === 'O')
    {
        alert("Victory")
    }
    else if(button[0].innerHTML === 'O' && button[1].innerHTML === 'O' && button[2].innerHTML === 'O') {
        alert("Victory")       
    }
    else if(button[2].innerHTML === 'O' && button[7].innerHTML === 'O' && button[8].innerHTML === 'O') {
        alert("Victory")
    }
    else if(button[6].innerHTML === 'O' && button[4].innerHTML === 'O' && button[8].innerHTML === 'O') {
        alert("Victory")
    }
    else if(button[1].innerHTML === 'O' && button[3].innerHTML === 'O' && button[4].innerHTML === 'O') {
        alert("Victory")
    }
    else if(button[5].innerHTML === 'O' && button[3].innerHTML === 'O' && button[7].innerHTML === 'O') {
        alert("Victory")
    }
    else if(button[0].innerHTML === 'O' && button[7].innerHTML === 'O' && button[8].innerHTML === 'O') {
        alert("Victory")
    }
    else if(button[0].innerHTML === 'O' && button[5].innerHTML === 'O' && button[6].innerHTML === 'O') {
        alert("Victory")
    }
    else if(button[6].innerHTML === 'O' && button[3].innerHTML === 'O' && button[2].innerHTML === 'O') {
        alert("Victory")
    }
}