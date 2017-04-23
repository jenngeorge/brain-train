## React-router 4
- preferring <Redirect to=""/> over using context, or finding a way to replicate hashHistory.push from react-router 3

## Normalized state shape
- built state shape based on https://github.com/reactjs/redux/blob/master/docs/recipes/reducers/NormalizingStateShape.md
- no more SubjectDetail -- keeping a replica of the db in the state (with foreign keys)

## Denormalized props
- suggestion: denormalize data with selectors in mapStateToProps

## Moving api requests to React components
- because I'm handling redirecting in React components with react-router 4's `Redirect` and avoiding fetching extra / repeated info from the db, my React forms need to know the id of the item they just created. Thus, I move api requests like `createSubject` into the React form instead of burying them in an action. Before dispatching the `receiveSubject` action that hits my reducer and updates the state to include the new subject, I grab the newly created object's id and stick it in the form's internal state. This allows me to use Redirect in the form's render function to redirect to the new object's show view.


## Look & Feel

http://mcg.mbitson.com/#!?mcgpalette0=%231693a5&mcgpalette1=%23ffb900&mcgpalette2=%23e85205&mcgpalette3=%233a5654&themename=study
