let person = {
    name: "Thomas",
    age: 32,
    surname: "Anderson",
    height: 185,
    weight: 45,
    degree: 5,
    address: {
        city: "London",
        street: "221b, Baker street",
        postCode: 533425
    }
}

const getField = (req, res) => {
    const fields = req.query.fields.split(',');

    const result = fields.reduce((resultPerson, fieldName) => {
        resultPerson[fieldName] = person[fieldName];
        return resultPerson;
    }, {})

    res.send(result)
}; 


module.exports = {
    person,
    getField 
}