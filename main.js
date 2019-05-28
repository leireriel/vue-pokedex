const app = new Vue({
  el: '#app',
  data() {
    return {
      message: 'soy el estado',
      pokemon: {
        "id": 25,
        "name": "pikachu",
        "image": "images/pokemons/pikachu.png",
        "types": [
          "electric"
        ],
        "abilities": [
          "lightning-rod",
          "static"
        ],
        "experience": 112,
        "height": 4,
        "weight": 60
      },
      typeColor: {
        "grass": "#78C850",
        "poison": "#A040A0",
        "fire": "#F08030",
        "flying": "#A890F0",
        "water": "#6890F0",
        "bug": "#A8B820",
        "normal": "#A8A878",
        "electric": "#F8D030"
      },
      pokemons: [],
    };
  },
  created() {
    fetch('https://api.jsonbin.io/b/5ab37f77989617146bd6eb29')
      .then(response => response.json())
      .then(pokemonsData => {
        // debugger;
        this.pokemons = pokemonsData;
      })
  }
});

