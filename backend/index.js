
const express = require('express'),
app = express(),
passport = require('passport'),
port = process.env.PORT || 80,
cors = require('cors'),
cookie = require('cookie')

const bcrypt = require('bcrypt')

const db = require('./database.js')
let users = db.users

require('./passport.js')

const router = require('express').Router(),
jwt = require('jsonwebtoken')

app.use('/api', router)
router.use(cors({ origin: 'http://localhost:3000', credentials: true }))

router.use(express.json())
router.use(express.urlencoded({ extended: false }))

let game_shops = {
    list: [
        { id: 1, name: "PS4", price:300, date_sell:"27/04/2021"  ,sell_by:"John", imageurl:"https://gmedia.playstation.com/is/image/SIEPDC/ps4-slim-image-block-01-en-24jul20?$native--t$"},
        { id: 2, name: "PS5", price:500, date_sell:"27/04/2021"  ,sell_by:"Mark", imageurl:"https://www.blognone.com/sites/default/files/externals/e4c669c3b53d08c0834ed8f590ad9122.jpg"},
        { id: 3, name: "Xbox One", price:450, date_sell:"27/04/2021"  ,sell_by:"Emiri", imageurl:"http://p.ipricegroup.com/uploaded_ea7827ae0957a100f2a81e27db51263c.jpg" },
        { id: 4, name: "PS5 coll", price:120, date_sell:"27/04/2021"  ,sell_by:"Jack", imageurl:"https://images-na.ssl-images-amazon.com/images/I/61o7ai%2BYDoL._SL1441_.jpg"},

    ]
    
}
let income = 0

router.post('/login', (req, res, next) => {
passport.authenticate('local', { session: false }, (err, user, info) => {
    console.log('Login: ', req.body, user, err, info)
    if (err) return next(err)
    if (user) {
        const token = jwt.sign(user, db.SECRET, {
            expiresIn: '1d'
        })
        // req.cookie.token = token
        res.setHeader(
            "Set-Cookie",
            cookie.serialize("token", token, {
                httpOnly: true,
                secure: process.env.NODE_ENV !== "development",
                maxAge: 60 * 60,
                sameSite: "strict",
                path: "/",
            })
        );
        res.statusCode = 200
        return res.json({ user, token })
    } else
        return res.status(422).json(info)
})(req, res, next)
})

router.get('/logout', (req, res) => {
res.setHeader(
    "Set-Cookie",
    cookie.serialize("token", '', {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        maxAge: -1,
        sameSite: "strict",
        path: "/",
    })
);
res.statusCode = 200
return res.json({ message: 'Logout successful' })
})

/* GET user profile. */
router.get('/profile',
passport.authenticate('jwt', { session: false }),
(req, res, next) => {
    res.send(req.user)
});

router.get('/comment',
passport.authenticate('jwt', { session: false }),
(req, res, next) => {
    res.send('comment')
});

router.route('/game_shops')
.get((req, res) => res.json(game_shops.list))
.post((req, res) => {
    console.log(req.body)
    let newgame_shop = {}
    newgame_shop.id = (game_shops.list.length) ? game_shops.list[game_shops.list.length - 1].id + 1 : 1
    newgame_shop.name = req.body.name
    newgame_shop.price = req.body.price
    newgame_shop.date_sell = req.body.date_sell
    newgame_shop.sell_buy = req.body.sell_buy
    newgame_shop.imageurl = req.body.imageurl
    game_shops = { "list": [...game_shops.list, newgame_shop] }
    res.json(game_shops.list)
})

router.route('/game_shops/:game_shop_id')
.get((req, res) => {
    const game_shop_id = req.params.game_shop_id
    const id = game_shops.list.findIndex(item => +item.id === +game_shop_id)
    res.json(game_shops.list[id])
})
.put((req, res) => {
    const game_shop_id = req.params.game_shop_id
    const id = game_shops.list.findIndex(item => +item.id === +game_shop_id)
    game_shops.list[id].id = req.body.id
    game_shops.list[id].name = req.body.name
    game_shops.list[id].price = req.body.price
    game_shops.list[id].date_sell = req.body.date_sell
    game_shops.list[id].sell_buy = req.body.sell_buy
    game_shops.list[id].imageurl = req.body.imageurl
    res.json(game_shops.list)
})
.delete((req, res) => {
    const game_shop_id = req.params.game_shop_id
    game_shops.list = game_shops.list.filter(item => +item.id !== +game_shop_id)
    res.json(game_shops.list)
})



router.route('/income')
.get((req, res) => res.json(income))



router.route('/purchase/:game_shop_id')
.delete((req, res) => {
    const game_shop_id = req.params.game_shop_id
    const id = game_shops.list.findIndex(item => +item.id === +game_shop_id)
    console.log('game_shopID: ', game_shop_id, 'ID: ', id)
    if (id !== -1) {
        income += game_shops.list[id].price
        game_shops.list = game_shops.list.filter(item => +item.id !== +game_shop_id)
        res.json(game_shops.list)
    }
    else {
        res.send('Not found')

    }
})

router.post('/register',
async (req, res) => {
    try {
        const SALT_ROUND = 10
        const { username, email, password } = req.body
        if (!username || !email || !password)
            return res.json({ message: "Cannot register with empty string" })
        if (db.checkExistingUser(username) !== db.NOT_FOUND)
            return res.json({ message: "Duplicated user" })

        let id = (users.users.length) ? users.users[users.users.length - 1].id + 1 : 1
        hash = await bcrypt.hash(password, SALT_ROUND)
        users.users.push({ id, username, password: hash, email })
        res.status(200).json({ message: "Register success" })
    } catch {
        res.status(422).json({ message: "Cannot register" })
    }
})

router.get('/alluser', (req, res) => res.json(db.users.users))

router.get('/', (req, res, next) => {
res.send('Respond without authentication');
});

// Error Handler
app.use((err, req, res, next) => {
let statusCode = err.status || 500
res.status(statusCode);
res.json({
    error: {
        status: statusCode,
        message: err.message,
    }
});
});

// Start Server
app.listen(port, () => console.log(`Server is running on port ${port}`))

