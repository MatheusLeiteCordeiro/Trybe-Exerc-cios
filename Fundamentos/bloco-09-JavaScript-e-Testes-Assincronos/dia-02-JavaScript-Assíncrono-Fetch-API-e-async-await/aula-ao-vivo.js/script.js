const section = document.querySelector("section");
  
  async function fetchPokemon(pokemon) {
           try {
            const URL = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
            const request = await fetch(URL);
            const json = await request.json();

            const divCard = document.createElement("div");
            const img = document.createElement("img");
            const divBody = document.createElement("div");
            const cardTitle = document.createElement("h5");
          
            divCard.classList.add("card");
            divBody.classList.add("card-body");
            cardTitle.classList.add("card-title");
            img.classList.add("card-img-top");
          
            divBody.appendChild(cardTitle);
            divCard.appendChild(img);
            divCard.appendChild(divBody);
            section.appendChild(divCard);

            img.src = json.sprites.front_default;
            cardTitle.innerHTML = json.name
           } catch (error) {
                console.log(error)
           }
        }

        async function requestFetchPokemon() {
            await fetchPokemon('charmander');
            await fetchPokemon('beedrill');
            await fetchPokemon('rattata');
            await fetchPokemon('pidgeotto');
}
  
        window.onload = () => {
            requestFetchPokemon();
        };
   

