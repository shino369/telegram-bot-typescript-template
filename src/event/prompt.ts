import Context from 'telegraf/typings/context'
import { Update } from 'telegraf/typings/core/types/typegram'
import { Telegraf } from 'telegraf/typings/telegraf'
const COMMAND = {
  SAMPLE: 'sample',
}
const prompt = (bot: Telegraf<Context<Update>>) => {
  bot.command(COMMAND.SAMPLE, async ctx => {
    const text = ctx.message.text.substring(COMMAND.SAMPLE.length + 1).trim()
    if (text.length > 0) {
      // do something
      return ctx.reply(`your prompt is: ${text}`)
    } else {
      return ctx.reply(`please input something`)
    }
  })
}

export default prompt
