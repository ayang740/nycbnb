const express = require('express');
const asyncHandler = require('express-async-handler');
const { Spot, Image } = require('../../db/models');
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");

//validations
const validateSpot = [
  check('address')
    .exists({ checkFalsy: true })
    .withMessage('Please provide an address.')
    .isLength({ max: 100 })
    .withMessage('Address must not exceed 100 characters.')
    .custom((value) => {
      return Spot.findOne({ where: { address: value } })
        .then((spot) => {
          if (spot) {
            return Promise.reject('The provided address already exists.');
          }
        });
    }),
  check('neighborhood')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a neighborhood.')
    .isLength({ max: 100 })
    .withMessage('City must not exceed 100 characters.'),
  check('borough')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a borough.')
    .isLength({ max: 100 })
    .withMessage('City must not exceed 100 characters.'),
  check('title')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a title.')
    .isLength({ max: 50 })
    .withMessage('Title must not exceed 50 characters.'),
  check('description')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a description.'),
  check('price')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a price.')
    .isNumeric()
    .withMessage('Price must be a number.')
    .custom((value) => {
      if (value < 1) {
        return Promise.reject('Price must be greater than zero.');
      }
      else {
        return true
      }
    }),
  check('guests')
    .exists({ checkFalsy: true })
    .withMessage('Please provide number of guests.')
    .custom((value) => {
      if (value < 1) {
        return Promise.reject('Guests must be greater than zero.');
      }
      else {
        return true
      }
    }),
  check('bedrooms')
    .exists({ checkFalsy: true })
    .withMessage('Please provide number of bedrooms.')
    .custom((value) => {
      if (value < 1) {
        return Promise.reject('Bedrooms must be greater than zero.');
      }
      else {
        return true
      }
  }),
  check('beds')
    .exists({ checkFalsy: true })
    .withMessage('Please provide number of beds.')
    .custom((value) => {
      if (value < 1) {
        return Promise.reject('Beds must be greater than zero.');
      }
      else {
        return true
      }
  }),
  check('baths')
    .exists({ checkFalsy: true })
    .withMessage('Please provide number of baths.')
    .custom((value) => {
      if (value < 1) {
        return Promise.reject('Baths must be greater than zero.');
      }
      else {
        return true
      }
  }),
  check('images')
    .exists({ checkFalsy: true })
    .withMessage('Please provide an image.')
    .isLength({ max: 255 })
    .withMessage('URL must not exceed 100 characters.'),
  handleValidationErrors,
];

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
router.post('/', validateSpot,
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
//edit spot
router.put('/:spotId(\\d+)', validateSpot,
  asyncHandler(async (req, res) => {
    const { address, neighborhood, borough, title, description, price, guests, bedrooms, beds, baths, images } = req.body;
    const spot = await Spot.findByPk(req.params.spotId, {
      include: [Image]
  });

    await spot.update({
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

    });

    const updateImage = await Image.findOne({
      where: {spotId: spot.id}
    })
    await updateImage.update({
      url: images,
      spotId : spot.id
    })

    return res.json(spot);
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