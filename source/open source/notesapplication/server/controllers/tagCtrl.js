'use strict';
const db = require('../models');

const tagCtrl = {
  deleteTag: (req, res) => {
    let tagId = req.params.Id;

    db.tag.destroy({
      where: {
        id: tagId
      }
    }).then(() => {
      res.json({message: 'Tag deleted'});
    }).catch((err) => {
      res.status(400).send(err);
    })
  },

  updateTag: (req, res) => {
    console.log(req, 'request');
    let tagId = req.params.id;

    db.tag.find({ 
      where: {id: tagId}
    }).then((foundtag) => {
      foundtag.update(req.body).then(() => {
        res.json({message: 'Updated'});
        }).catch((err) => {
          console.log(err);
        })
      }).catch((err) => {
        res.status(400).send(err);
      })
    },

  getTags: (req, res) => {
    db.tag.findAll({}).then((tags) => {
      res.send(tags)
    }).catch((err) => {
      console.log(err);
    })
  },
  
}
module.exports = tagCtrl;