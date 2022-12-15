import dotenv from 'dotenv'
import { Telegraf } from 'telegraf'
import fs from 'fs'

dotenv.config()
const bot = new Telegraf(process.env.TOKEN as string, {
  handlerTimeout: 9_000_000,
})

function init() {
  fs.readdirSync('./build/event').forEach(async handler => {
    if (!handler.endsWith('.js')) {
      return
    }
    const module =  await import(`./event/${handler}`)
    module.default(bot)
  })
  bot.launch()
  process.on('exit', () => {})
  process.once('SIGINT', () => {})
  process.once('SIGTERM', () => {})
}

init()
