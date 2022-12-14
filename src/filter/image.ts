import Context from 'telegraf/typings/context'
import { Update } from 'telegraf/typings/core/types/typegram'
import { getInlinKeyboard } from '../utils/index.js'
import { BotEvent, CTX } from '../types'

const IMAGE: BotEvent = {
  name: 'image',
  type: 'filter',
  filter: {
    func: 'message',
    key: 'photo'
  },
  // coolTime: 5000,
  execute: (ctx: CTX<Context<Update>, 'photo'>) => {
    const userId = ctx.message.from.id
    const { caption, photo } = ctx.update.message
    const originalSizePhoto = photo[photo.length - 1]

    const exampleInlineKeyboard = {
      firstRow: {
        firstBtn: {
          label: 'A',
          value: 'A'
        },
        secondBtn: {
          label: 'B',
          value: 'B'
        },
        thirdBtn: {
          label: 'C',
          value: 'C'
        },
      },
      secondRow: {
        firstBtn: {
          label: 'D',
          value: 'D'
        },
        secondBtn: {
          label: 'E',
          value: 'E'
        },
        thirdBtn: {
          label: 'F',
          value: 'F'
        },
      }
    }

    return ctx.replyWithPhoto(originalSizePhoto.file_id, {
      caption: `some text...`,
      reply_markup: getInlinKeyboard(exampleInlineKeyboard),
    })
  },
}

export default IMAGE
