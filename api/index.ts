import 'dotenv/config'
import { App } from '../src/app'
import { HomeRoute } from '../src/routes/home.route'

const app = new App([new HomeRoute()])

export default app.getServer()
