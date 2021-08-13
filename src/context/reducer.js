export const initialState = {
  links: [],
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
    // case 'UPDATE_LINK':
    //   return {
    //     ...state,
    //     links: state.links.map((link) => {
    //       if (link.id !== action.payload.linkId) {
    //         return link;
    //       }

    //       return {
    //         ...link,
    //         content: action.payload.newValue,
    //       };
    //     }),
    //   };
    
    default:
      return state;
  }
};

export default reducer;