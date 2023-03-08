import Route from '@ioc:Adonis/Core/Route'

Route.post('/login', 'AuthController.login')
Route.post('/logout', 'AuthController.logout').middleware('auth')
Route.resource('users', 'UsersController').middleware({
    destroy: ['auth', 'admin'],
    show : ['auth', 'admin'],
    update: ['auth', 'admin'],
    index: ['auth', 'admin']
})