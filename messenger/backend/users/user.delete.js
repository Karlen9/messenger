import express from "express";

import {User} from './../models/User'
const Router = express.Router();

const deleteUser = Router.delete('/:id', async (req, res) => {
    const deletedUser = await User.destroy({where: {id: req.params.id}})

    res.send(deletedUser)
})

module.exports = deleteUser;