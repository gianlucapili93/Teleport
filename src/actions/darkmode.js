let memory = localStorage.getItem('darkmode');
const modeView = document.querySelector('#mode-view');

if(memory === 'enable') {
    document.body.classList.add('dark-mode');
    modeView.checked = true;
} else {
    document.body.classList.remove('dark-mode');
    modeView.checked = false;
}

modeView.addEventListener('click', changeView)

function changeView () {
    if(modeView.checked) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('darkmode','enable');
    } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('darkmode','disable');
    }
}