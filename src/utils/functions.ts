import chalk from 'chalk'
import { Markup } from 'telegraf'
import _ from 'lodash'
import { colorType, KeyboardObj } from '../types'

const themeColors = {
  text: '#ff8e4d',
  variable: '#ff624d',
  error: '#f5426c',
  operation: '#088F8F',
}

export const getThemeColor = (color: colorType) =>
  Number(`0x${themeColors[color].substring(1)}`)

export const color = (color: colorType, message: any) => {
  return chalk.hex(themeColors[color])(message)
}

export const getRandom = () => {
  return Math.floor(Math.random() * 2 ** 32 - 1).toString()
}


export const getInlinKeyboard = (keyboard: KeyboardObj) => {
  return {
    inline_keyboard: Object.keys(keyboard).map(rowKey =>
      Object.keys(keyboard[rowKey]).map((btnKey, _index) =>
        Markup.button.callback(
          `${keyboard[rowKey][btnKey].label}`,
          `${keyboard[rowKey][btnKey].value}`,
        ),
      ),
    ),
  }
}
