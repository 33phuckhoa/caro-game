

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
    constructor(node, depth, minMaxLength, ) {
        this.node = node
        this.depth = depth
        this.minMaxLength = minMaxLength
        this.random = 0
    }

    render(check) {
        if(this.random === this.node)return 
        if(this.random !== this.node) {
            if(button[this.random].innerHTML === '') {
                if(check === 'O') {
                    button[this.random].innerHTML = "X"
                }
                else if(check === 'X') {
                    button[this.random].innerHTML = "O"
                }

            } 
        }
    }

    analysis() {
        for(var i = 0; i < button.length; i++) {
            if(i !== this.node) {
                switch(this.depth)
                {
                    case 2: {
                        
                        break
                    }
                    case 4: {
                        break
                    }
                    case 6: {
                        break
                    }
                    case 8: {
                        break   
                    }
                    case 9:{
                        break
                    }
                    default: {
                        console.warn("Error Syntax")
                    }

                }
            }
        }
    }
    
}


const player = (check) => {
    let strike = 0
    for(var i = 0; i < button.length; i++) {
        let visited = i
        button[i].addEventListener('click', async(e) => {
            strike = parseInt(strike) + parseInt(1)
            if(e.target.innerHTML === '') {
                if(check !== undefined) {
                    e.target.innerHTML = check
                }
            } 
            const machine = new Machine(visited, strike)
            machine.render(check)
            machine.analysis()
            await isVictory()
        })

    }
}

player()

const reset = () => {
    button[0].innerHTML = ''
    button[1].innerHTML = ''
    button[2].innerHTML = ''
    button[3].innerHTML = ''
    button[4].innerHTML = ''
    button[5].innerHTML = ''
    button[6].innerHTML = ''
    button[7].innerHTML = ''
    button[8].innerHTML = ''
}

const isVictory = () => {
    //Tick X
    if((button[4].innerHTML === 'X' && button[5].innerHTML === 'X' && button[6].innerHTML === 'X')
    || (button[4].innerHTML === 'O' && button[5].innerHTML === 'O' && button[6].innerHTML === 'O'))
    {
        button[4].style.backgroundColor = '#ccc'
        button[6].style.backgroundColor = '#ccc'
        button[5].style.backgroundColor = '#ccc'
        setTimeout(() => {
            reset()
            button[4].style.backgroundColor = '#3779cb'
            button[6].style.backgroundColor = '#3779cb'
            button[5].style.backgroundColor = '#3779cb'           
        }, 1000)
    }
    else if((button[0].innerHTML === 'X' && button[1].innerHTML === 'X' && button[7].innerHTML === 'X')
    || (button[0].innerHTML === 'O' && button[1].innerHTML === 'O' && button[7].innerHTML === 'O')) {
        button[0].style.backgroundColor = '#ccc'
        button[1].style.backgroundColor = '#ccc'
        button[7].style.backgroundColor = '#ccc'
        setTimeout(() => {
            reset()
            button[0].style.backgroundColor = '#3779cb'
            button[1].style.backgroundColor = '#3779cb'
            button[7].style.backgroundColor = '#3779cb'           
        }, 1000)       
    }
    else if((button[2].innerHTML === 'X' && button[3].innerHTML === 'X' && button[8].innerHTML === 'X')
    || (button[2].innerHTML === 'O' && button[3].innerHTML === 'O' && button[8].innerHTML === 'O')) 
    {
        button[2].style.backgroundColor = '#ccc'
        button[8].style.backgroundColor = '#ccc'
        button[3].style.backgroundColor = '#ccc'
        setTimeout(() => {
            reset()
            button[2].style.backgroundColor = '#3779cb'
            button[8].style.backgroundColor = '#3779cb'
            button[3].style.backgroundColor = '#3779cb'           
        }, 1000)
        
    }
    else if((button[6].innerHTML === 'X' && button[7].innerHTML === 'X' && button[8].innerHTML === 'X')
    || (button[6].innerHTML === 'O' && button[7].innerHTML === 'O' && button[8].innerHTML === 'O')) {
        button[6].style.backgroundColor = '#ccc'
        button[8].style.backgroundColor = '#ccc'
        button[7].style.backgroundColor = '#ccc'
        setTimeout(() => {
            reset()
            button[7].style.backgroundColor = '#3779cb'
            button[6].style.backgroundColor = '#3779cb'
            button[8].style.backgroundColor = '#3779cb'           
        }, 1000)
    }
    else if((button[0].innerHTML === 'X' && button[2].innerHTML === 'X' && button[4].innerHTML === 'X')
    || (button[0].innerHTML === 'O' && button[2].innerHTML === 'O' && button[4].innerHTML === 'O')) {
        button[2].style.backgroundColor = '#ccc'
        button[4].style.backgroundColor = '#ccc'
        button[0].style.backgroundColor = '#ccc'        
        setTimeout(() => {
            reset()
            button[4].style.backgroundColor = '#3779cb'
            button[2].style.backgroundColor = '#3779cb'
            button[0].style.backgroundColor = '#3779cb'           
        }, 1000)
    }
    else if((button[5].innerHTML === 'X' && button[3].innerHTML === 'X' && button[1].innerHTML === 'X')
    || (button[5].innerHTML === 'O' && button[3].innerHTML === 'O' && button[1].innerHTML === 'O')) {
        button[3].style.backgroundColor = '#ccc'
        button[5].style.backgroundColor = '#ccc'
        button[1].style.backgroundColor = '#ccc'
        setTimeout(() => {
            reset()
            button[3].style.backgroundColor = '#3779cb'
            button[1].style.backgroundColor = '#3779cb'
            button[5].style.backgroundColor = '#3779cb'           
        }, 1000)
    }
    else if((button[0].innerHTML === 'X' && button[5].innerHTML === 'X' && button[8].innerHTML === 'X')
    || (button[0].innerHTML === 'O' && button[5].innerHTML === 'O' && button[8].innerHTML === 'O')) {
        button[0].style.backgroundColor = '#ccc'
        button[8].style.backgroundColor = '#ccc'
        button[5].style.backgroundColor = '#ccc'
        setTimeout(() => {
            reset()
            button[0].style.backgroundColor = '#3779cb'
            button[8].style.backgroundColor = '#3779cb'
            button[5].style.backgroundColor = '#3779cb'           
        }, 1000)
    }
    else if((button[7].innerHTML === 'X' && button[5].innerHTML === 'X' && button[2].innerHTML === 'X')
    || (button[7].innerHTML === 'O' && button[5].innerHTML === 'O' && button[2].innerHTML === 'O')) {
        button[5].style.backgroundColor = '#ccc'
        button[2].style.backgroundColor = '#ccc'
        button[7].style.backgroundColor = '#ccc'
        setTimeout(() => {
            reset()
            button[5].style.backgroundColor = '#3779cb'
            button[2].style.backgroundColor = '#3779cb'
            button[7].style.backgroundColor = '#3779cb'           
        }, 1000)
    }
}