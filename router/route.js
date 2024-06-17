const calculationRoute = require('./customer_analysis.route');
const dataRefreshRoute = require('./dataRefresh.route');

module.exports = (router) => {
    calculationRoute(router);
    dataRefreshRoute(router);
}