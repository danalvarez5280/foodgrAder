export const foodFetch = (state = [], action) => {
  switch (action.type) {
    case 'FOOD_FETCH_SUCCESS':
      return action.data

    default:
      return state
  }
}
