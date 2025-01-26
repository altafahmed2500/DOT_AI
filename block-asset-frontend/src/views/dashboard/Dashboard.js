import React from 'react';
import { Grid, Box } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';

// components
import UsersAssetCount from './components/UsersAssetCount';
import YearlyBreakup from './components/TotalAssetCount';
import RecentTransactions from './components/RecentTransactions';
import ProductPerformance from './components/UserList';
import Blog from './components/Blog';
import MonthlyEarnings from './components/WearableSummary';
import AssetGrid from './components/Assetgrid';


const Dashboard = () => {
  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={12}>
            <UsersAssetCount />
          </Grid>
          <Grid item xs={12} lg={8}>
            <AssetGrid />
          </Grid>
          <Grid item xs={12} lg={4}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <YearlyBreakup />
              </Grid>
              <Grid item xs={12}>
                <MonthlyEarnings />
              </Grid>
            </Grid>
          </Grid>

        </Grid>
      </Box>
    </PageContainer >
  );
};

export default Dashboard;
