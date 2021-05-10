import { useEffect } from 'react'
import { useSelector } from 'react-redux'


const useAuth = props => {
    const { currentUser } = useSelector( state => state.user )

    useEffect(() => {
        if(currentUser) {
            props.history.push('/')
        }
    }, [currentUser])

    return currentUser
}

export default useAuth