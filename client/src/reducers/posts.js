const reducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_POST':
      return [...state, action.payload];
    case 'DELETE_POST':
      return state.filter((post) => post.id !== action.payload);
    case 'UPDATE_POST':
      return state.map((post) =>
        post.id === action.payload.id ? { ...post, ...action.payload } : post
      );
    default:
      return state;
  }
}