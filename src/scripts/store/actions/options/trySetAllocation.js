
export default function trySetAllocation(method) {

  return function(dispatch, getState) {

    switch (method) {

      case `EVEN_SPLIT`:
      case `PRIORITY_FIRST`:
      case `PROPORTIONAL_SPLIT`:
        break

      default:
        return null
    }

    return { 'type': `setAllocationMethod`, method }
  }
}
