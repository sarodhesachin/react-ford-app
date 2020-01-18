let clicksCount = {}

export default function clicksCountReducer(state=clicksCount, action) {

  let temp = { ...state }

  switch(action.type) {
    case "CLICK":
      if (!(action.carId in temp)) {
        temp[action.carId] = 0
      }
      temp[action.carId] += 1
      return temp;
    default:
      return state;
  }
}
