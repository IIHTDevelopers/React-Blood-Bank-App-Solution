import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';

jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useEffect: jest.fn(),
}));

describe('boundary', () => {
    test('AppComponent boundary renders without crashing', () => {
        render(<App />);
    });

    test('AppComponent boundary has "Welcome to your Blood Bank" h2', () => {
        render(<App />);
        expect(screen.queryByText('Welcome to your Blood Bank')).toBeInTheDocument();
    });

    test('AppComponent boundary has "Donor Form" h2', () => {
        render(<App />);
        expect(screen.queryByText('Donor Form')).toBeInTheDocument();
    });

    test('AppComponent boundary has "Donor List" h2', () => {
        render(<App />);
        expect(screen.queryByText('Donor List')).toBeInTheDocument();
    });
});
