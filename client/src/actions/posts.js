import * as api from '../api';  

// Action Creators
export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts(); // Fetch posts from the API

        dispatch({ type: 'FETCH_ALL', payload: data }); // Dispatch action to update state with fetched posts
    } catch (error) {
        console.log(error.message); // Log any errors that occur during the fetch
    }
}
