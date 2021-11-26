import axios from 'axios';
export async function getData(url) {
    const result = await axios(url);
    return result
}

export function checkStatus(check) {
    if(check === 200) {
        console.log('Success connection!')
    } else {
        console.log('Connection fail!')
    }

}