import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Chart from 'react-apexcharts';
import { useTheme } from '@mui/material/styles';
import { Grid, Stack, Typography, Avatar } from '@mui/material';
import { IconArrowUpLeft } from '@tabler/icons-react';

import DashboardCard from '../../../components/shared/DashboardCard';

const TotalAssetCount = () => {
  const [totalAssets, setTotalAssets] = useState(0);

  // Fetch total assets from API
  useEffect(() => {
    const fetchTotalAssets = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/assets/count');
        setTotalAssets(response.data.total_assets); // Assuming API returns { total_assets: number }
      } catch (error) {
        console.error('Error fetching total assets:', error);
      }
    };

    fetchTotalAssets();
  }, []);

  // chart color
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const primarylight = '#ecf2ff';
  const successlight = theme.palette.success.light;

  // // chart
  // const optionscolumnchart = {
  //   chart: {
  //     type: 'donut',
  //     fontFamily: "'Plus Jakarta Sans', sans-serif;",
  //     foreColor: '#adb0bb',
  //     toolbar: {
  //       show: false,
  //     },
  //     height: 155,
  //   },
  //   colors: [primary, primarylight, '#F9F9FD'],
  //   plotOptions: {
  //     pie: {
  //       startAngle: 0,
  //       endAngle: 360,
  //       donut: {
  //         size: '75%',
  //         background: 'transparent',
  //       },
  //     },
  //   },
  //   tooltip: {
  //     theme: theme.palette.mode === 'dark' ? 'dark' : 'light',
  //     fillSeriesColor: false,
  //   },
  //   stroke: {
  //     show: false,
  //   },
  //   dataLabels: {
  //     enabled: false,
  //   },
  //   legend: {
  //     show: false,
  //   },
  //   responsive: [
  //     {
  //       breakpoint: 991,
  //       options: {
  //         chart: {
  //           width: 120,
  //         },
  //       },
  //     },
  //   ],
  // };
  // const seriescolumnchart = [38, 40, 25];

  return (
    <DashboardCard title="Total Reports">
      <Grid container spacing={3}>
        {/* column */}
        <Grid item xs={7} sm={7}>
          <Typography variant="h3" fontWeight="700">
            {totalAssets}
          </Typography>
          <Stack spacing={3} mt={5} direction="row">
            <Stack direction="row" spacing={1} alignItems="center">
              <Avatar
                sx={{ width: 9, height: 9, bgcolor: primary, svg: { display: 'none' } }}
              ></Avatar>
              <Typography variant="subtitle2" color="textSecondary">
                2024
              </Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              <Avatar
                sx={{ width: 9, height: 9, bgcolor: primarylight, svg: { display: 'none' } }}
              ></Avatar>
              <Typography variant="subtitle2" color="textSecondary">
                2025
              </Typography>
            </Stack>
          </Stack>
        </Grid>
        {/* column */}
        <Grid item xs={5} sm={5}>
          {/* <Chart
            options={optionscolumnchart}
            series={seriescolumnchart}
            type="donut"
            height="150px"
          /> */}
        </Grid>
      </Grid>
    </DashboardCard>
  );
};

export default TotalAssetCount;
