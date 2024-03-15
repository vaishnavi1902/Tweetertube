const User = require('../model/user')
const Teacher = require('../model/teacher')
const School = require('../model/school')
const { hashPassword, comparePassword } = require('../helpers/auth')
const jwt = require('jsonwebtoken');

const test = require = (req, res) => {
    res.json('test is working')
}


//register function
//register for student
const registerUser = async (req, res) => {
    try {
        const { fname, mname, lname, adhar, age, gender, ayear, password } = req.body;
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
            fname, mname, lname, adhar, age, gender, ayear, password: hashedPassword
        })
        return res.json(user)
    } catch (error) {
        console.log(error)
    }
}
//register for teacher

const registerTeacher = async (req, res) => {
    try {
        const { fname, mname, lname, adhar, mobile, email, age, gender, proefficiency, password } = req.body;
        if (!password || password.lenght < 6) {
            return res.json({
                error: 'password is required and should be at least 6 charachter long'
            })
        }
        const exist = await Teacher.findOne({ adhar });
        if (exist) {
            return res.json({
                error: 'adhar is already taken'
            })
        }
        const hashedPassword = await hashPassword(password)
        const user = await Teacher.create({
            fname, mname, lname, adhar, mobile, email, age, gender, proefficiency, password: hashedPassword
        })
        // console.log(user)
        return res.json(user)
    } catch (error) {
        console.log(error)
    }
}
//school register

const registerSchool = async (req, res) => {
    try {
        const { sname, branch, addres, pincode, mobile, email, state, password } = req.body;
        if (!password || password.lenght < 6) {
            return res.json({
                error: 'password is required and should be at least 6 charachter long'
            })
        }
        const exist = await School.findOne({ email });
        if (exist) {
            return res.json({
                error: 'adhar is already taken'
            })
        }
        const hashedPassword = await hashPassword(password)
        const user = await School.create({
            sname, branch, addres, pincode, mobile, email, state, password: hashedPassword
        })
        // console.log(user)
        return res.json(user)
    } catch (error) {
        console.log(error)
    }
}

//login function
//student login
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
            jwt.sign({ adhar: user.adhar, id: user._id, fname: user.fname }, process.env.JWT_SECRET, {}, (err, token) => {
                if (err) throw err;
                res.cookie('token', token).json(user)
            })
            // res.json(user)
        }
        if (!match) {
            res.json({
                error: "wrong password"
            })
        }
    } catch (error) {
        console.log(error)
    }
}
//teacher login
const loginTeacher = async (req, res) => {
    try {
        const { email, password } = req.body;
        //check user is exists 
        const user = await Teacher.findOne({ email });
        if (!user) {
            return res.json({
                error: 'No User Found'
            })
        }
        //check password
        const match = await comparePassword(password, user.password)
        if (match) {
            jwt.sign({ adhar: user.adhar, id: user._id, fname: user.fname }, process.env.JWT_SECRET, {}, (err, token) => {
                if (err) throw err;
                res.cookie('token', token).json(user)
            })
            // res.json(user)
        }
        if (!match) {
            res.json({
                error: "wrong password"
            })
        }
    } catch (error) {
        console.log(error)
    }
}
//School login
const loginSchool = async (req, res) => {
    try {
        const { email, password } = req.body;
        //check user is exists 
        const user = await School.findOne({ email });
        if (!user) {
            return res.json({
                error: 'No User Found'
            })
        }
        //check password
        const match = await comparePassword(password, user.password)
        if (match) {
            jwt.sign({ email: user.email, id: user._id, sname: user.sname }, process.env.JWT_SECRET, {}, (err, token) => {
                if (err) throw err;
                res.cookie('token', token).json(user)
            })
            // res.json(user)
        }
        if (!match) {
            res.json({
                error: "wrong password"
            })
        }
    } catch (error) {
        console.log(error)
    }
}

const getProfile = (req, res) => {
    const { token } = req.cookies
    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, {}, (err, user) => {
            if (err) throw err;
            res.json(user)
        })
    } else {
        res.json(token)
    }
}
//logoutUser
const logoutUser = (req, res) => {
    try {
        // Your logout code here
        res.clearCookie('token');
        res.status(200).json({ message: 'Logout successful' });
    } catch (error) {
        console.error('Logout error:', error);
        res.status(500).json({ error: 'Logout failed' });
    }
};
module.exports = {
    test,
    registerUser,
    registerTeacher,
    registerSchool,
    loginUser,
    loginTeacher,
    loginSchool,
    getProfile,
    logoutUser
}