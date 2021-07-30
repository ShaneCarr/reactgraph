import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import profileSelector from '../Redux/selectors/profileSelector'
import getprofileAction from '../Redux/Actions/getProfileAction'
import { connect } from 'react-redux'
//The useQuery hook provided by Apollo receives the GraphQL query and returns three states: the loading, the error, and the data.
//If the data are successfully fetched, we pass it to the User component. Otherwise we throw an error.
export const ProfilePage = ({ loading, profiles, hasErrors }) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getprofileAction())
      }, [dispatch])

    //   const selector = useSelector(profileSelector)
    //   let s = selector

   //const {profiles, loading, hasErrors} = useSelector(profileSelector)

  if (hasErrors) return <h1>Something went wrong!</h1>
  if (loading) return <h1>Loading...</h1>

  return (
    <main className="App">
      <h1>Github | Users</h1>
      {/* {profiles.users.map(user => (
        <User key={user.id} user={user} />
      ))} */}
    </main>
  )
}

/*
This presentational component will be used to display a user. It receives the data from the App component and displays it.
*/
const User = ({ user: { login, avatar_url } }) => (
    <div className="Card">
      <div>
        <img alt="avatar" className="Card--avatar" src={avatar_url} />
        <h1 className="Card--name">{login}</h1>
      </div>
      <a href={`https://github.com/${login}`} className="Card--link">
        See profile
      </a>
    </div>
  )

  const mapStateToProps = state => ({
    loading: '',//state.profiles.loading,
    profiles: state, //state.profiles.profiles,
    hasErrors: '',//state.profiles.hasErrors,
  })
  
  export default connect(mapStateToProps)(ProfilePage)
  