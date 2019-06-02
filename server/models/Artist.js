const Sequelize = require('sequelize'),
      sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname');
    // fix argument

class Artist extends Sequelize.Model {}
Artist.init({
    name: Sequelize.STRING,
    birthday: Sequelize.DATE
}, { sequelize, modelName: 'artist' });

sequelize.sync()
    .then( () => Artist.create({
        name: 'Flavor Flav',
        birthday: new Date(1959, 3, 16)
    }))
    .then( flav => {
        console.log(flav.toJSON());
    });


