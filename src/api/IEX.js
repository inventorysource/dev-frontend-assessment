import apiCreator from './util/ApiCreator';

const api = apiCreator('https://api.iextrading.com/1.0');

export default {
    getComputerHardwareCompanies () {
        return api.get('/stock/market/collection/tag?collectionName=Computer%20Hardware');
    },
}
