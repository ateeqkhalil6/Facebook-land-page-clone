let settingsmenu = document.querySelector('.settings-menu')
let darkBnt = document.getElementById('dark-btn');

function settingsMenuToggle(){
    settingsmenu.classList.toggle('settings-menu-height')
}

darkBnt.onclick = function(){
    darkBnt.classList.toggle('dark-btn-on')
    document.body.classList.toggle('dark-theme')

    if(localStorage.getItem('theme')=='light'){
        localStorage.setItem('theme', 'dark');
    }
    else{
        localStorage.setItem('theme', 'light');

    }
}

if(localStorage.getItem('theme')=='light'){
    darkBnt.classList.remove('dark-btn-on');
    document.body.classList.remove('dark-theme')
} 
else if(localStorage.getItem('theme')=='dark'){
    darkBnt.classList.add('dark-btn-on')
    document.body.classList.add('dark-theme')
}
else {
    localStorage.setItem('theme', 'light');
}