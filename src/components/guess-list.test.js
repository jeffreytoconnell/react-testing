import React from 'react';
import {shallow} from 'enzyme';
import GuessList from './guess-list';

describe('<GuessList />', () => {
    it('Does not crash', ()  => {
        shallow(<GuessList guesses={[]} />);
    });
})