// module.exports = function(app) {
    const SequelizeTest = require('../controllers/test.controller.js');

    var router = require('express').Router();

    // Create a new Test
    router.post("/", SequelizeTest.create);

    // Retrieve all Tests
    router.get("/", SequelizeTest.findAll);

    // Retrieve a single Tutorial with id
    router.get("/:id", SequelizeTest.findOne);

    // Update a Tutorial with id
    router.put("/:id", SequelizeTest.update);

    // Delete a Tutorial with id
    router.delete("/:id", SequelizeTest.delete);

    // app.use('/api/tests', router);

    module.exports = router;
// };