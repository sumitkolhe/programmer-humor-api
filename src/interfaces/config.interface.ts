export interface Config {
  env: string
  server: {
    host: string
    port: number
  }
  cors: {
    origin: string | boolean
    credentials: boolean
  }
  log: {
    format: 'combined' | 'common' | 'dev' | 'short' | 'tiny'
    level: 'error' | 'warn' | 'info' | 'http' | 'debug'
  }
  programmerHumor: {
    endpoint: string
  }
}
