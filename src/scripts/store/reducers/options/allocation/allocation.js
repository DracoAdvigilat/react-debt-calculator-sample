
export default function allocation(
  state = `PRIORITY_FIRST`,
  action
) {

  switch (action.type) {

    case `setAllocationMethod`: {

      return action.method
    }

    default:
      return state
  }
}
