export const userAction = {
    setCurrentUser: (user) => {
        const success = (data) => {
            return { type: 'SET_CURRENT_USER', payload: data }
        }

        return dispatch => {
                dispatch(success(user))
        }
    }
}