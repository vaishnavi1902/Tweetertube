const express = require('express');
const router = express.Router();
const cors = require('cors');
const { test, registerUser, loginUser, getProfile, logoutUser, registerTeacher, loginTeacher, registerSchool, loginSchool } = require('../controllers/authController')

router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:5173'
    })
)
router.get('/', test)
router.post('/register', registerUser)
router.post('/registerteacher', registerTeacher)
router.post('/registerSchool', registerSchool)
router.post('/login', loginUser)
router.post('/loginteacher', loginTeacher)
router.post('/loginSchool', loginSchool)
router.get('/profile', getProfile)
router.post('/logout', logoutUser)

module.exports = router;