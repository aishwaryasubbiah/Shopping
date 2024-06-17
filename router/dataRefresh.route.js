const dataRefreshController = require('../controllers/dataRefresh.controller');

module.exports = async (router) => {
    router.get(
        '/data_refresh',
        dataRefreshController.dataRefresh,
    );
}