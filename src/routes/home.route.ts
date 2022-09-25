import { Router } from 'express'
import { homeSchema } from '../helpers/validator.helper'
import { ScraperController } from '../controllers/scraper.controller'
import type { Routes } from '../interfaces/routes.interface'

export class HomeRoute implements Routes {
  public path = '/'
  public router = Router()
  public scraperController = new ScraperController()

  constructor() {
    this.initializeRoutes()
  }

  private initializeRoutes() {
    this.router.get(this.path, homeSchema, this.scraperController.home)
    this.router.get(`${this.path}trending`, this.scraperController.trending)
    this.router.get(`${this.path}hot`, this.scraperController.hot)
  }
}
