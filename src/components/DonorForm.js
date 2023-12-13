import React, { useState, useEffect } from 'react';

const DonorForm = ({ addDonor, editDonor, updateDonor }) => {
    const initialDonorState = {
        id: '',
        name: '',
        dateOfBirth: '',
        address: '',
        city: '',
        state: '',
        mobile: '',
        bloodGroup: '',
        lastDonatedDate: '',
    };

    const [donor, setDonor] = useState(initialDonorState);

    useEffect(() => {
        if (editDonor) {
            setDonor({ ...editDonor });
        } else {
            setDonor({ ...initialDonorState });
        }
    }, [editDonor]);

    const isEditForm = !!editDonor;

    const isFormIncomplete = !donor.name || !donor.dateOfBirth || !donor.address || !donor.city || !donor.state || !donor.mobile || !donor.bloodGroup || !donor.lastDonatedDate;

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isFormIncomplete) {
            alert('Please fill in all fields.');
            return;
        }
        if (isEditForm) {
            updateDonor(donor);
        } else {
            addDonor(donor);
        }
        setDonor({ ...initialDonorState });
    };

    return (
        <div>
            <h2>{isEditForm ? 'Edit Donor' : 'Add a Donor'}</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">
                    Name:
                    <input
                        id="name"
                        type="text"
                        value={donor.name}
                        onChange={(e) => setDonor({ ...donor, name: e.target.value })}
                        required
                    />
                </label>
                <label htmlFor="dateOfBirth">
                    Date of Birth:
                    <input
                        id="dateOfBirth"
                        type="date"
                        value={donor.dateOfBirth}
                        onChange={(e) => setDonor({ ...donor, dateOfBirth: e.target.value })}
                        required
                    />
                </label>
                <label htmlFor="address">
                    Address:
                    <input
                        id="address"
                        type="text"
                        value={donor.address}
                        onChange={(e) => setDonor({ ...donor, address: e.target.value })}
                        required
                    />
                </label>
                <label htmlFor="city">
                    City:
                    <input
                        id="city"
                        type="text"
                        value={donor.city}
                        onChange={(e) => setDonor({ ...donor, city: e.target.value })}
                        required
                    />
                </label>
                <label htmlFor="state">
                    State:
                    <input
                        id="state"
                        type="text"
                        value={donor.state}
                        onChange={(e) => setDonor({ ...donor, state: e.target.value })}
                        required
                    />
                </label>
                <label htmlFor="mobile">
                    Mobile:
                    <input
                        id="mobile"
                        type="text"
                        value={donor.mobile}
                        onChange={(e) => setDonor({ ...donor, mobile: e.target.value })}
                        required
                    />
                </label>
                <label htmlFor="bloodGroup">
                    Blood Group:
                    <input
                        id="bloodGroup"
                        type="text"
                        value={donor.bloodGroup}
                        onChange={(e) => setDonor({ ...donor, bloodGroup: e.target.value })}
                        required
                    />
                </label>
                <label htmlFor="lastDonatedDate">
                    Last Donated Date:
                    <input
                        id="lastDonatedDate"
                        type="date"
                        value={donor.lastDonatedDate}
                        onChange={(e) => setDonor({ ...donor, lastDonatedDate: e.target.value })}
                        required
                    />
                </label>
                <button type="submit" disabled={isFormIncomplete}>
                    {isEditForm ? 'Update Donor' : 'Add Donor'}
                </button>
            </form>
        </div>
    );
};

export default DonorForm;
