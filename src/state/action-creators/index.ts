import { ActionType } from "../action-types"
import { Dispatch } from "redux"    // use Dispatch type from redux to please typescript
import { Action } from '../actions/index'

export const setTestState = (state: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SETSTATE,
      state
    })
  }
}
