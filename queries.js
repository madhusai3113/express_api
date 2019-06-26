const db = require('./config');
const Sequelize = require('sequelize');
//mysql connection
var sequelize = new Sequelize(db.mysql.database, db.mysql.username, db.mysql.password, 
    {
        host: db.mysql.hostname,
        dialect: 'mysql'
    }); 
    
sequelize
    .authenticate()
    .then(function(err) {
        console.log('Connection has been established successfully.');
    })
    .catch(function (err) {
        console.log('Unable to connect to the database:', err);
    });

///functions
var file = module.exports = {
    select: function (id) {
        let q_string = "SELECT Redis_key FROM my_database.my_table where id="+id+";"; 
        return sequelize.query(q_string)
        .then(function(results, metadata) {
            return results;
          });
    },
    
    selectall: function(){
        let q_string = "SELECT * FROM my_database.my_table;"; 
        return sequelize.query(q_string)
        .then(function(results, metadata) {
            return results;
          });
    },

    insert: function (value) {
        value = "'"+value+"'";
        let q_string = "INSERT INTO my_database.my_table (Redis_key) VALUES ("+value+");"; 
        return sequelize.query(q_string)
        .then(function(results, metadata) {
            return results;
          });
    },
    delete : function (id) {
        let q_string = "delete FROM my_database.my_table where id=+"+id+";"; 
        return sequelize.query(q_string)
        .then(function(results, metadata) {
            return results;
          });
      },
      update : function (id,value) {
        value = "'"+value+"'";
        let q_string = "UPDATE my_database.my_table SET Redis_key="+value+"WHERE Id="+id
        +";"; 
        return sequelize.query(q_string)
        .then(function(results, metadata) {
            return results;
          });
      }

  }