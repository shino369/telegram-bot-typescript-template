import { BotEvent, CTX } from '../types'

const event: BotEvent = {
  name: 'test',
  coolTime: 5000,
  execute: (ctx: CTX) => {
    const text = ctx.message.text.substring('test'.length + 1).trim()
    if (text.length > 0) {
      // do something
      return ctx.reply(`your prompt is: ${text}`)
    } else {
      return ctx.reply(`please input something`)
    }
  },
}

export default event