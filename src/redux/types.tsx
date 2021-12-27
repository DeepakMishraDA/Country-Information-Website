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
