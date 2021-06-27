const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();

const { Image, User, Comment } = require('../../db/models')

router.post('/', asyncHandler(async (req, res, next) => {
    const { user_id, image_url, username, description } = req.body;

    let myPost = await Image.create({
        user_id,
        username,
        image_url,
        description,
    })
        return res.json(myPost);
    })
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

router.put('/:id', asyncHandler(async (req, res) => {
    const { description } = req.body;
    const id = parseInt(req.params.id);
    const img = await Image.findByPk( id  )
    const data = await img.update({description})
   return res.json(data)
}))

router.delete('/:id', asyncHandler(async (req, res) => {
    const { id } = req.params
    await Comment.destroy({where: {image_id: id}})
    const del = await Image.destroy({
        where: { id }
    })
    res.json({del})
}))
//dispatch to in helper function
//before useeffect then dispatch
//setstate true

module.exports = router
