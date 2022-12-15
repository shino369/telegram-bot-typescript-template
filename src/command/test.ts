import Context from 'telegraf/typings/context'
import { Update } from 'telegraf/typings/core/types/typegram'
import { BotEvent, CTX } from '../types'

const COMMAND: BotEvent = {
  name: 'test',
  type: 'command',
  // coolTime: 5000,
  execute: (ctx: CTX<Context<Update>, 'text'>) => {
    const text = ctx.message.text.substring('test'.length + 1).trim()
    if (text.length > 0) {
      // do something
      return ctx.reply(`your prompt is: ${text}`)
    } else {
      return ctx.reply(`please input something`)
    }
  },
}

export default COMMAND