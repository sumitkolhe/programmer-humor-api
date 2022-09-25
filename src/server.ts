import 'dotenv/config'
import { App } from './app'
import { HomeRoute } from './routes/home.route'

const app = new App([new HomeRoute()])

app.listen()
