import dotenv from 'dotenv'
import { Telegraf } from 'telegraf'
import { prompt, image, action } from './event/index.js'

dotenv.config()
const bot = new Telegraf(process.env.TOKEN as string, {
  handlerTimeout: 9_000_000,
})

function init() {
  prompt(bot)
  image(bot)
  action(bot)
  bot.launch()
  process.on('exit', () => {})
  process.once('SIGINT', () => {})
  process.once('SIGTERM', () => {})
}

init()
