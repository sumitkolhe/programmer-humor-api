import { Category } from '../interfaces/categories.interface'
import { ScraperService } from '../services/scraper.service'
import type { NextFunction, Request, Response } from 'express'

export class ScraperController {
  private scraperService: ScraperService

  constructor() {
    this.scraperService = new ScraperService()
  }

  public home = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { page, category } = req.query

      const resp = await this.scraperService.getMemesByCategory(Number(page), Category[category as string])

      res.status(200).json(resp)
    } catch (error) {
      next(error)
    }
  }
  public trending = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const resp = await this.scraperService.getTrendingMemes()

      res.status(200).json(resp)
    } catch (error) {
      next(error)
    }
  }

  public hot = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const resp = await this.scraperService.getHotMemes()

      res.status(200).json(resp)
    } catch (error) {
      next(error)
    }
  }
}
