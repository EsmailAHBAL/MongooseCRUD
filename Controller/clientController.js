const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const url = process.env.DB_URl;

let schema = mongoose.Schema({

    id: Number,
    name: String,
    city: String,
    email: String,

});

let Client = mongoose.model('client', schema);

exports.addClient = async (req, res) => {

    const {
        id,
        name,
        city,
        email
    } = req.body;

    mongoose.connect(url, (er) => {

        let nCLient = new Client({

            id: id,
            name: name,
            email: email,
            city: city

        });

        er ? console.log(er) : (

            nCLient.save((er, result) => {

                console.log("Add");
                res.send('Hello')
            })
        )

    });

}


exports.getAllClinet = async (req, res) => {

    mongoose.connect(url, (err) => {


        err ? console.log(err) : (
   
        Client.find((er,result)=>{

            res.status(201).json(result)
        })
        )

    })


}

exports.findClient = async (req, res) => {

    try {
        const {
            byId
        } = req.body;
        mongoose.connect(url, (er) => {

            er ? console.log(er) : (

                Client.findById({
                    _id: byId
                }, (er, result) => {

                    console.log(result);

                    mongoose.disconnect()
                    res.status(201).json(result)

                })


            )
        });

    } catch (error) {
        console.log(error);

    }
}

exports.updateClient = async (req, res) => {
    const {
        _id,
        name,
        email,
        city
    } = req.body;

    try {

        mongoose.connect(url, (err) => {

            err ? console.log(err) : (

                Client.updateOne({
                    _id: _id
                }, {

                    name: name,
                    email: email,
                    city: city

                }, (err, result) => {
                    console.log(result);
                    mongoose.disconnect()
                    res.send('UPDATED')
                })

            );

        })

    } catch (error) {
        console.log(error);
    }

}
exports.deletClient = async (req, res) => {

    try {
        const {
            id
        } = req.body;

        mongoose.connect(url, (err) => {
            err ? console.log(err) : (

                Client.remove({
                    id: id
                }, (err, result) => {

                    res.send("DELETED");
                })
            )

        })

    } catch (error) {

    }

}