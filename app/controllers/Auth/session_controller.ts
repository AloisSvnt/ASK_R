import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'

export default class SessionController {
  async showLogin({ inertia }: HttpContext) {
    return inertia.render('Auth/Login')
  }

  async login({ request, auth, response, session }: HttpContext) {
    const { email, password } = request.only(['email', 'password'])
    try {
      const user = await User.verifyCredentials(email, password)
      await auth.use('web').login(user)
      session.flash({ success: 'You are logged in.' })

      return response.redirect('/')
    } catch (errors) {
      console.error('Login error:', errors)
      session.flash({ errors: 'Incorrect credentials.' })

      return response.redirect('/login')
    }
  }

  async showRegister({ inertia }: HttpContext) {
    return inertia.render('Auth/Register')
  }

  async register({ request, auth, response, session }: HttpContext) {
    const { email, password, firstName, lastName } = request.only([
      'email',
      'password',
      'firstName',
      'lastName',
    ])
    try {
      const user = await User.create({ email, password, firstName, lastName })
      await auth.use('web').login(user)
      session.flash({ success: 'You are registered and logged in.' })
      return response.redirect('/')
    } catch (errors) {
      console.error('Register error:', errors)
      session.flash({ errors: 'There was a problem registering your account.' })
      return response.redirect('/register')
    }
  }
  async logout({ auth, response, session }: HttpContext) {
    await auth.use('web').logout()
    session.flash({ success: 'You have been logged out.' })
    return response.redirect('/')
  }
}