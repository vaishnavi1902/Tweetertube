const User = require('../model/user')
const { hashPassword, comparePassword } = require('../helpers/auth')

const test = require = (req, res) => {
    res.json('test is working')
}
//register function
const registerUser = async (req, res) => {
    try {
        const { fname , mname , lname , adhar , age , gender , ayear , password } = req.body;
        if (!password || password.lenght < 6) {
            return res.json({
                error: 'password is required and should be at least 6 charachter long'
            })
        }
        const exist = await User.findOne({ adhar });
        if (exist) {
            return res.json({
                error: 'adhar is already taken'
            })
        }
        const hashedPassword = await hashPassword(password)
        const user = await User.create({
            fname , mname , lname , adhar , age , gender , ayear , password: hashedPassword
        })
        return res.json(user)
    } catch (error) {
        console.log(error)
    }
}

//login function
const loginUser = async (req, res) => {
    try {
        const { adhar, password } = req.body;
        //check user is exists 
        const user = await User.findOne({ adhar });
        if (!user) {
            return res.json({
                error: 'No User Found'
            })
        }
        //check password
        const match = await comparePassword(password, user.password)
        if (match) {
            res.json('password is match')
        }
    } catch (error) {
        console.log(error)
    }
}
module.exports = {
    test,
    registerUser,
    loginUser
}