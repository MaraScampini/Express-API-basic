const config = {
  "development": {
    "username": "root",
    "password": "Bs7tyLIfUkTv39E1kapi",
    "database": "railway",
    "host": "containers-us-west-130.railway.app",
    "dialect": "mysql",
    "port":7286
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

module.exports = config
