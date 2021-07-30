import { getProfileFailure } from '../Actions/getProfileAction'
import {GET_PROFILE, GET_PROFILE_FAILURE, GET_PROFILE_SUCCESS} from '../Types/gitProfileActionTypes'

let initialState ={
    id: "2",
    login: "defunkt",
    avatar_url: "https://avatars.githubusercontent.com/u/2?v=4"
}

// export const ProfilePage = () => {
export const gitProfileReducer = (state=initialState, action) => {
    switch(action.type){
        case GET_PROFILE : 
        return {...state, loading: true}
        case GET_PROFILE_SUCCESS :
            return {profiles: action.payload, loading: false, hasErrors: false}
        case GET_PROFILE_FAILURE :
            return {...state, loading: false, hasErrors: true}
        default :
            return state
       }
}

export default gitProfileReducer