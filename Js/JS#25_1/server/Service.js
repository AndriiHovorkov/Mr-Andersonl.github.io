const ExprServ = require('./Expr.js');

const CREATE_SUCCESS = {status: 'Success', statusText: 'File created'};
const DELETE_SUCCESS = {status: 'Success', statusText: 'File deleted'};
const UPDATE_SUCCESS = {status: 'Success', statusText: 'File changed'};
const CRUD_FAIL = {status: 'Fail', statusText: ''};

const getFsErrorHandler = (req, res) => errorText => {
    const errorResp = CRUD_FAIL;
    
    errorResp.statusText = errorText;
    res.send(errorResp);
};

const userCreate = (req, res) => {
    const dataJson = JSON.stringify(req.body, null, '\t');

    ExprServ.userCreateFile(dataJson)
        .then(() => res.send(CREATE_SUCCESS))
        .catch(getFsErrorHandler(req, res));
}

const userData = (req, res) => {
    ExprServ.getUserFile()
        /* .then(fileData => res.send(JSON.parse(fileData))) */
        .then(fileData => {
            let userDat = JSON.parse(fileData)
            let userValue  = Object.values(userDat)
            let count = userValue.length
            let valuesTotalLength = [].concat(...userValue).length;

            let Total = [].concat(...userValue);
            function uniq_fast(a) {
                var seen = {};
                var out = [];
                var j = 0;
                for(var i = 0; i < a.length; i++) {
                    var item = a[i];
                    if(seen[item] !== 1) {
                        seen[item] = 1;
                        out[j++] = item;
                    }
                }
                return out;
            }
            let uniqueValues  = uniq_fast(Total) 

            let sum = 0;
            for(let i = 0; i< Total.length; i++) {
                sum +=Total[i];
            }
            let ArithmeticMean = sum/Total.length;

            let statusCheck = {
                count ,
                valuesTotalLength,
                uniqueValues,
                ArithmeticMean,
            }
            res.send(statusCheck)
        })
        .catch(getFsErrorHandler(req, res));
}

const userDataDelete = (req, res) => {
    ExprServ.deleteUserFile()
        .then(() => res.send(DELETE_SUCCESS))
        .catch(getFsErrorHandler(req, res));
}

const userDataUpdate = (req, res) => {
    const updateData = req.body;
    if (updateData.constructor !== Object) {
        getFsErrorHandler(req, res)('Body is not object');
    }
    ExprServ.updateUserFile(updateData)
        .then(() => res.send(UPDATE_SUCCESS))
        .catch(getFsErrorHandler(req, res));
}

module.exports = {
    userCreate,
    userData,
    userDataDelete,
    userDataUpdate
}