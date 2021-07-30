import { combineReducers } from 'redux'

import profileReducer from './gitProfileReducer'
 

const rootReducer = combineReducers({
  profile: profileReducer 
})

export default rootReducer
