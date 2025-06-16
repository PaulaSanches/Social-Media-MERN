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

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post); // Create a new post via the API

        dispatch({ type: 'CREATE', payload: data }); // Dispatch action to update state with the new post
    } catch (error) {
        console.log(error.message); // Log any errors that occur during the creation
    }
}

export const updatePost = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, post); // Update the post via the API

        dispatch({ type: 'UPDATE', payload: data }); // Dispatch action to update state with the updated post
    } catch (error) {
        console.log(error.message); // Log any errors that occur during the update
    }
}

export const deletePost = (id) => async (dispatch) => { 
    try {
        await api.deletePost(id); // Delete the post via the API

        dispatch({ type: 'DELETE', payload: id }); // Dispatch action to update state by removing the deleted post
    } catch (error) {
        console.log(error.message); // Log any errors that occur during the deletion
    }
}

export const likePost = (id) => async (dispatch) => {
    try {
        const { data } = await api.likePost(id); // Like the post via the API

        dispatch({ type: 'LIKE', payload: data }); // Dispatch action to update state with the liked post
    } catch (error) {
        console.log(error.message); // Log any errors that occur during the like action
    }
}   