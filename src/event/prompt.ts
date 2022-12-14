import Context from 'telegraf/typings/context'
import { Update } from 'telegraf/typings/core/types/typegram'
import { Telegraf } from 'telegraf/typings/telegraf'
import { readdirSync } from 'fs'
import { BotEvent } from '../types'

const prompt = (bot: Telegraf<Context<Update>>) => {
  const CHILDNAME = '/prompt'
  const handlersDir = './build' + CHILDNAME
  readdirSync(handlersDir).forEach(async file => {
    if (!file.endsWith('.js')) {
      return
    }
    
    let event: BotEvent = (await import(`..${CHILDNAME}/${file}`)).default
    bot.command(event.name, (...args) => event.execute(...args))
    console.log(`Successfully loaded event ${event.name}`)
  })
}

export default prompt
