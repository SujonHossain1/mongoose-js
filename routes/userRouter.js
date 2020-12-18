const router = require('express').Router();
const {
    login,
    getAllUsers,
    getOneUser,
    updateOneUser,
    deleteUser } = require('../controller/userController');

router.get('/users', getAllUsers);
router.post('/login', login);
router.get('/user/:id', getOneUser);
router.post('/user/:id', updateOneUser);
router.post('/user/delete/:id', deleteUser);

module.exports = router;