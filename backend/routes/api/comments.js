const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();

const { Image, User, Comment } = require('../../db/models');

//CREATE
router.post('/', asyncHandler(async (req, res) => {
    const { user_id, image_id, comment } = req.body;
    let cmnt = await Comment.create({user_id, image_id, comment})
    return res.json(cmnt)
}))

//READ
router.get('/:id', asyncHandler(async (req, res) => {
    const { id } = req.params
    // console.log(`@@@@@@@@@@@@@@@@@@@@@`, id)
    const comnts = await Comment.findAll({where: {image_id: id}})
    return res.json(comnts)
}))

//UPDATE_POST

//DELETE
module.exports = router
