/* eslint-env node, jest */
import postReducer, {DEFAULT_STATE} from '../post-redux'

test('render post component', function () {
  var initialState = postReducer(DEFAULT_STATE, {type: 'TEST_ACTION'})
  expect(initialState).toMatchObject({
    
  })
})
