import Context from 'telegraf/typings/context'
import { Update } from 'telegraf/typings/core/types/typegram'
import { BotEvent, CTX } from '../types'

const TEXT: BotEvent = {
  name: 'message',
  type: 'filter',
  filter: {
    func: 'message',
    key: 'text'
  },
  // coolTime: 5000,
  execute: (ctx: CTX<Context<Update>, 'text'>) => {
    const userId = ctx.message.from.id
    const { text }= ctx.update.message
    console.log(text)
    if(text.includes('屌你老母')) {
        ctx.reply('我先屌你老母！')
    }
  },
}

export default TEXT
