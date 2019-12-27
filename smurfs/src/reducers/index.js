/*
  Be sure to import in all of the action types from `../actions`
*/
import axios from 'axion'
export const FETCH_SMURFS_DATA_START = "FETCH_SMURFS_DATA_START"
export const FETCH_SMURFS_DATA_SUCCESS = "FETCH_SMURFS_DATA_SUCCESS"
export const FETCH_SMURFS_DATA_FAILURE = "FETCH_SMURFS_DATA_FAILURE"
 
export const getData = () => {
  return dispatch => {
    axios
    .get(`http://localhost:3333/smurfs`)
    .then(res => {
      console.log("GET Request Response: ", res);
      dispatch({ type: FETCH_SMURFS_DATA_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCH_SMURFS_DATA_FAILURE, payload: err.response });
    });
  }
}












































































/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
