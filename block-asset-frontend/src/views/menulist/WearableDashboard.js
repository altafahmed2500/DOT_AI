import React, { useEffect, useState } from 'react';
import {
    Card,
    CardContent,
    Typography,
    Grid,
    Box,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
} from '@mui/material';
import axios from 'axios';

const WearableDashboard = () => {
    const [data, setData] = useState([]);
    const [summary, setSummary] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/wearable-data');
                setData(response.data.data); // DataFrame data
                setSummary(response.data.summary); // AI-generated summary
            } catch (err) {
                setError(err.message || 'Failed to fetch data.');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <Typography>Loading wearable data...</Typography>;
    }

    if (error) {
        return <Typography color="error">{error}</Typography>;
    }

    return (
        <Grid container spacing={3}>
            <Grid item xs={12} md={8}>
                <Typography variant="h5" gutterBottom>
                    Wearable Data
                </Typography>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                {Object.keys(data[0]).map((key) => (
                                    <TableCell key={key}>{key}</TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((row, index) => (
                                <TableRow key={index}>
                                    {Object.values(row).map((value, idx) => (
                                        <TableCell key={idx}>{value}</TableCell>
                                    ))}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
            <Grid item xs={12} md={4}>
                <Card>
                    <CardContent>
                        <Typography variant="h5" gutterBottom>
                            Summary
                        </Typography>
                        <ul style={{ paddingLeft: '1.5rem' }}>
                            {summary
                                .split('- ') // Split the summary into bullet points
                                .filter((line) => line.trim() !== '') // Remove any empty lines
                                .map((line, index) => (
                                    <li key={index} style={{ marginBottom: '0.5rem' }}>
                                        {line.trim()}
                                    </li>
                                ))}
                        </ul>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
};

export default WearableDashboard;
