const Joi = require('joi');

exports.cekUsia = (req, res, next) => {
    let usia = req.params.usia;
    if(usia < 18) {
        console.log('Anda belum cukup umur');
    }else{
        next();
    }
}

exports.carbon = (req, res, next) => {
    let title = req.body.title;
    req.params.title = title.upperCase();
    next();
}

exports.validasi_user = (req, res, next) => {
    let schema = Joi.object().keys({
        username: Joi.string().required().max(4),
        password: Joi.string().min(7)
    })
    Joi.validate(req.body, schema)
        .then(() => {
            next();
        })
        .catch(err => {
            res.render('login', { error: err.details[0].message });
        })
}