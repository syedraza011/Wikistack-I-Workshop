const express = require("express");
const router = express.Router();
const { Page, User } = require("../models");
const { userList, userPages } = require("../views");

// GET /users
router.get("/", async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.send(userList(users));
  } catch (error) {
    next(error);
  }
});

// GET /users/:userId
router.get("/:userId", async (req, res, next) => {
  try {
    const pages = await Page.findAll({include: req.params.userId, authorId: req.params.userId});
    pages.belogsTo(User);
    User.hasMany(Page,{foreignKey: 'authorId'});
    // const user = await User.findByPk(req.params.userId);
    // const pages = await Page.findAll({
    //   where: {
    //     authorId: req.params.userId
    //   }
    // });

    // res.send(userPages(user, pages));
  } catch (error) {
    next(error);
  }
});

module.exports = router;
