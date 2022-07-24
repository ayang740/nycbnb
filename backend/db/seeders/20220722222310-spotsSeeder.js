'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkInsert('Spots', [{
        address: "180 Mulberry Street",
        neighborhood: "Soho",
        borough: "Manhatten",
        price: 175,
        title: "Eclectic Haven in Amazing Soho",
        description: "This wonderful one bedroom apartment is located in the heart of Soho, one of the most artistic and sought after neighborhoods in New York. In spite of it\'s location, it is quiet and peaceful, facing the back of the building. This charming place is unique and quirky, and artist\'s dream, and is close to various subway lines, so not only can you walk to Wall st, Hudson River and Chinatown, you are only a quick ride away from all of New York\'s touristic attractions. Perfect for a solo travelers.",
        guests: 1,
        bedrooms: 1,
        beds: 1,
        baths: 1,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        address: "160 Bowery Street",
        neighborhood: "Nolita",
        borough: "Manhatten",
        price: 301,
        title: "Two Bedroom in a townhouse with a patio in Nolita!",
        description: "This is a two bedroom private space with a large outdoor patio located in Nolita/ Soho area. Each bedroom has a comfortable bed, has large windows, AC units. The kitchen opens to an amazing private patio with chairs, pillows, towels, and a barbecue. There is a good sound system for indoor and outdoor too.",
        guests: 4,
        bedrooms: 2,
        beds: 2,
        baths: 1,
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        address: "200 N 8th Street",
        neighborhood: "Williamsburg",
        borough: "Brooklyn",
        price: 206,
        title: "Gorgeous loft with stunning view : Williamsburg",
        description: "Perfect place to enjoy the calm and trendy Williamsburg neighbourhood. The area is full of amazing restaurants, brunch places, stores ... The apartment is located on the top floor of a 6 level building, offering a stunning view on the Manhattan skyline. All facilities in the building including roof top & laundry. All of that a couple of blocs away from the L & G train as wall as the Mcarren Park. Enjoy the amazing New York without the ambulances and firetrucks :)",
        guests: 2,
        bedrooms: 1,
        beds: 1,
        baths: 1,
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        address: "40 29th Street",
        neighborhood: "Astoria",
        borough: "Queens",
        price: 111,
        title: "Cozy 1 bedroom apartment in trendy LIC",
        description: "Our comfy apartment is located on the first floor of our two family home. The rooms are spacious and well lit with windows facing a zen patio. NEW: The hardwood floors on the 2nd floor apartment have been repaired and restored to dampen the noise in the Airbnb apartment downstairs.",
        guests: 2,
        bedrooms: 1,
        beds: 2,
        baths: 1,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        address: "1958 Fowler Ave",
        neighborhood: "Morris Park",
        borough: "The Bronx",
        price: 41,
        title: "Sunny, Spacious Room by Stella, Smoke/Drug Free",
        description: "This comfortable room is part of a specious two level apartment where the number of guests will never be more than 5. The shared bathroom has a fan and a window for fresh air circulation, and there\'s a half bath on the first floor. The apartment has front and back porches for guests enjoyment. The living room has a computer table with a nice chair, a comfortable couch, and a big screen TV. There's a dining area, and a kitchen with cooking utensils and appliances.",
        guests: 2,
        bedrooms: 1,
        beds: 1,
        baths: 1.5,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        address: "144 Sanford Avenue",
        neighborhood: "Flushing",
        borough: "Queens",
        price: 91,
        title: "Comfort room w/Private bath. In room. Mid-Flushing",
        description: "Morden decorated room features brand new functional facilities like five stars hotel. Walking distance to subway station where #7 train to Manhattan for twenty minutes only. Four blocks away from the Main Street Flushing downtown. A great place for doctors who need short term stay ( like hospital rotation ) because of Flushing hospital nearby and more.",
        guests: 2,
        bedrooms: 1,
        beds: 1,
        baths: 1,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        address: "321 W 136th Street",
        neighborhood: "Harlem",
        borough: "Manhatten",
        price: 102,
        title: "Kingsize bedroom in Harlem brownstone",
        description: "Second floor large bedroom in renovated Harlem owner occupied townhouse. House is steps from 135th Street subway (B and C trains), and 15 minutes to midtown. King size bed and the room has a large closet to hang things in.",
        guests: 1,
        bedrooms: 1,
        beds: 1,
        baths: 1.5,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        address: "239 E 79th Street",
        neighborhood: "Upper East Side",
        borough: "Manhatten",
        price: 77,
        title: "Central Park Lovely Spacious Room",
        description: "A sunny and cozy 2 bedroom apartment in Upper East Side, perfect for solo travelers, families and couples. The apartment is located in a very convenient and safe neighborhood, 15 mins walking to Central Park and the Metropolitan Museum of Art, and 5 minutes to the 77th Street subway. Half hour by Subway to Times Square. You could find restaurants, bars, high end markets, cafes, stores, pharmacies within a block.",
        guests: 2,
        bedrooms: 1,
        beds: 1,
        baths: 1,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkDelete('Spots', null, {});
  }
};
