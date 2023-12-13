import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import DonorList from '../components/DonorList';

const donors = [
    { id: 1, name: 'Donor 1', /* other donor information */ },
    { id: 2, name: 'Donor 2', /* other donor information */ },
];

const deleteDonor = jest.fn();
const setEditDonor = jest.fn();

describe('boundary', () => {
    beforeEach(() => {
        render(
            <DonorList
                donors={donors}
                deleteDonor={deleteDonor}
                setEditDonor={setEditDonor}
            />
        );
    });

    test('DonorListComponent boundary it has a "Filter by Name" text field', () => {
        const nameInput = screen.getByLabelText('Filter by Name:');
        expect(nameInput).toBeTruthy();
    });

    test('DonorListComponent boundary it displays the Name of a donor after assigning values', async () => {
        const filterInput = screen.getByLabelText('Filter by Name:');
        fireEvent.change(filterInput, { target: { value: 'Donor 1' } });
        const strongElement = await screen.findByText('Name:');
        expect(strongElement).toBeTruthy();
    });

    // Add similar tests for displaying other donor information

    test('DonorListComponent boundary it displays the "Edit" button to edit the donor', async () => {
        const editButtons = screen.getAllByText('Edit');
        expect(editButtons).toBeTruthy();
    });

    test('DonorListComponent boundary it calls deleteDonor when "Delete" button is clicked', () => {
        const deleteButtons = screen.getAllByText('Delete');
        fireEvent.click(deleteButtons[0]);
        expect(deleteDonor).toHaveBeenCalledWith(donors[0].id);
    });

    test('DonorListComponent boundary it removes the donor after clicking the "Delete" button', () => {
        const deleteButton = screen.getAllByText('Delete')[0];
        fireEvent.click(deleteButton);
        expect(screen.queryByText('Name: Donor 1')).toBeNull();
        // Check for other donor information if displayed
    });

    test('DonorListComponent boundary it displays "No donors found" when there are no donors', async () => {
        render(
            <DonorList donors={[]} deleteDonor={deleteDonor} setEditDonor={setEditDonor} />
        );
        const noDonorsMessage = await screen.findByText('No donors found');
        expect(noDonorsMessage).toBeTruthy();
    });
});
