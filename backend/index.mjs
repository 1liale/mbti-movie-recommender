const faker = require("faker");

exports.handler = async (event) => {
  // TODO implement
  const movie = {
    title: faker.lorem.words(),
    plot: faker.lorem.paragraph(),
    director: `${faker.name.firstName()} ${faker.name.lastName()}`,
    image: faker.image.abstract(),
  };
  const response = {
    statusCode: 200,
    body: JSON.stringify(movie),
  };
  return response;
};