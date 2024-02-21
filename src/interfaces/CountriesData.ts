import { CountryData } from "./CountryData";

export interface CountriesData {
    [countryCode: string]: CountryData;
}