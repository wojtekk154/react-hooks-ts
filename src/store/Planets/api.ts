import axios from 'axios';
import { IPaggingList, IPlanet } from "../../utils/interfaces/planets";
import { PLANET_URL } from "./constants";
import { ISchema } from "../../utils/interfaces/scheme";
import { enviromentConfig } from "../../config";

export const fetchPlanetListFromApi = () => (
    axios.get<IPaggingList<IPlanet>>(enviromentConfig.HOST + PLANET_URL.LIST)
        .then(response => response.data)
        .catch(error => Promise.reject(error))
);

export const fetchPlanetByIdFromApi = (id: number | null) => (
    axios.get<IPlanet>(enviromentConfig.HOST + PLANET_URL.BY_ID(id))
        .then(response => response.data)
        .catch(err => Promise.reject(err))
);

export const fetchPlanetSchemaFromApi = () => (
    axios.get<ISchema>(enviromentConfig.HOST + PLANET_URL.SCHEMA)
        .then(response => response.data)
        .catch(err => Promise.reject(err))
);

