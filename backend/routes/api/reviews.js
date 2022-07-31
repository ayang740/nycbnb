const express = require('express');
const asyncHandler = require('express-async-handler');
const { Review } = require('../../db/models');
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");

//validations
const validateReview = [
    check('review')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a review.')
        .isLength({ max: 500 })
        .withMessage('Review must not exceed 500 characters.'),
    check('rating')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a rating.')
        .custom((value) => {
        if (value < 1 || value > 5) {
            return Promise.reject('Rating must be between one and five.');
        }
        else {
            return true
        }
        }),
    handleValidationErrors,
  ]

const router = express.Router();

//get all reviews 
router.get('/',
  asyncHandler(async (req, res) => {
    const reviews = await Review.findAll();
    return res.json(reviews);
  })
);

//post review
router.post('/', validateReview,
  asyncHandler(async (req, res) => {
    const { review, rating, spotId, userId } = req.body;

    const createdReview = await Review.create({
        review,
        rating,
        spotId,
        userId
    });


    return res.json(createdReview)
  })
);

//edit review
router.put('/:reviewId(\\d+)', validateReview,
  asyncHandler(async (req, res) => {
    const { review, rating } = req.body;
    const updatedReview = await Review.findByPk(req.params.reviewId);

    await updatedReview.update({
        review,
        rating
    });

    return res.json(updatedReview);
  })
);

//delete review
router.delete('/:reviewId',
  asyncHandler(async (req, res) => {
    const deleteReview = await Review.findByPk(req.params.reviewId);
    await deleteReview.destroy();
  })
);

module.exports = router;