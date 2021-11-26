export function renderCard(data, title) {
    let HTMLscore = '';
    let i = 0;
    data.categories.forEach(e => {
        let scoreNumber = data.categories[i].score_out_of_10.toFixed(1);
        let scorePercent = scoreNumber * 10;
        scoreNumber = scoreNumber % 10.1;

        HTMLscore += `
        <div class="section-title-score">
            <label>${data.categories[i].name}</label>
            <div class="score">${scoreNumber}/10</div>
        </div>
        <div class="progress">
            <div class="progress-bar " role="progressbar" style="width: ${scorePercent}%; background-color: ${data.categories[i].color}"></div>
        </div>
        `;
        i++;
    });

    let html = `
        <div class="card-header">
            <h2 class="card-title">${title}</h2>
            <div class="card-total-score">Total score ${data.teleport_city_score.toFixed(2)}/100</div>
        </div>
        <div class="card-description">${data.summary}</div>
        <div class="card-scores">${HTMLscore}</div>
    `;
    
    let card = document.createElement('div');
    card.className = 'card';
    card.id = 'CardResult';
    card.innerHTML = html;
    const result = document.querySelector('#result');
    result.append(card);
}

export function noResult() {
    let html = 'No result';
    let card = document.createElement('h1');
    card.className = 'card';
    card.id = 'CardResult';
    card.innerHTML = html;
    const result = document.querySelector('#result');
    result.append(card);
}

export function removeCard() {
    const result = document.getElementById('result');
    while (result.firstChild) {
        result.removeChild(result.firstChild);
    }
}