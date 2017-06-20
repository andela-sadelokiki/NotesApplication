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
    let tagId = req.params.Id;

    db.tag.update({
      where: {
        id: tagId
      }
    }).then(() => {
      res.json({message: 'tag deleted'});
    }).catch((err) => {
      res.status(400).send(err);
    })
  }
  
}
module.exports = tagCtrl;