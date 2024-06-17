const script = require('../script');

const dataRefresh = async(req, res, next) => {
    await script.dataLoad();
    res.send('Data Refreshed');

}

exports.dataRefresh = dataRefresh;