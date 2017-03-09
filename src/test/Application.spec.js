import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';

import App from '../App';
import Index from '../index/Index';

describe('<App/>', function(){

  it('should render an Index component', function() {
    const wrapper = mount(<App/>);
    expect(wrapper.find(<Index/>)).to.have.length(1);
  })
})
