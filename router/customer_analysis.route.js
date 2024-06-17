const customerController = require('../controllers/customer.controller');
const customerValidator = require('../validation/customer.validate');

module.exports = async (router) => {
    router.get(
        '/cutomer_analysis',
        customerValidator.customerAnalysisValidate,
        customerController.customerAnalysis,
    );
}