const joi = require('joi');

const validateInput = async (inputData, schema) => {
    const joiResult = await schema.validate(inputData, { abortEarly: false });
    console.log('joiResult: ', joiResult);
    return joiResult;
}

const customerAnalysisValidate = async(req, res, next) => {
    const query = req.query;
    const schema =  joi.object().keys({
        date_start_range: joi.string().required(), 
        date_end_range: joi.string().required(),
    });
    const joiResult = await validateInput(query, schema);
    const { error } = joiResult;
    if (error) res.send(error);
    return next();
};

exports.customerAnalysisValidate = customerAnalysisValidate;