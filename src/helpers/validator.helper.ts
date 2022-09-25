import { Joi, Segments, celebrate } from 'celebrate'
import { Category } from '../interfaces/categories.interface'

export const homeSchema = celebrate({
  [Segments.QUERY]: Joi.object().keys({
    page: Joi.string().default(1).optional(),
    category: Joi.string()
      .valid(
        Category.backend,
        Category.cloud,
        Category.databases,
        Category.debugging,
        Category.frontend,
        Category.java,
        Category.javascript,
        Category.linux,
        Category.php,
        Category.programming,
        Category.python,
        Category.stackoverflow,
        Category.testing
      )
      .optional(),
  }),
})
