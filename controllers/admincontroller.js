exports.proses_lamaran = (req,res) => {
    console.log('usia ${req.params.usia} boleh melamar kerja');
}

exports.tampilkan_judul = (req,res) => {
    console.log(req.params.title);
}

exports.login = (req,res) => {
    var message = 'Anda belum cukup umur untuk melamar kerja';
    res.render('login', { message: message });
};

exports.proses_login = (req,res) => {
    let data = req.body;
    console.log(data);
}