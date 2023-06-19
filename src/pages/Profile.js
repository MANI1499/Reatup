import { useContext } from 'react'
import { AppContext } from '../App'

export const Profile = (props) =>{
    const { username } = useContext(AppContext);

    return <div> Profile name is { username } </div>
}