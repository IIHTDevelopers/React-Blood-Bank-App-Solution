import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DonorForm from '../components/DonorForm';

const addDonorMock = jest.fn();
const updateDonorMock = jest.fn();

describe('boundary', () => {
    test('DonorFormComponent boundary it is rendered', () => {
        render(<DonorForm addDonor={addDonorMock} />);
        expect(screen.getByRole('heading')).toBeTruthy();
    });

    test('DonorFormComponent boundary it has "Add a Donor" h2', () => {
        render(<DonorForm addDonor={addDonorMock} />);
        const h2Element = screen.getByRole('heading');
        expect(h2Element.textContent).toBe('Add a Donor');
    });

    test('DonorFormComponent boundary it has "Edit Donor" h2 when in edit mode', () => {
        render(<DonorForm editDonor={{ name: 'Edit Donor' }} updateDonor={updateDonorMock} />);
        const h2Element = screen.getByRole('heading');
        expect(h2Element.textContent).toBe('Edit Donor');
    });

    test('DonorFormComponent boundary it has name input field', () => {
        render(<DonorForm addDonor={addDonorMock} />);
        const nameInput = screen.getByLabelText('Name:');
        expect(nameInput).toBeTruthy();
    });

    test('DonorFormComponent boundary it has dateOfBirth input field', () => {
        render(<DonorForm addDonor={addDonorMock} />);
        const dateOfBirthInput = screen.getByLabelText('Date of Birth:');
        expect(dateOfBirthInput).toBeTruthy();
    });

    test('DonorFormComponent boundary it has address input field', () => {
        render(<DonorForm addDonor={addDonorMock} />);
        const addressInput = screen.getByLabelText('Address:');
        expect(addressInput).toBeTruthy();
    });

    test('DonorFormComponent boundary it has city input field', () => {
        render(<DonorForm addDonor={addDonorMock} />);
        const cityInput = screen.getByLabelText('City:');
        expect(cityInput).toBeTruthy();
    });

    test('DonorFormComponent boundary it has state input field', () => {
        render(<DonorForm addDonor={addDonorMock} />);
        const stateInput = screen.getByLabelText('State:');
        expect(stateInput).toBeTruthy();
    });

    test('DonorFormComponent boundary it has mobile input field', () => {
        render(<DonorForm addDonor={addDonorMock} />);
        const mobileInput = screen.getByLabelText('Mobile:');
        expect(mobileInput).toBeTruthy();
    });

    test('DonorFormComponent boundary it has bloodGroup input field', () => {
        render(<DonorForm addDonor={addDonorMock} />);
        const bloodGroupInput = screen.getByLabelText('Blood Group:');
        expect(bloodGroupInput).toBeTruthy();
    });

    test('DonorFormComponent boundary it has lastDonatedDate input field', () => {
        render(<DonorForm addDonor={addDonorMock} />);
        const lastDonatedDateInput = screen.getByLabelText('Last Donated Date:');
        expect(lastDonatedDateInput).toBeTruthy();
    });

    test('DonorFormComponent boundary it has an "Add Donor" button', () => {
        render(<DonorForm addDonor={addDonorMock} />);
        const addButton = screen.getByRole('button', { name: 'Add Donor' });
        expect(addButton).toBeTruthy();
    });

    test('DonorFormComponent boundary it has an "Update Donor" button when in edit mode', () => {
        render(<DonorForm editDonor={{ name: 'Edit Donor' }} updateDonor={updateDonorMock} />);
        const updateButton = screen.getByRole('button', { name: 'Update Donor' });
        expect(updateButton).toBeTruthy();
    });
});
