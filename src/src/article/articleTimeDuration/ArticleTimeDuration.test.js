import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme'
import ArticleTimeDuration from './ArticleTimeDuration';

Enzyme.configure({ adapter: new Adapter() });

it('render component', () => {
    const wrapper = shallow(<ArticleTimeDuration />)

    expect(wrapper).toBeDefined()
})
