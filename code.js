function countItems() {
    const elements = document.getElementsByClassName('div-element')
    const p = document.getElementById('countP')
    p.innerText = `${elements.length} items left`
}
function checkClass(elem) {
    // const check = document.getElementsByClassName('check')
    elem.addEventListener('click', () => {
        if (elem.className == 'complete-check') {
            elem.classList.remove('complete-check')
        } else {
            elem.classList.add('complete-check')

        }
        console.log(elem)
    })

}
function crossClick(elem) {
    elem.addEventListener('click', () => {
        const padre1 = elem.parentElement
        const padre2 = padre1.parentElement
        // console.log(padre2.c)
        padre2.removeChild(padre1)
        countItems()
    })

}

function createItem(text) {
    const container = document.getElementById('items')
    const div = document.createElement('DIV')
    div.className = 'div-element'
    const spancheck = document.createElement('SPAN')
    const spancross = document.createElement('SPAN')
    spancross.className = 'cross'
    const p = document.createElement('P')
    p.innerText = text
    div.appendChild(spancross)
    div.insertBefore(p, spancross)
    div.insertBefore(spancheck, p)
    container.appendChild(div)
    checkClass(spancheck)
    crossClick(spancross)
}

function getInput() {
    const input = document.getElementById('create-item--input')
    if (input.value.length != 0) {
        createItem(input.value)
        input.value = ''
        countItems()
    } else {
        alert('El campo no puede estar vacio.')
    }
}
function botones(valor) {
    if (valor.key == 'Enter') {
        getInput()

    }
}
function changeTheme() {
    const body = document.getElementById('body')
    if (body.className == 'dark-theme') {
        body.classList.remove('dark-theme')
    } else {
        body.classList.add('dark-theme')
    }
}


