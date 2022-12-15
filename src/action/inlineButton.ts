import Context from 'telegraf/typings/context'
import { Update } from 'telegraf/typings/core/types/typegram'
import { BotEvent, CTX } from '../types'

const INLINE_BUTTON: BotEvent = {
  name: 'inline button',
  type: 'action',
  // coolTime: 5000,
  execute: async (
    ctx: CTX<
      Context<Update> & {
        match: RegExpExecArray
      },
      'callback_query'
    >,
  ) => {
    const button = ctx.match[0]
    const userId = ctx.update.callback_query.from.id
    const channelId = ctx.update.callback_query.message?.chat.id
    let text: string = (ctx.update.callback_query.message as any)['text']
    let photo
    let url: URL
    let img
    if (!text) {
      text = (ctx.update.callback_query.message as any)['caption']
      const photos = (ctx.update.callback_query.message as any)['photo']
      photo = photos[photos.length - 1]
      url = await ctx.telegram.getFileLink(photo.file_id)
    }

    switch (button) {
      case 'A':
        return ctx.reply(`A is clicked`)
      //...
      default:
        return ctx.reply('Button other than A is clicked')
    }
  },
}

export default INLINE_BUTTON
