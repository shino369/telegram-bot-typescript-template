import { Composer } from 'telegraf'
import * as tt from 'telegraf/typings/telegram-types'
import Context, { NarrowedContext } from 'telegraf/typings/context'
import {
  CallbackQuery,
  Message,
  Update,
} from 'telegraf/typings/core/types/typegram'
import { Telegraf } from 'telegraf/typings/telegraf'

// store.ts
export interface KeyboardObj {
  [key: string]: {
    [key: string]: {
      label: string
      value: string
    }
  }
}

export type colorType = 'text' | 'variable' | 'error' | 'operation'

export interface BotEvent {
  name: string
  type: string
  filter?: {
    func: string
    key: string
  }
  once?: boolean | false
  coolTime?: number
  execute: (...args: any) => void
}
export type Bot = Telegraf<Context<Update>>

// not quite sure how to programatically get the type for ctx

export type CTX<
  C extends Context,
  T extends tt.UpdateType | tt.MessageSubType,
> = NarrowedContext<C, tt.MountMap[T]>

export type CommandCTX = NarrowedContext<
  Context<Update>,
  {
    message: Update.New & Update.NonChannel & Message.TextMessage
    update_id: number
  }
>

export type CallbackCTX = CTX<
  Context<Update> & {
    match: RegExpExecArray
  },
  'callback_query'
>

export type ImageCTX = NarrowedContext<
  Context<Update>,
  {
    message: Update.New & Update.NonChannel & Message.PhotoMessage
    update_id: number
  }
>

export interface FuncMapper {
  [key: string]: Function
}
