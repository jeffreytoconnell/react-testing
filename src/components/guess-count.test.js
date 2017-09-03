import React from 'react';
import {shallow} from 'enzyme';

import GuessCount from './guess-count';

describe('<GuessCount />', () => {
    it('Does Not Crash', () => {
        shallow(<GuessCount/>);
    });

    it('Renders the correct guess count', () => {
        const value = 9;
        const wrapper = shallow(<GuessCount count={value} />);
        expect(wrapper.text()).toEqual(`Guess #${value}!`);
    })
})