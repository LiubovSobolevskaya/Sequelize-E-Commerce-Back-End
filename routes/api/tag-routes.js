// Import required modules
const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// GET route to retrieve all tags and their associated products
router.get('/', async (req, res) => {

  try {
    const tagData = await Tag.findAll({

      include: [{model: Product, through: ProductTag, as: 'products'}],
      
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET route to retrieve a single tag and its associated products based on ID
router.get('/:id', async (req, res) => {

  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: [{ model: Product, through: ProductTag, as: 'products'}],
    });

    if (!tagData) {
      res.status(404).json({ message: 'No tag found with that id!' });
      return;
    }

    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// POST route to create a new tag
router.post('/', async (req, res) => {

  try {
    const tagData = await Tag.create(req.body);
    res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// PUT route to update an existing tag based on ID
router.put('/:id', async (req, res) => {
  try {
    const tagData = Tag.update(req.body, {
      where: {
        id: req.params.id,
      }
    })
    if (!tagData[0]) {
      res.status(404).json({ message: 'No tag found with that id!' });
      return;
    }
 

    res.status(200).json( {
      message: "Successfully updated",
      data: tagData
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE route to delete an existing tag based on ID
router.delete('/:id', async (req, res) => {

  try {
    const tagData = await Tag.destroy({
      where: {
        id: req.params.id,
      },
  
    });

    if (!tagData) {
      res.status(404).json({ message: 'No tag found with that id!' });
      return;
    }

    res.status(200).json(
      {
          message: "Successfully deleted",
          data: tagData
      });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Export the router
module.exports = router;
