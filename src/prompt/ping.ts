import { BotEvent, CTX } from '../types'

const event: BotEvent = {
  name: 'ping',
  coolTime: 5000,
  execute: (ctx: CTX) => {
    return ctx.reply(`pong!`)
  },
}

export default event
