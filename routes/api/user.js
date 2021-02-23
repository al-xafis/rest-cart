const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator')
const User = require('../../models/User');
const auth = require('../../middleware/auth');

router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
})

router.post('/register', [
  check('name', 'Please provide a name').not().isEmpty(),
  check('email', 'Please provide a email').not().isEmpty(),
  check('password', 'Please provide a password min length: 6').isLength({min: 6}),
], async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }

  const { name, email, password } = req.body;

  try {
    let user = await User.findOne({email});

    if (user) {
      return res.status(400).send({ error: 'User already exists'});
    }

    user = new User({
      name,
      email,
      password,
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    await user.save();

    const payload = {
      user: {
        id: user.id
      }
    }

    jwt.sign(payload, config.get("JwtSecret"), { expiresIn: 36000 }, (err, token) => {
      if (err) throw err;
      res.json({ user: user, token: token }) ;
    })
    
  } catch (err) {
    console.error(err);
    res.status(500).send({ 'error': 'Server Error'})
  }
});


router.post('/login', [
  check('email', 'Please provide a email').isEmail(),
  check('password', 'Please provide a password ').exists(),
], async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }

  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });

    if (!user) {
      return res.status(400).send({ error: 'Invalid email'});
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).send({ error: 'Invalid password'});
    }

    const payload = {
      user: {
        id: user.id
      }
    }

    jwt.sign(payload, config.get("JwtSecret"), { expiresIn: 36000 }, (err, token) => {
      if (err) throw err;

      res.json({ user: user, token: token });
    })
    
  } catch (err) {
    console.error(err);
    res.status(500).send({ 'error': 'Server Error'})
  }
});

router.post('/products', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    const newProduct = {
    tag: req.body.tag,
    img: req.body.img,
    name: req.body.name,
    edition: req.body.edition,
    price: req.body.price,
  } 

  user.products.unshift(newProduct);
  user.save().then(user => res.json(user));
  } catch (err) {
    console.error(err);
    res.status(500).send({ 'error': 'Server Error'});
  }
  
});

router.get('/products', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    res.json(user.products);
  } catch (err) {
    console.error(err);
    res.status(500).send({ 'error': 'Server Error'});
  }
  
});

module.exports = router;