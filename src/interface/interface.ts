
import Context, { NarrowedContext } from "telegraf/typings/context"
import { Message, Update } from "telegraf/typings/core/types/typegram"

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
  once?: boolean | false
  coolTime?: number
  execute: (...args: any) => void
}

export type CTX = NarrowedContext<Context<Update>, {
  message: Update.New & Update.NonChannel & Message.TextMessage;
  update_id: number;
}>