export default (app) => {
  app.get('/', (req, res) => {
    console.log('heya');
    res.send({ message: 'heya again' });
  });
};

