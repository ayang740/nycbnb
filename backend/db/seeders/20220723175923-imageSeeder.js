'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkInsert('Images', [{
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-51283176/original/95a27a35-9abd-4aca-bfda-d03cef376020.jpeg?im_w=960',
        spotId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-51283176/original/5da4d833-760f-4c3e-9362-b943916721c9.jpeg?im_w=720',
        spotId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-51283176/original/ca1533c3-83f6-47b6-a005-115679c8bcac.jpeg?im_w=720',
        spotId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-51283176/original/d53d6b23-7acb-4dce-9efa-f317bceb33a7.jpeg?im_w=720',
        spotId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-51283176/original/398cf088-7d01-45b1-9100-424014e814e5.jpeg?im_w=720',
        spotId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        url: 'https://a0.muscache.com/im/pictures/8be664c7-2207-4573-b3be-77303781b20b.jpg?im_w=960',
        spotId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        url: 'https://a0.muscache.com/im/pictures/27a6775e-658f-4d0f-b3a6-d2f16c88e703.jpg?im_w=720',
        spotId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        url: 'https://a0.muscache.com/im/pictures/502fcc63-9f75-49d6-a145-dec2c029e57e.jpg?im_w=720',
        spotId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        url: 'https://a0.muscache.com/im/pictures/d093bc74-fff2-4935-8fb7-a5cad0aef30e.jpg?im_w=720',
        spotId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        url: 'https://a0.muscache.com/im/pictures/9d147445-fce4-48a1-9613-069e33a4023b.jpg?im_w=720',
        spotId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        url: 'https://a0.muscache.com/im/pictures/faad3687-3b2a-47da-8bf2-e9059fdcefd8.jpg?im_w=960',
        spotId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        url: 'https://a0.muscache.com/im/pictures/a6da9262-d91e-4f6a-baa5-5439a0d698de.jpg?im_w=720',
        spotId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        url: 'https://a0.muscache.com/im/pictures/9cf4bf69-5798-467f-93d8-11382ade7047.jpg?im_w=720',
        spotId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        url: 'https://a0.muscache.com/im/pictures/86fbcec9-76b7-4258-92f4-702348dc510e.jpg?im_w=720',
        spotId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        url: 'https://a0.muscache.com/im/pictures/9b179996-cb06-4853-8b78-23ab976d94dd.jpg?im_w=720',
        spotId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-6091850/original/4e10e67c-cecc-4373-8223-d1c836d251ab.jpeg?im_w=960',
        spotId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-6091850/original/577f02ab-84ee-4ecf-ab1f-76ae0ae4171a.jpeg?im_w=720',
        spotId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-6091850/original/dbf09485-cb95-4981-8f02-17d0e7f40301.jpeg?im_w=720',
        spotId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-6091850/original/406b2a59-2077-4e44-ade0-79fb534d6cf1.jpeg?im_w=720  ',
        spotId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-6091850/original/1610e98d-2fc5-4878-bf75-7ccb943f35e2.jpeg?im_w=720',
        spotId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        url: 'https://a0.muscache.com/im/pictures/296e039d-fadd-4a83-8bbe-915678bb90d7.jpg?im_w=960',
        spotId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        url: 'https://a0.muscache.com/im/pictures/7fc764ea-1aa5-4a2d-b47c-c3ce4aff7a37.jpg?im_w=720',
        spotId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        url: 'https://a0.muscache.com/im/pictures/b43a1bd4-6762-474c-92a6-de2721b54951.jpg?im_w=720 ',
        spotId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        url: 'https://a0.muscache.com/im/pictures/0ad1037a-3ec7-4a01-8b15-7138c7f20380.jpg?im_w=720',
        spotId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        url: 'https://a0.muscache.com/im/pictures/e6c190ac-5c75-43d3-b1b2-897830b0f71f.jpg?im_w=720',
        spotId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        url: 'https://a0.muscache.com/im/pictures/22ef50cf-bf25-4de5-9e44-2cbfbb430640.jpg?im_w=960',
        spotId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        url: 'https://a0.muscache.com/im/pictures/19475be5-2994-43f2-a03b-9244d282e089.jpg?im_w=720',
        spotId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        url: 'https://a0.muscache.com/im/pictures/a22e5bf2-c6cc-486c-9ba0-cbe5fd54386c.jpg?im_w=720',
        spotId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        url: 'https://a0.muscache.com/im/pictures/7facac5a-5939-4b0d-b19b-38efebb7ff90.jpg?im_w=720',
        spotId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        url: 'https://a0.muscache.com/im/pictures/b156e89b-8571-4de8-8d45-dec34c697df7.jpg?im_w=720',
        spotId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        url: 'https://a0.muscache.com/im/pictures/65b5807a-65a6-4201-9fd0-24e2ab8c2a8f.jpg?im_w=960',
        spotId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        url: 'https://a0.muscache.com/im/pictures/590294fb-2a5d-4ac6-aa62-83aa7d35d490.jpg?im_w=720',
        spotId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        url: 'https://a0.muscache.com/im/pictures/de8767df-7835-4c97-9993-9f1b0965e854.jpg?im_w=720',
        spotId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        url: 'https://a0.muscache.com/im/pictures/e1e874b2-46dc-470e-a215-58b0546f4a2a.jpg?im_w=720',
        spotId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        url: 'https://a0.muscache.com/im/pictures/5cf20bdf-9a65-468a-9e48-9952527c0ce7.jpg?im_w=720',
        spotId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        url: 'https://a0.muscache.com/im/pictures/6fec41aa-fb66-4b3c-afbe-861b30206d1b.jpg?im_w=960',
        spotId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        url: 'https://a0.muscache.com/im/pictures/ef6a58e4-971a-4502-8fba-f1738453f2d2.jpg?im_w=720',
        spotId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        url: 'https://a0.muscache.com/im/pictures/d294b6f6-3673-4cb1-84e9-b8ac95f5a3c4.jpg?im_w=720',
        spotId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        url: 'https://a0.muscache.com/im/pictures/fe015000-17df-4aad-b532-ff937beae266.jpg?im_w=720',
        spotId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        url: 'https://a0.muscache.com/im/pictures/43c9d646-e708-4991-abb7-a0a38220d131.jpg?im_w=720',
        spotId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkDelete('Images', null, {});
  }
};
