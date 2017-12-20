import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme'
import ArticleTitle from './ArticleTitle';

Enzyme.configure({ adapter: new Adapter() });

it('render component', () => {
    const wrapper = shallow(<ArticleTitle />)

    expect(wrapper).toBeDefined()
})

it('contains a header element', () => {
    const wrapper = shallow(<ArticleTitle />)

    expect(wrapper.find('header').exists()).toBeTruthy()
})