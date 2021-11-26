import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.scss';
import './actions/darkmode';
import { getData, checkStatus } from "./API";
import { renderCard, noResult, removeCard } from "./components/cardResult";

defaultPage();

const search = document.querySelector('#submit');
search.addEventListener('click', getResult);
const input = document.querySelector('#search')
input.addEventListener('keyup', (e) => {
    
    let inputText = document.querySelector('#search').value.trim();
    console.log(inputText);
    

    if (e.keyCode === 13) {
        getResult();
    }
});

async function citySuggestion(input) {
    let url = `https://api.teleport.org/api/cities/?search=`+input;
    let result = await getData(url);
    console.log(result);
}

async function defaultPage() {
    try {
        let title = 'new-york'
        let url = `https://api.teleport.org/api/urban_areas/slug:${title}/scores/`;
        let result = await getData(url);
        title = title.replace('-', ' ');
        renderCard(result.data, title);
    } catch (error) {
        console.log('error: '+error);
        noResult();
    }
}

async function getResult() {
    let title = document.querySelector('#search').value.trim();
    const inputText = title.replace(/ /g, '-');
    if (inputText !== "") {
        try {
            const iconLoading = document.querySelector('.icon-loading');
            iconLoading.classList.add('show');
            console.log(inputText)

            let url = `https://api.teleport.org/api/urban_areas/slug:${inputText}/scores/`;
            let result = await getData(url);
    
            checkStatus(result.status);
            if (document.querySelector('#CardResult')) {
                removeCard();
            }
            iconLoading.classList.remove('show');
            console.log(result.data)
            renderCard(result.data, title);
        } catch (error) {
            console.log('error');
            removeCard();
            const iconLoading = document.querySelector('.icon-loading');
            iconLoading.classList.remove('show');
            noResult();
        }
    } else {
        alert('Insert a valid city name!')
    }
}

function delay(fn, ms) {
    let timer = 0
    return function(...args) {
        clearTimeout(timer)
        timer = setTimeout(fn.bind(this, ...args), ms || 0)
    }
}