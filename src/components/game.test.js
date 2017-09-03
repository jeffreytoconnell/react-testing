import React from 'react';
import {shallow} from 'enzyme';

import Game from './game';

describe('<Game />', () => {
    it('Should not crash', () => {
        shallow(<Game />);
    });

    it('Guess on its own', () => {
        const wrapper = shallow(<Game />);
        wrapper.setState({
            correctAnswer: 10
        }); // END SETSTATE

        wrapper.instance().guess(100);
        expect(wrapper.state('feedback')).toEqual('You\'re Ice Cold...');

        wrapper.instance().guess(15);
        expect(wrapper.state('feedback')).toEqual('You\'re Hot!');
    });

    it('List out guesses', () => {
        const wrapper = shallow(<Game />);
        wrapper.instance().guess(20);
        expect(wrapper.state('guesses')).toEqual([20]);
    })
})
