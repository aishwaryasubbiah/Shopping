const serviceModule = require('../service/customer.service');

const customerAnalysis = async(req, res, next) => {
    const inputQuery = req.query;
    const customerAnalysisReport = await serviceModule.customerAnalysisService(inputQuery);
    console.log("customerAnalysisReport", customerAnalysisReport);
    res.send(customerAnalysisReport);

}

exports.customerAnalysis = customerAnalysis;