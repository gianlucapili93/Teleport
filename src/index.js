import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.scss';
import './actions/darkmode';

import { defaultPage } from "./actions/defaultPage";
import { getResult } from "./actions/getResult";

defaultPage();

const search = document.querySelector('#submit');
const input = document.querySelector('#search')

search.addEventListener('click', getResult);
input.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        getResult();
    }
});