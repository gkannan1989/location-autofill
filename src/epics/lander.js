import {UPDATE_COMPLETE, GET_RESULTS} from '../actions/searchActions'
import { map } from 'rxjs/operators';

export const layoutEpic = action$ =>
  action$.ofType(GET_RESULTS)
    .pipe(// Asynchronously wait 1000ms then continue
     map((action) => (
      {
       type: UPDATE_COMPLETE,
       payload: action.payload
      })
    ))
