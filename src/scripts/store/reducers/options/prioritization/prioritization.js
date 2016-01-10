
export default function prioritization(
  state = `HIGHEST_APR`,
  action
) {

  switch (action.type) {

    case `setPrioritizationMethod`: {

      return action.method
    }

    default:
      return state
  }
}
