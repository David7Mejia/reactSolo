const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();

const { Image, User } = require('../../db/models')

router.post('/', asyncHandler(async (req, res, next) => {
    const { user_id, image_url, username, description } = req.body;

    let myPost = await Image.create({
        user_id,
        username,
        image_url,
        description,
    })
         res.json({myPost});
    }),
);

router.get('/:id', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    const photo = await Image.findByPk(id)

    return res.json(photo)
}))


router.get('/', asyncHandler(async (req, res, next) => {
    const photos = await Image.findAll();
    return res.json(photos)
}),
);

router.put('/', asyncHandler(async (req, res) => {
    const { image_url, user_id, description, id, username } = req.body;

    const photo = await Image.findByPk(id);
    let updImg = await photo.update({ image_url, user_id, username, description, id });
    res.json(updImg)
}))

router.delete('/:id', asyncHandler(async (req, res) => {
    const { id } = req.body

    const del = await Image.destroy({
        where: { id }
    })
    res.json(del)
}))
//dispatch to in helper function
//before useeffect then dispatch
//setstate true

module.exports = router
