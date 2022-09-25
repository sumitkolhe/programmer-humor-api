import xray from 'x-ray'
import { getConfig } from '../configs'
import type { Post } from '../interfaces/post.interface'
import type { Category } from '../interfaces/categories.interface'
import type { Config } from '../interfaces/config.interface'

export class ScraperService {
  private xRay: xray.Instance
  private config: Config['programmerHumor']

  constructor() {
    this.xRay = xray()
    this.config = getConfig().programmerHumor
  }

  public getMemesByCategory = async (page: number, category?: Category) => {
    const results: Post[] = await this.xRay(
      `${this.config.endpoint}${category ? `/${category}-memes` : ''}/page/${page}`,
      '.g1-collection-stream .g1-collection-item .entry-tpl-stream',
      [
        {
          title: 'article header .entry-title a@text',
          link: 'article header .entry-title a@href',
          views: 'article header .entry-after-title p@text',
          category: ['article header .entry-before-title a@text'],
          author: 'article .entry-body a@text',
          createdAt: 'article .entry-body time@datetime',
          imageUrl: 'article .entry-featured-media .g1-frame .g1-frame-inner img@data-src',
        },
      ]
    )
    //.paginate('.g1-load-more@data-g1-next-page-url')
    // .limit(1 + 1 - 1)

    results.forEach((post: Post) => {
      if (post?.category?.length === 0) post.category.push(category)
    })

    return results
  }

  public getTrendingMemes = async () => {
    const results: Pick<Post, 'title' | 'link' | 'imageUrl'>[] = await this.xRay(
      `${this.config.endpoint}/trending`,
      '.g1-collection-viewport ul .g1-collection-item .entry-tpl-list-fancy',
      [
        {
          title: 'article header .entry-title a@text',
          link: 'article header .entry-title a@href',
          imageUrl: 'article .entry-featured-media .g1-frame .g1-frame-inner img@data-src',
        },
      ]
    )

    return results
  }

  public getHotMemes = async () => {
    const results: Pick<Post, 'title' | 'link' | 'imageUrl'>[] = await this.xRay(
      `${this.config.endpoint}/hot`,
      '.g1-collection-viewport ul .g1-collection-item .entry-tpl-list-fancy',
      [
        {
          title: 'article header .entry-title a@text',
          link: 'article header .entry-title a@href',
          imageUrl: 'article .entry-featured-media .g1-frame .g1-frame-inner img@data-src',
        },
      ]
    )

    return results
  }
}
