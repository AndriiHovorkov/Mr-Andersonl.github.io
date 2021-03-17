const fs = require('fs');

const userDataPath = __dirname + '/data/User.json'; 


const fileCreation = dataJson => {
    return new Promise((resolve, reject) => {
        fs.writeFile(userDataPath, dataJson, (err) => {
            if (err) {
                console.log(err);
                reject(err);
            }
            resolve();
        });
    });
};

module.exports.userCreateFile = dataJson => {
    return new Promise((resolve, reject) => {
        fs.access(userDataPath, fs.constants.F_OK, (err) => {
            if (err) {
                fileCreation(dataJson)
                    .then(() => resolve())
                    .catch(() => reject('File creation failed'));
            } else {
                reject(`File exist`);
            }
        });
    });
};


module.exports.getUserFile = () => {
    return new Promise((resolve, reject) => {
        fs.readFile(userDataPath, (err, data) => {
            if (err) {
                reject(err);
            }
            resolve(data);
        });
    });
}


module.exports.updateUserFile = incomeData => {
    return this.getUserFile()
        .then(userData => {
            return {...JSON.parse(userData), ...incomeData};
        })
        .then(newUserData => {
            return fileCreation(JSON.stringify(newUserData, null, '\t'));
        })
}
