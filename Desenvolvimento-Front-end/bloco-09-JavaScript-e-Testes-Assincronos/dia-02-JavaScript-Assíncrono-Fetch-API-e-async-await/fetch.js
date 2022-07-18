const joke = document.getElementById('joke')

// const fetchJoke = () => {
//     const URL = 'https://api.chucknorris.io/jokes/random?category=dev';
//     const promisseResponse = fetch(URL);

//     console.log(promisseResponse);

//     promisseResponse
//     .then((promisseObject) => promisseObject.json())
//     .then((data) => {
//         console.log(data)
//         joke.innerHTML = data.value
//         console.log(data.value);
//     })
//     .catch((error) => console.log(`Algo deu errado :( \n${error}`));
// }

const fetchJoke = async () => {

    try {
        const URL = 'https://api.chucknoris.io/jokes/random?category=dev';
        const request = await fetch(URL);
        const json = await request.json();
        console.log(json.value);
        joke.innerText = json.value;
    } catch (error) {
        console.log(`Algo deu errado :( \n${error}`);
    }
   
}

fetchJoke();

module.exports = fetchJoke;