module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  port: '5532',
  username: 'postgres',
  password: 'master',
  database: 'gobarber',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
