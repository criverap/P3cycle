import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme'
import Article from './Article';

Enzyme.configure({ adapter: new Adapter() });

it('render component', () => {
  const wrapper = shallow(<Article />)

  expect(wrapper).toBeDefined()
})

it('contains an ArticleTitle component', () => {
  const wrapper = shallow(<Article />)

  expect(wrapper.find('ArticleTitle').exists()).toBeTruthy()
})