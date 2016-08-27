var ctrl = require('../app_server/controllers/main');

module.exports = app => {
    app.get('/', ctrl.index);
};