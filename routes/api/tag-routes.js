const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  try {
    const tags = await Tag.findAll()
    res.json(tags)
  } 
  catch(err) {
    console.log(err)
    res.json("err")
  }
  // find all tags
  // be sure to include its associated Products
});

router.get('/:id', async (req, res) => {
  try {
    const tags = await Tag.findOne({
      where: {
        id: req.params.id 
      }
    })
    res.json(tags)
  } 
  catch(err) {
    console.log(err)
    res.json("err")
  }
  // find one Tag by its `id` value
  // be sure to include its associated Products
});

router.post('/', async (req, res) => {
  try {
    const tags = await Tag.create(req.body)
    res.json(tags)
  } 
  catch(err) {
    console.log(err)
    res.json("err")
  }
  // create a new Tag
});

router.put('/:id', async (req, res) => {
  try {
    const tags = await Tag.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    res.json(tags)
  } 
  catch(err) {
    console.log(err)
    res.json("err")
  }
  // update a Tag by its `id` value
});

router.delete('/:id', async (req, res) => {
  try {
    const tags = await Tag.destroy({
      where: {
        id: req.params.id
      }
    })
    res.json(tags)
  } 
  catch(err) {
    console.log(err)
    res.json("err")
  }
});

module.exports = router;
