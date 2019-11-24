export class PokemonService {
  private static _instance: PokemonService;
  static baseUrl: string = 'https://pokeapi.co/api/v2/pokemon/';

  public static getInstance () {
    if (PokemonService._instance == null) {
      return this._instance || (this._instance = new this())
    }
  }

  async getPokemon () {
    let response = await fetch(PokemonService.baseUrl)
    let pokemon = await response.json()
    return pokemon
  }
}
