let clicksCount = {}

export default function clicksCountReducer(state=clicksCount, action) {
  switch(action.type) {
    case "CLICK":
      let temp = {
        ...state
      }

      if (!(action.carId in temp)) {
        temp[action.carId] = 0
      }
      temp[action.carId] += 1

      console.log(temp)
      return temp;
    default:
      return state;
  }
}
