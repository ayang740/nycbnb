const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const spotsRouter = require('./spots.js')
const reviewsRouter = require('./reviews.js')
// const bookingsRouter = require('./bookings');


router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/spots', spotsRouter);

router.use('/reviews', reviewsRouter);

// router.use('/bookings', bookingsRouter);






module.exports = router;