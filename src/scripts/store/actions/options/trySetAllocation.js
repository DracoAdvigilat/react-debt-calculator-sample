
export default function trySetAllocationThunk(method) {

  return function trySetAllocation(dispatch) {

    switch (method) {

      case `EVEN_SPLIT`:
      case `PRIORITY_FIRST`:
      case `PROPORTIONAL_SPLIT`:
        break

      default:
        return
    }

    dispatch({ 'type': `setAllocationMethod`, method })
  }
}
