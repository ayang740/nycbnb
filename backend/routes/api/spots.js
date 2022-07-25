const express = require('express');
const asyncHandler = require('express-async-handler');
const { Spot, Image } = require('../../db/models');

const router = express.Router();

//get all spots
router.get('/',
  asyncHandler(async (req, res) => {
    const spots = await Spot.findAll({
      include: [{model: Image}]
    });
    return res.json(spots);
  })
);

//get one spot
router.get('/:spotId(\\d+)',
  asyncHandler(async (req, res) => {
    const spot = await Spot.findByPk(req.params.spotId, {
        include: [{model: Image}]
    });
    return res.json(spot);
  })
);

//post spot
router.post('/',
  asyncHandler(async (req, res) => {
    const { address, neighborhood, borough, title, description, price, guests, bedrooms, beds, baths, userId, images } = req.body;

    const spot = await Spot.create({
        address,
        neighborhood,
        borough,
        title,
        description,
        price,
        guests,
        bedrooms,
        beds,
        baths,
        userId
    });

    const image = {
      url: images,
      spotId : spot.id
      
    } 

    await Image.create(image)

    const createdSpot = await Spot.findByPk(spot.id, {
      include: [{model: Image}]
    })
    

    return res.json(createdSpot)
  })
);
//edit spot
router.put('/:spotId(\\d+)',
  asyncHandler(async (req, res) => {
    const { address, neighborhood, borough, title, description, price, guests, bedrooms, beds, baths } = req.body;
    const spot = await Spot.findByPk(req.params.spotId);

    spot.address = address;
    spot.neighborhood = neighborhood;
    spot.borough = borough;
    spot.title = title;
    spot.desription = description;
    spot.price = price;
    spot.guests = guests;
    spot.bedrooms = bedrooms;
    spot.beds = beds;
    spot.baths = baths;

    const result = await spot.save()

    const response = {
        ...result.dataValues
    }

    return res.json(response);
  })
);

//delete spot
router.delete('/:spotId',
  asyncHandler(async (req, res) => {
    const deleteSpot = await Spot.findByPk(req.params.spotId);
    await deleteSpot.destroy();
  })
);

module.exports = router;