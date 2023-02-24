import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AuthController {
  public async login({ auth, request, response }: HttpContextContract) {
    const  { email, password } = request.all()
    
    try {
      return await auth.use('api').attempt(email, password)
    } catch {
      return response.unauthorized('Invalid credentials')
    }
  }
}
