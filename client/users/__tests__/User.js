/* eslint-env node, jest */
import React from 'react'
import User from '../User'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

test('render user component', function () {
  var component = shallow(<User name='jc' phone='1234567' website='http://www.sven.com' />)
  var tree = shallowToJson(component)
  expect(tree).toMatchSnapshot()
})
