/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'
import 'App/Modules/Post/routes'
import 'App/Modules/User/routes'

import Post from 'App/Models/Post'

Route.post('login', 'AuthController.login').prefix('v1')

Route.route('/head', ['HEAD'], async ({ request, response }) => {
  const title = request.header('title')

  const post = await Post.findByOrFail('title', title)

  return post ? response.ok('Post exists') : response.notFound('Post does not exists')
}).prefix('v1')

Route.route('/options', ['OPTIONS'], async ({ response }) => {
  return response.header('Allow', 'GET, POST, PUT, PATCH, DELETE, OPTIONS, HEAD')
}).prefix('v1')

Route.any('/*', async ({ response }) => {
  return response.status(400)
}).prefix('v1')
