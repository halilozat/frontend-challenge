export const initialState = {
  links: []
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case 'ADD_LINK':
      return {
        ...state,
        links: [action.payload, ...state.links],
      };
    case 'REMOVE_LINK':
      return {
        ...state,
        links: [...state.links].filter((link) => link.id !== action.payload),
      };

    default:
      return state;
  }
};

export default reducer;