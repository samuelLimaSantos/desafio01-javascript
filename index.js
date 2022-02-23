class Pokemon {
  constructor(nome, ambiente, poder, dono) {
    this.nome = nome;
    this.ambiente = ambiente;
    this.poder = poder;
    this.dono = dono;
  }

  static buildPokemon(nome, ambiente, poder) {

    const dono = 'Ash';

    return new Pokemon(nome, ambiente, poder, dono);
  }
}

class Marvel {
  constructor(nome, poderes, isHeroi, grupo) {
    this.nome = nome;
    this.poderes = poderes;
    this.isHeroi = isHeroi;
    this.grupo = grupo;
  }

  static buildMarvel(nome, poderes, isHeroi) {
    let grupo = "";

    switch (nome) {
      case 'Viúva Negra':
        grupo = 'Avengers';
        break;
      case 'Professor Xavier':
        grupo = 'X-men';
        break;
      default:
        grupo = "Sozinho";
    };

    return new Marvel(nome, poderes, isHeroi, grupo);
  }
}


const charmander = Pokemon.buildPokemon('Charmander', 'Terra', 'Fogo');
const pikachu = Pokemon.buildPokemon('Pikachu', 'Terra', 'Raio');

const viuvaNegra = Marvel.buildMarvel(
  'Viúva Negra',
  ['Luta', 'Inteligência', 'Rapidez'],
  true
);

const professorXavier = Marvel.buildMarvel(
  'Professor Xavier',
  ['Ler mentes', 'Telecinese'],
  true
);

const personages = new Map();

personages.set('charmander', charmander);
personages.set('pikachu', pikachu);
personages.set('viuvaNegra', viuvaNegra);
personages.set('professorXavier', professorXavier);

for (const [, valor] of personages.entries()) {
  const contextMarvel = valor instanceof Marvel;

  console.log(`
    Personagem: ${valor.nome}
    Contexto: ${contextMarvel ? 'Marvel' : 'Pokemon'}
    Poder${contextMarvel ? 'es' : ''}: ${contextMarvel ? valor.poderes : valor.poder}
  `)
}
