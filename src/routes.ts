import { Router } from 'express'
import { AuthenticateUserController } from './controller/AutheticateUserController'
import { CreateMessageController } from './controller/CreateMessageController'
import { ensureAuthenticated } from './middleware/ensureAuthenticated'
import { GetLest3MessagesController } from './controller/GetLast3MessagesController'

const router = Router()

router.post('/authenticate', new AuthenticateUserController().handle)

router.post(
  '/messages',
  ensureAuthenticated,
  new CreateMessageController().handle
)

router.get('/messages/last3', new GetLest3MessagesController().handle)

export { router }
