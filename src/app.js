const express = require('express')
const app = express()
const User = require('./models/User')

app.use(express.json())
app.use('/static', express.static('public'))

app.post('/', async (req, res, next) => {
	try {
		const user = await User.create(req.body)

		if (!user) {
			throw new Error('No user created')
		}
		res.send(user)
	} catch (error) {
		next(error)
	}
})

app.get('/', async (req, res, next) => {
	try {
		const user = await User.findAll()

		if (!user) {
			throw new Error('No user found')
		}

		res.send(user)
	} catch (error) {
		next(error)
	}
})

app.get('/:username', async (req, res, next) => {
	try {
		const user = await User.findOne({
			where: {
				username: req.params.username
			}
		})

		if (!user) {
			throw new Error('No user found')
		}

		res.send(user)
	} catch (error) {
		next(error)
	}
})

app.put('/:username', async (req, res, next) => {
	try {
		const updated = await User.update(req.body, {
			where: {
				username: req.params.username
			}
		})

		console.log(updated)

		if (updated[0] === 0) {
			throw new Error('No update made')
		}

		res.sendStatus(200)
	} catch (error) {
		next(error)
	}
})

app.delete('/:username', async (req, res, next) => {
	try {
		const deleted = await User.destroy({
			where: {
				username: req.params.username
			}
		})

		console.log(deleted)

		if (deleted === 0) {
			throw new Error('No user deleted')
		}

		res.sendStatus(200)
	} catch (error) {
		next(error)
	}
})

module.exports = app
