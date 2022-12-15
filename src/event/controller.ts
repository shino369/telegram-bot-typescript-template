import Context from 'telegraf/typings/context'
import { Update } from 'telegraf/typings/core/types/typegram'
import { Telegraf } from 'telegraf/typings/telegraf'
import { readdirSync } from 'fs'
import { BotEvent, FuncMapper } from '../types'
import {
  message,
  editedMessage,
  channelPost,
  editedChannelPost,
  callbackQuery,
} from 'telegraf/filters'
import { color } from '../utils/index.js'

const funcMapper: FuncMapper = {
  message: message,
  editedMessage: editedMessage,
  channelPost: channelPost,
  editedChannelPost: editedChannelPost,
  callbackQuery: callbackQuery,
}

const Controller = (bot: Telegraf<Context<Update>>) => {
  const handlerTypes = ['/command', '/action', '/filter']

  handlerTypes.forEach(type => {
    const handlersDir = './build' + type
    readdirSync(handlersDir).forEach(async file => {
      if (!file.endsWith('.js')) {
        return
      }

      const event: BotEvent = (await import(`..${type}/${file}`)).default
      switch (event.type) {
        case 'command':
          bot.command(event.name, (...args) => event.execute(...args))
          break
        case 'action':
          bot.action(/.+/, (...args) => event.execute(...args))
          break
        case 'filter':
          if (event.filter) {
            bot.on(funcMapper[event.filter.func](event.filter.key), (...args) =>
              event.execute(...args),
            )
          }
          break
        default:
          break
      }
      console.log(color(`operation`, `Successfully loaded event ${event.name}`))
    })
  })
}

export default Controller
