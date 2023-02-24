import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UsersController {
  public async index({}: HttpContextContract) {
    const users = await User.all()

    return users
  }

  public async store({ request }: HttpContextContract) {
    const { name, email, password } = request.all()
    const user = await User.create({
      name,
      email,
      password
    })

    return user
  }

  public async show({ request }: HttpContextContract) {
    const { id } = request.params()
    const user = await User.findOrFail(id)

    return user
  }

  public async update({ request }: HttpContextContract) {
    const { id } = request.params()
    const body = request.all()

    const user = await User.findOrFail(id)
    await user.merge(body).save()

    return user
  }

  public async destroy({ request }: HttpContextContract) {
    const { id } = request.params()
    const user = await User.findOrFail(id)
    await user.delete()

    return {
      code: 200,
      message: 'User deleted successfully'
    }
  }
}
