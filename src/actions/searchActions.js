/*
 * action types
 */

export const UPDATE_COMPLETE = 'UPDATE_COMPLETE'
export const GET_RESULTS = 'GET_RESULTS'
/*
 * action creators
 */

export function updateHistory(storeResults) {
  return { type: UPDATE_COMPLETE, payload: storeResults }
  
}
