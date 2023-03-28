import Route from '@ioc:Adonis/Core/Route'

//login routes
Route.post('/login', 'AuthController.login')
Route.post('/logout', 'AuthController.logout').middleware('auth')

//Users routes
Route.resource('users', 'UsersController').middleware({
    destroy: ['auth', 'admin'],
    show : ['auth', 'admin'],
    update: ['auth', 'admin'],
    index: ['auth', 'admin'],
    store: []
})

//Products routes
Route.resource('products', 'ProductsController').middleware({
    destroy: ['auth', 'admin'],
    show : ['auth'],
    update: ['auth', 'admin'],
    index: ['auth'],
    store: ['auth', 'admin']
})