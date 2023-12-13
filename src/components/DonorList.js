import React, { useState } from 'react';

const DonorList = ({ donors, deleteDonor, setEditDonor }) => {
    const [filters, setFilters] = useState({ name: '' });

    const filteredDonors = donors.filter((donor) => {
        return donor.name.toLowerCase().includes(filters.name.toLowerCase());
    });

    return (
        <div>
            <div>
                <label htmlFor="name">
                    Filter by Name:
                    <input
                        id="name"
                        type="text"
                        value={filters.name}
                        onChange={(e) => setFilters({ ...filters, name: e.target.value })}
                    />
                </label>
            </div>
            <ul>
                {filteredDonors.length > 0 ? (
                    filteredDonors.map((donor) => (
                        <li key={donor.id}>
                            <strong>Name:</strong> {donor.name}
                            {/* Display other donor information */}
                            <button onClick={() => setEditDonor(donor)}>Edit</button>
                            <button onClick={() => deleteDonor(donor.id)}>Delete</button>
                        </li>
                    ))
                ) : (
                    <li>No donors found</li>
                )}
            </ul>
        </div>
    );
};

export default DonorList;
