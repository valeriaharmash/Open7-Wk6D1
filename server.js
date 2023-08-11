const { db } = require('./db/connection')
const app = require('./src/app')
const port = 3000

app.listen(port, async () => {
	await db.sync()
	console.log('Database synced!')
	console.log(`Server listening at http://localhost:${port}/`)
})
