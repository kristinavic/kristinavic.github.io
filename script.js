let toggle = document.querySelector('#dark-mode-toggle')
toggle.addEventListener('click', () => {
    if (toggle.checked) {
        document.body.style.setProperty('background', '#16263B')
        document.body.style.setProperty('color', 'white')
    } 
    else {
        document.body.style.setProperty('background', '#ECF5F8')
        document.body.style.setProperty('color', '#16263B')
    }

})