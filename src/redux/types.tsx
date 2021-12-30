export type Country = {
  name: Common;
  flag: string;
  continents: Continents[];
  population: number;
  capital: string;
};
// export type Language = {
//   name: string;
//   nativeName: string;
// };
type Common = {
  common: string;
};
type Continents = {
  continents: string;
};
export type Countr = {
  data: Name[];
};
type Name = {
  name: Common;
  flag: string;
  continents: Continents[];
  population: number;
  capital: string;
};
