export interface SimplePokemon{
  id: number;
  name: string;

}

export interface Result{
  name: string;
  url: string;
}

export interface PokeAPIResponse{
  count: number;
  next: string;
  previous: string;
  results: Result[];
}

