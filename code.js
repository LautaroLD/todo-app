function changeTheme() {
    const body = document.getElementById('body')
    if (body.className == 'dark-theme') {
        body.classList.remove('dark-theme')
    } else {
        body.classList.add('dark-theme')
    }
}