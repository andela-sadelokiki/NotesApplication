const db = require('../models');
const existingDataIds = [];

const noteCtrl = {

  splitTags: (tags) => {
    return tags.split(',').map((e) => {
      return e.trim();
    })
  },

  getExistingTags: (alltags, cb) => {
    db.tag.findAll({
      where: {
        name: {
          $in: alltags
        }
      }
    }).then((tags) => {
      let existingTags = tags.map((e) => {
        existingDataIds.push(e.dataValues.id);
        return e.dataValues.name;
      })
      cb(null, existingTags)
    }).catch((err) => {
      cb(err);
    })
  },

  fetchNewTags: (alltags, existing) => {
    let result = alltags.filter((e) => {
      return !existing.includes(e);
    })
    return result;
  },

  formatNewTags: (newtags) => {
    let result = newtags.map((e) => {
      return {'name': e}
    });
    return result;
  },

  bulkCreateTags: (newtags, formattedtags, creatednote, cb) => {
    db.tag.bulkCreate(formattedtags).then(() => {
      db.tag.findAll({
        where: {
          name: {
            $in:newtags
          }
        }
      }).then((createdtags) => {
        let allTagIds = createdtags.map(e => e.dataValues.id);
        allTagIds = allTagIds.concat(existingDataIds);
        creatednote.addTags(allTagIds).then((s) => {
          cb(null, allTagIds);
        }).catch((err) => {
          cb(err);
        })
      })
    })
  },

  createNote: (req, res) => {
    db.note.create({
      title: req.body.title,
      content: req.body.content
    }).then((creatednote) => {
      var splittedTags = noteCtrl.splitTags(req.body.tag);
      noteCtrl.getExistingTags(splittedTags, (err, existing) => {
        if (err) {
          console.log(err)
        } else {
          var fetchedNewTags = noteCtrl.fetchNewTags(splittedTags, existing);
          var formattedtags = noteCtrl.formatNewTags(fetchedNewTags);
          console.log(formattedtags, 'dkfdklsds');
          noteCtrl.bulkCreateTags(fetchedNewTags, formattedtags, creatednote, (err, data) => {
            res.send(creatednote);
          });
        }
      });
    }).catch((err) => {
        console.log(err, 'creating note error');
    });
  },

   findNotesByTag: (req, res) => {
    let tagId = req.params.id;

    db.tag.find({
      where: {
        id: tagId
      },
      include: {
        model: db.note
      }
    }).then((tag) => {
      let response = tag.notes.map(e => {
        return {id: e.dataValues.id, title: e.dataValues.title, content: e.dataValues.content};
      });
      console.log('tag notes: ', response);
      res.send(response);
    });
  },

  getNotes: (req, res) => {
    db.note.findAll({
      include: {
        model: db.tag
      }
    }).then((notes) => {
      res.send(notes)
    }).catch((err) => {
      console.log(err);
    })
  },

  deleteNote: (req, res) => {
    let noteId = req.params.id;

    db.note.destroy({ 
      where: {
        id: noteId
      }
  }).then(() => {
    res.json({message: 'note deleted'})
    }).catch((err) => {
      res.status(400).send(err);
    })
  },

  updateNote: (req, res) => {
    console.log(req, 'request');
    let noteId = req.params.id;

    db.note.find({ 
      where: {id: noteId},
      include: {
        model: db.tag
      }
    }).then((foundnote) => {
      foundnote.update({
        title: req.body.title,
        content: req.body.content
      }).then((foundnote) => {
        console.log(splittedTags, tagIds, 'tag ids hereeeee')
        var splittedTags = noteCtrl.splitTags(req.body.tag);
        let tagIds = splittedTags.map(e => e.dataValues.id);
        foundnote.setTags(tagIds).then((s) => {
          console.log('tags well set');
          res.send(foundnote);
        })
      }).catch((err) => {
        res.status(400).send(err);
        })
      }).catch((err) => {
        console.log(err);
      })
    },

}

module.exports = noteCtrl;