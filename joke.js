const content = document.querySelector(".joke-content");
function randomJoke() {
    const request = new XMLHttpRequest();
    request.open('GET', `https://official-joke-api.appspot.com/random_joke`);
    request.send();
    console.log(request);

    request.addEventListener('load', function () {
        const data = JSON.parse(this.responseText);
        console.log(data);
        content.innerHTML = '';
        const html = `
        <h1> ${data.punchline}</h1>
        <h2> ${data.setup}</h2>
        `;
        content.insertAdjacentHTML('beforeend', html);
    });
}
randomJoke();

