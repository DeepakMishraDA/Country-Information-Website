export type Country = {
  name: string;
  flag: string;
  regions: string;
  population: number;
  languages: Language[];
};
export type Language = {
  name: string;
  nativeName: string;
};
