import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Product from 'App/Models/Product'

export default class ProductsController {
    public async index({}: HttpContextContract) {
      const products = await Product.all()
  
      return products
    }
  
    public async store({ request }: HttpContextContract) {
      const data = request.only(['name', 'description', 'price'])
      const products = await Product.create({
        ...data
      })
  
      return products
    }
  
    public async show({ request }: HttpContextContract) {
      const { id } = request.params()
      const products = await Product.findOrFail(id)
  
      return products
    }
  
    public async update({ request }: HttpContextContract) {
      const { id } = request.params()
      const body = request.all()
  
      const products = await Product.findOrFail(id)
      await products.merge(body).save()
  
      return products
    }
  
    public async destroy({ request }: HttpContextContract) {
      const { id } = request.params()
      const products = await Product.findOrFail(id)
      await products.delete()
  
      return {
        code: 200,
        message: 'products deleted successfully'
      }
    }
  }
  