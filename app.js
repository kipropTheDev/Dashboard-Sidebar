const body = document.querySelector('body'),
    sidebar = body.querySelector('.sidebar'),
    toggle = body.querySelector('.toggle'),
    searchBtn = body.querySelector('.search-box'),
    modeSwitch = body.querySelector('.toggle-switch'),
    modeText = body.querySelector('.mode-text'),
    moonIcon = body.querySelector('.moon'),
    sunIcon = body.querySelector('.sun')
    mainSection = body.querySelector('.main-section')


toggle.addEventListener('click', () => {
    sidebar.classList.toggle('close')
    mainSection.classList.toggle('close')
})
modeSwitch.addEventListener('click', () => {
    body.classList.toggle('dark')

    if(body.classList.contains('dark')){
        modeText.innerHTML = 'Light Mode'
        moonIcon.style.opacity = 0
        sunIcon.style.opacity = 1
        
    }else{
        modeText.innerHTML = 'Dark Mode'
        moonIcon.style.opacity = 1
        sunIcon.style.opacity = 0
    }

})


