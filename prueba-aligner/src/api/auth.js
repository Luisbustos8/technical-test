

import client  from './client';

export const getAuth = () => {
    const url = '/people/';
    console.log(client.get(url))
    return client.get(url)
};
