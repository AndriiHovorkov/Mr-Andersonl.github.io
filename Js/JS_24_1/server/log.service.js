/* function log() {
} */
const fs = require('fs');
const DELETE_SUCCESS = {status: 'Success', statusText: 'File deleted'};
const CRUD_FAIL = {status: 'Fail', statusText: ''};

const LOG_FILE_PATH = './logs.txt'; // лютый хардкод

function logMiddleware(req, res, next) {
    console.log(req.method, req.originalUrl, new Date());

    // fs.appendFile();
    fs.appendFile(LOG_FILE_PATH, `${req.method} ${req.originalUrl} ${new Date()}\n`, (err) => {
        if (err) {
            console.log(err);
        }
    });

    next();
}
    
function logData(req, res, next) {
    let dat = new Date()

    let interval = setInterval(function() {
        let elapsedTime = Date.now() - dat;

    fs.appendFile(LOG_FILE_PATH, `${dat} ${elapsedTime}\n`, (err) => {
            if (err) {
                console.log(err);
            }
        });
    }, 5000);

    
    /* next(); */
}

const userDataPath = './mocks/dataUsers/users.json'; 

const getFsErrorHandler = (req, res) => errorText => {
    const errorResp = CRUD_FAIL;
    
    errorResp.statusText = errorText;
    res.send(errorResp);
};
const deleteUserFile = () => {
    return new Promise((resolve, reject) => {
        fs.unlink(userDataPath, (err) => {
            if (err) {
                reject(err);
            }
            resolve();
        });
    });
}
const userDataDelete = (req, res) => {
        deleteUserFile()
        .then(() => res.send(DELETE_SUCCESS))
        .catch(getFsErrorHandler(req, res));
}

const getLog =(req, res) => {
    let data =fs.readFileSync(LOG_FILE_PATH, 'utf-8');

    res.send(data)

}
module.exports= {
    logMiddleware,
    logData,
    deleteUserFile,
    userDataDelete,
    getLog
}
