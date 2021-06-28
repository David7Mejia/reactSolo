const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();

const { Image, User, Comment } = require('../../db/models');

//CREATE
router.post('/', asyncHandler(async (req, res) => {
    const { user_id, image_id, comment, username } = req.body;
    let cmnt = await Comment.create({user_id, image_id, comment, username})
    return res.json(cmnt)
}))

//READ
router.get('/:id', asyncHandler(async (req, res) => {
    const { id } = req.params
    const comnts = await Comment.findAll({
        where: { image_id: id },
        // include: [User]
    })
    return res.json(comnts)
}))

//UPDATE_POST
router.put('/:id', asyncHandler(async (req, res) => {
    const {id} = req.params
    const { comment } = req.body;
    const data = await Comment.findByPk(id)

    await data.update({ comment });
    res.json(data)
}))
//DELETE

router.delete('/:id', asyncHandler(async (req, res) => {
    const { id } = req.params;
    const data = await Comment.destroy({
        where: { id}
    })
    return res.json(data)
}))
module.exports = router
