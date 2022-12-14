import Context from 'telegraf/typings/context'
import { Update } from 'telegraf/typings/core/types/typegram'
import { Telegraf } from 'telegraf/typings/telegraf'

const action = (bot: Telegraf<Context<Update>> ) => {
  bot.action(/.+/, async ctx => {
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
      url = await bot.telegram.getFileLink(photo.file_id as string)
    }

    switch (button) {
      case 'A':
        return ctx.reply(`A is clicked`)
      //...
      default:
        return ctx.reply('Button other than A is clicked')
    }
  })
}

export default action
