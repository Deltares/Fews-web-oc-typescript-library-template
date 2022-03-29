import fetchMock, {enableFetchMocks} from 'jest-fetch-mock'

enableFetchMocks()

describe('example fetch mock', () => {
    beforeEach(() => {
        fetchMock.resetMocks();
    });

    it('example', async () => {
        fetchMock.mockResponse("error", {status: 404})
        const res = await fetch('http://localhost:8080');
        expect(res.status).toBe(404);
    })
})
