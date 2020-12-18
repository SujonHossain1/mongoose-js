const UserModel = require("../model/User");

const login = (req, res) => {
    const { name, email, password, dateOfBirth } = req.body;
    const addUserToDB = async () => {
        try {
            const user = new UserModel({
                name,
                email,
                password,
                dateOfBirth
            });

            const result = await user.save();
            res.send(result);
        } catch (err) {
            console.log(err);
        }
    };
    addUserToDB();
};

const getAllUsers = (req, res) => {
    const getUsers = async () => {
        try {
            const users = await UserModel.find({});
            res.send(users);
        } catch (err) {
            console.log(err);
        }
    }
    getUsers();
};

const getOneUser = (req, res) => {
    const _id = req.params.id;
    UserModel.findOne({ _id })
        .then(result => res.send(result))
        .catch(err => res.send(err));
}
const updateOneUser = (req, res) => {
    const { name, email, password, dateOfBirth } = req.body;
    const _id = req.params.id;
    UserModel.findOneAndUpdate({ _id }, {
        $set: {
            name,
            email,
            password,
            dateOfBirth
        }
    }, {
        new: true,
        useFindAndModify: false
    })
        .then(result => res.send(result))
        .catch(err => res.send(err));
}
const deleteUser = (req, res) => {
    const _id = req.params.id;
    UserModel.findOneAndDelete({ _id })
        .then(result => res.send(result))
        .catch(err => res.send(err));
}
module.exports = { login, getAllUsers, getOneUser, updateOneUser , deleteUser}