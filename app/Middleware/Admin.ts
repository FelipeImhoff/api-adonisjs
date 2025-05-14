import { AuthenticationException } from '@adonisjs/auth/build/standalone';
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class Admin {
  public async handle({ auth }: HttpContextContract, next: () => Promise<void>) {
    const { is_admin: isAdmin } = await auth.use('api').authenticate()
    if (!isAdmin) {
      throw new AuthenticationException('Unauthorized access', 'E_UNAUTHORIZED_ACCESS')
    }
    await next()
  }
}
