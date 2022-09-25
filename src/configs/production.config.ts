import type { Config } from '../interfaces/config.interface'

export const productionConfig: Config = {
  env: 'production',
  server: {
    host: '0.0.0.0',
    port: Number(process.env.PORT) || 80,
  },

  cors: {
    origin: 'my-domain.com',
    credentials: true,
  },
  log: {
    format: 'tiny',
    level: 'info',
  },
  programmerHumor: {
    endpoint: 'https://programmerhumor.io',
  },
}
