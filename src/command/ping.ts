import Context from 'telegraf/typings/context'
import { Update } from 'telegraf/typings/core/types/typegram'
import { BotEvent, CTX } from '../types'

const COMMAND: BotEvent = {
  name: 'ping',
  type: 'command',
  // coolTime: 5000,
  execute: (ctx: CTX<Context<Update>, 'text'>) => {
    return ctx.reply(`pong!`)
  },
}

export default COMMAND
