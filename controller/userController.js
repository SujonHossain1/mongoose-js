const PlaylistModel = require('./model/Playlist');
const UserModel = require('./model/User');




const addUser = async () => {
    try {
        const user = new UserModel({
            name: 'Ripa Hossain',
            email: 'ripa.hossain758@gmail.com',
            password: 'sujon23r32',
            dateOfBirth: new Date().toLocaleTimeString(),
        });

        const result = await user.save();
        console.log(result)
    } catch (err) {
        console.log(err);
    }
}
addUser();

const addPlaylist = async () => {
    const react = new PlaylistModel({
        name: 'Node Js',
        course_type: 'backend',
        isActive: true,
        videos: 5
    });
    const result = await react.save();
    console.log(result)
}
addPlaylist();
