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

router.get('/', asyncHandler(async (req, res, next) => {
    const photos = await Image.findAll();
    return res.json(photos)
}),
);

router.put('/', asyncHandler(async (req, res) => {
    const { image_url, user_id, description, id } = req.body;

    const photo = await Image.findByPk(id);
    let updImg = await photo.update({ image_url, user_id, description });
    res.json(updImg)
}))

router.delete('/:id', asyncHandler(async (req, res) => {
    const { id } = req.body

    const del = await Image.destroy({
        where: { id }
    })
    res.json(del)
}))


module.exports = router
