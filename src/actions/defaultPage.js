import { getData } from "../API";
import { renderCard, noResult } from "../components/cardResult";

export async function defaultPage() {
    try {
        let title = 'new-york'
        let url = `https://api.teleport.org/api/urban_areas/slug:${title}/scores/`;
        let result = await getData(url);
        title = title.replace('-', ' ');
        renderCard(result.data, title);
    } catch (error) {
        console.log('Error: '+error);
        noResult();
    }
}