import React from 'react';
import renderer from 'react-test-renderer';

import Login from '../Screens/Login.js';
import Signup from '../Screens/Signup.js';
import Home from '../Screens/Home.js';
import ListePromo from '../Screens/ListePromo.js';


describe('renders correctly', () => {
    it('Login page', () => {
        const login = renderer.create(
            <Login />
        ).toJSON();
        expect(login).toMatchSnapshot();
    });
    it('Signup page', () => {
        const signup = renderer.create(
            <Signup />
        ).toJSON();
        expect(signup).toMatchSnapshot();
    });
    it('Home page', () => {
        const home = renderer.create(
            <Home />
        ).toJSON();
        expect(home).toMatchSnapshot();
    });
    it('Promo list page', () => {
        const listePromo = renderer.create(
            <ListePromo />
        ).toJSON();
        expect(listePromo).toMatchSnapshot();
    });
});
