const express = require('express');
const asyncHandler = require('express-async-handler');
const { Review } = require('../../db/models');
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");

const router = express.Router();

//get all reviews
router.get('/',
  asyncHandler(async (req, res) => {
    const reviews = await Review.findAll();
    return res.json(reviews);
  })
);

//post review
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
    });
    

    return res.json(createdSpot)
  })
);

module.exports = router;