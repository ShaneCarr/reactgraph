import {GET_PROFILE, GET_PROFILE_FAILURE, GET_PROFILE_SUCCESS} from '../Types/gitProfileActionTypes'
import { useQuery } from "@apollo/react-hooks"
import gql from "graphql-tag"
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'; 

const GET_USERS = gql`
  {
    users {
      id
      login
      avatar_url
    }
  }
`

export const getGitProfile = () =>{
 return{
    type:GET_PROFILE
 }
}

export const getgitProfileSuccess = (profile) => ({
   type: GET_PROFILE_SUCCESS,
   payload: profile,
 })
 
 export const getProfileFailure = () => ({
   type: GET_PROFILE_FAILURE,
 })


 /*
 Redux Thunk is a middleware that lets you call action creators that return a function instead of an action object.
  That function receives the store’s dispatch method, which is then used to dispatch regular 
  synchronous actions inside the function’s body once the asynchronous operations have been completed.
 */
  export function getProfileAction() {
   return async (dispatch) => {
     dispatch(getGitProfile())
     try{
       
      // this doesn't wrok. 
      // const { loading, error, data } = useQuery(GET_USERS)
       dispatch(getgitProfileSuccess(data))
     } catch (error) {
       dispatch(getProfileFailure())
     }
   }
 }

 export default getProfileAction