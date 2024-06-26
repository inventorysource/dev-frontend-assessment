import apiCreator from './util/ApiCreator';

const api = apiCreator(
    'https://finnhub.io/api/v1',
    {
        params : {
            token : 'cpu373pr01qj8qq10b3gcpu373pr01qj8qq10b40',
        },
    }
);

export default {
    getTickers () {
        return api.get(`stock/symbol`, {
            params : {
                exchange : 'US',
                securityType : 'Common Stock',
                currency : 'USD',
                mic : 'XNAS',
            }
        });
    },
}
