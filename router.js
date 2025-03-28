const AdminController = require('./controllers/admincontroller');
const middleware = require('./middleware/middleware');

module.exports = (app) => {
    app.get('/title/:title', middleware.carbon, AdminController.tampilkan_judul);
    app.get('/lamaran/:usia', middleware.cekUsia, AdminController.proses_lamaran);
    app.get('login', AdminController.login);
    app.post('/proses_login', middleware.validasi_user, AdminController.proses_login);
}