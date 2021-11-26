import { getData, checkStatus } from "../API";
import { renderCard, noResult, removeCard } from "../components/cardResult";

export async function getResult() {
    let title = document.querySelector('#search').value.trim().toLowerCase();
    const inputText = title.replace(/ /g, '-');

    if (inputText !== "") {
        try {
            const iconLoading = document.querySelector('.icon-loading');
            iconLoading.classList.add('show');

            let url = `https://api.teleport.org/api/urban_areas/slug:${inputText}/scores/`;
            let result = await getData(url);
    
            checkStatus(result.status);
            if (document.querySelector('#CardResult')) {
                removeCard();
            }

            iconLoading.classList.remove('show');
            renderCard(result.data, title);
        } catch (error) {
            console.log('Error: '+error);
            removeCard();

            const iconLoading = document.querySelector('.icon-loading');
            iconLoading.classList.remove('show');

            noResult();
        }
    } else {
        alert('Insert a valid city name!')
    }
}