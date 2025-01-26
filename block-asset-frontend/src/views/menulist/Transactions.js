import React from 'react';
import PageContainer from 'src/components/container/PageContainer';
import PatientSummary from '../dashboard/components/PatientSummary';

const Transactions = () => {
    return (
        <PageContainer title="Transaction page" description="All the transaction done by the user">
            <PatientSummary />
        </PageContainer>
    );
};

export default Transactions;
