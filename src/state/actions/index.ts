import { ActionType } from '../action-types'

interface SetState {
  type: ActionType.SETSTATE,
  state: string,
}

export type Action = SetState