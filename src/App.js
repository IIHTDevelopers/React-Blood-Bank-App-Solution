import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DonorForm from './components/DonorForm';
import DonorList from './components/DonorList';

function App() {
  const [donors, setDonors] = useState([]);
  const [editDonor, setEditDonor] = useState(null);

  useEffect(() => {
    const fetchDonors = async () => {
      try {
        const response = await axios.get('http://localhost:4000/donors');
        setDonors(response.data);
      } catch (error) {
        console.error('Error fetching donors:', error);
      }
    };
    fetchDonors();
  }, []);

  const addDonor = async (donor) => {
    try {
      const addedDonor = await axios.post('http://localhost:4000/donors', donor);
      setDonors([...donors, addedDonor.data]);
    } catch (error) {
      console.error('Error adding donor:', error);
    }
  };

  const deleteDonor = async (donorId) => {
    try {
      await axios.delete(`http://localhost:4000/donors/${donorId}`);
      setDonors(donors.filter((donor) => donor.id !== donorId));
    } catch (error) {
      console.error('Error deleting donor:', error);
    }
  };

  const updateDonor = async (donor) => {
    try {
      await axios.put(`http://localhost:4000/donors/${donor.id}`, donor);
      setDonors(
        donors.map((d) => (d.id === donor.id ? { ...d, ...donor } : d))
      );
      setEditDonor(null);
    } catch (error) {
      console.error('Error updating donor:', error);
    }
  };

  return (
    <div>
      <h2>Welcome to your Blood Bank</h2>
      <h2>Donor Form</h2>
      <DonorForm addDonor={addDonor} editDonor={editDonor} updateDonor={updateDonor} />
      <h2>Donor List</h2>
      <DonorList
        donors={donors}
        deleteDonor={deleteDonor}
        setEditDonor={setEditDonor}
      />
    </div>
  );
}

export default App;
