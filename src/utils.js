import {IMDB_ENPOINT} from "./constants";

export const years = [...Array(300)].map((_, i) => 1900 + i);

export const callImdbApi = ({title, year}) => {
    const data = {
        t: title,
        y: year
    };
    const searchParams = new URLSearchParams(data);

    return fetch(`${IMDB_ENPOINT}&${searchParams}`).then(result => result.json());
}
