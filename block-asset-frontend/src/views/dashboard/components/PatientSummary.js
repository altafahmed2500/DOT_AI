import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DashboardCard from '../../../components/shared/DashboardCard';
import { Typography, Box, CircularProgress } from '@mui/material';

const PatientSummary = () => {
    const [patientSummary, setPatientSummary] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPatientSummary = async () => {
            try {
                const token = localStorage.getItem('access_token');
                if (!token) {
                    throw new Error('Access token is missing. Please log in again.');
                }

                const response = await axios.get(
                    'http://127.0.0.1:8000/api/file/patient/summary', // Replace with your actual API endpoint
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                setPatientSummary(response.data.patient_summary || 'No summary available.');
            } catch (err) {
                setError(err.response?.data?.message || err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPatientSummary();
    }, []);

    return (
        <DashboardCard title="Patient Summary">
            {loading ? (
                <Box display="flex" justifyContent="center" alignItems="center" minHeight="100px">
                    <CircularProgress />
                </Box>
            ) : error ? (
                <Typography color="error">{error}</Typography>
            ) : (
                <Box
                    sx={{
                        p: 2,
                        maxHeight: 'auto',
                        overflowY: 'auto',
                        '&::-webkit-scrollbar': { width: '8px' },
                        '&::-webkit-scrollbar-track': { background: 'transparent' },
                        '&::-webkit-scrollbar-thumb': {
                            background: 'rgba(0, 0, 0, 0.2)',
                            borderRadius: '4px',
                        },
                        '&::-webkit-scrollbar-thumb:hover': {
                            background: 'rgba(0, 0, 0, 0.3)',
                        },
                    }}
                >
                    <Typography>{patientSummary}</Typography>
                </Box>
            )}
        </DashboardCard>
    );
};

export default PatientSummary;
