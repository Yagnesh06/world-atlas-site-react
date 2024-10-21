import axios from "axios";

const api = axios.create({
  baseURL:
    `https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags`,
});

// HTTP GET method

export const getCountryData = () => {
  return api.get(`/all?fields=name,population,region,capital,flags`);
};

// HTTP GET method Individual country

export const getCountryIndData = (name) =>{
    return axios.get(`https://restcountries.com/v3.1/name/${name}?fullText=true&fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags`)
}