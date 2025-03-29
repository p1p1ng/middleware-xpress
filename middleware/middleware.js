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
    let title = req.params.title; // Ambil title dari URL parameter

    // Validasi jika title kosong
    if (!title) {
        return res.status(400).send("Title tidak boleh kosong");
    }

    // Ubah title menjadi huruf besar
    req.upperTitle = title.toUpperCase();

    next();
};

exports.validasi_user = (req, res, next) => {
    // Definisi skema validasi
    const schema = Joi.object({
        username: Joi.string().max(4).required(), // Maksimal 4 karakter
        password: Joi.string().min(7).required() // Minimal 7 karakter
    });

    // Validasi request body
    const { error, value } = schema.validate(req.body);

    if (error) {
        return res.render("login", { message: error.details });
    }

    next(); // Lanjut ke middleware berikutnya jika validasi berhasil

};