function countItems() {
    const elements = document.getElementsByClassName('div-element')
    let items = elements.length
    const p = document.getElementById('countP')
    let listElements = [...elements]
    listElements.forEach(elem => {
        let position = elem.getBoundingClientRect()
        console.log(position)
            if (position.width === 0) {
                items--
            }
        })
        p.innerText = `${items} items left`
}
function checkClass(elem) {
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
function clearComplete() {
    const container = document.getElementById('items')
    const elemDiv = document.getElementsByClassName('div-element')
    const list = [...elemDiv]
    list.forEach(elem => {
        if (elem.firstChild.className == 'complete-check') {
            container.removeChild(elem)
            countItems()
        }
    })
}

function filterElements(btn) {
    const elemDiv = document.getElementsByClassName('div-element')
    const list = [...elemDiv]
    if (btn == 'active') {
        list.forEach(elem => {
            if (elem.firstChild.className == 'complete-check') {
                elem.style.display = 'none'
            } else {
                elem.style.display = 'flex'
                
            }
            countItems()
        })

    } else if (btn == 'completed') {
        list.forEach(elem => {
            if (elem.firstChild.className !== 'complete-check') {
                elem.style.display = 'none'
            }else {
                elem.style.display = 'flex'
                
            }
            countItems()
        })
    } else if (btn == 'all') {
        list.forEach(elem => {
            elem.style.display = 'flex'
            countItems()
        })
    }
}