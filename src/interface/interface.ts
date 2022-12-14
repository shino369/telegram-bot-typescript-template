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