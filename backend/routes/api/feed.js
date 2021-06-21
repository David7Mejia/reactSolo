const express = require('express')
const asyncHandler = require('express-async-handler')
const {Images, User } = require('../../db/models')

const router = express.Router()

router.get('/', asyncHandler(async (req, res) => {
    const photos = await Images.findAll({
    include:  User
    })
    return res.json(photos)
}))

router.post('/post', asyncHandler(async (req, res) => {
    const { image_url, userId, description, id } = req.body

    await Images.create({
        image_url,
        userId,
        description,
        id
    })
    return res.redirect('/feed')
}))
