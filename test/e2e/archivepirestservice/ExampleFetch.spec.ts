import 'isomorphic-fetch';
import 'dotenv/config'

describe('e2e test', () => {
    it('example', async () => {
        const url: string = process.env.EXAMPLE_URL !== undefined ? process.env.EXAMPLE_URL : '';
        const res = await fetch(url + "/archive/locations?documentFormat=PI_JSON");
        const json = res.json();
    })
})
