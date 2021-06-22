const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();

const { Image, User } = require('../../db/models')

router.post('/', asyncHandler(async (req, res, next) => {
    const { user_id, image_url, description } = req.body;

    let myPost = await Image.create({
        user_id,
        image_url,
        description,
    })
         res.json({myPost});
    }),
);

module.exports = router
