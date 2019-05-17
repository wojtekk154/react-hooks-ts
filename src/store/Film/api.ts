import axios from 'axios';

import { FILM_URL } from "./constants";
import { IFilm } from "../../utils/interfaces/films";
import { IPaggingList } from "../../utils/interfaces/planets";
import { ISchema } from "../../utils/interfaces/scheme";
import { enviromentConfig } from "../../config";

export const fetchFilmListFromApi = () => (
    axios.get<IPaggingList<IFilm[]>>(enviromentConfig.HOST + FILM_URL.LIST)
        .then(response => response.data)
        .catch(error => Promise.reject(error))
);

export const fetchFilmByIdFromApi = (id: number | null) => (
    axios.get<IFilm>(enviromentConfig.HOST + FILM_URL.BY_ID(id))
        .then(response => response.data)
        .catch(error => Promise.reject(error))
);

export const fetchFilmSchemaFromApi = () => (
    axios.get<ISchema>(enviromentConfig.HOST + FILM_URL.SCHEMA)
        .then(response => response.data)
        .catch(error => Promise.reject(error))
);