const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
router.get('/', async (req, res) => {
  // find all categories with its associated Products
  try {
    const cathegoryData = await Category.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(cathegoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value with its associated Products
  try {
    const cathegoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });

    if (!cathegoryData) {
      res.status(404).json({ message: 'No category found with that id!' });
      return;
    }

    res.status(200).json(cathegoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// create a new category
router.post('/', async (req, res) => {
  try {
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }

});

// update a category by its id value
router.put('/:id', async (req, res) => {
  try {
    const categoryData = await Category.update(req.body, {
      where: {
        id: req.params.id,
      }
    })
    if (!categoryData[0]) {
      res.status(404).json({ message: 'No tag found with that id!' });
      return;
    }
    res.status(200).json(
      {
        message: "Successfully updated",
        data: categoryData
      }
    );
  } catch (err) {
    res.status(500).json(err);
  }
});

// delete a category by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!categoryData) {
      res.status(404).json({ message: 'No category found with that id!' });
      return;
    }

    res.status(200).json(
      {
        message: "Successfully deleted",
        data: categoryData
      }

    );
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
