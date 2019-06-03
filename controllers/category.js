// Import category model
const Category = require('../models/category');
// To get All Category Listing
exports.index = function(req, res) {
  Category.get(function(err, data) {
    if (err) {
      res.json({
        status: false,
        message: err
      });
    }
    res.json({
      status: true,
      message: "OK",
      data: data
    });
  });
};

// Add new category
exports.new = function(req, res) {
  var category = new Category();
  category.name = req.body.name;
  category.description = req.body.description;

  // save the contact and check for errors
  category.save(function(err) {
    if (err) {
      res.json({
        status: false,
        message: err
      });
    }

    res.json({
      status: true,
      message: "New category created!",
      data: category
    });
  });
};

// Handle view category info
exports.view = function(req, res) {
  Category.findById(req.params.id, function(err, category) {
    if (err) res.send(err);
    res.json({
      message: "Category details loading..",
      data: category
    });
  });
};

// Handle update Category info
exports.update = function(req, res) {
  Category.findById(req.params.id, function(err, category) {
    if (!category) {
      res.json({
        status: false,
        message: 'Record Not Found'
      });
    };

    category.name = req.body.name ? req.body.name : category.name;
    category.description = req.body.description ? req.body.description : category.description;

    // save the category and check for errors
    category.save(function(err) {
      if (err) {
        res.json({
          status: false,
          message: err
        });
      }

      res.json({
        status :true,
        message: "category Info updated",
        data: category
      });
    });
  });
};

// Handle delete category
exports.delete = function(req, res) {
  Category.remove(
    {
      _id: req.params.id
    },
    function(err) {
      if (err) res.send(err);

      res.json({
        status: true,
        message: "category deleted"
      });
    }
  );
};
