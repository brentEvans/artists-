const Artists = require('../controllers/artists');

module.exports = app => {

    app.get("/artists", Artists.getAll);
    app.post("/artists", Artists.create);
    app.get("/artist/:_id", Artists.getOne);
    app.put("/pet/:id", Pets.update);
    app.delete("/pet/:_id", Pets.delete);

}








