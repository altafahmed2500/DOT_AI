import React from 'react';
import { Grid, Box, Card, Typography, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import PageContainer from 'src/components/container/PageContainer';
import AuthRegister from './auth/AuthRegister';
import logo from 'src/assets/images/logos/DotAi.png';

const CustomLogo = () => (
  <Box
    sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      padding: '16px',
      position: 'relative',
    }}
  >
    {/* Logo Image */}
    <img
      src={logo}
      alt="DotAi"
      style={{
        height: '40px',
        marginRight: '8px', // Space between logo and text
      }}
    />

    <Box
      sx={{
        fontSize: '24px', // Font size
        fontWeight: '900', // Bold weight
        fontFamily: 'Serif', // Use serif font
        color: '#796878', // Adjust text color
      }}
    >
      Dot.ai
    </Box>
  </Box>
);

const Register2 = () => (
  <PageContainer title="Register" description="this is Register page">
    <Box
      sx={{
        position: 'relative',
        '&:before': {
          content: '""',
          background: 'radial-gradient(#d2f1df, #d3d7fa, #bad8f4)',
          backgroundSize: '400% 400%',
          animation: 'gradient 15s ease infinite',
          position: 'absolute',
          height: '100%',
          width: '100%',
          opacity: '0.3',
        },
      }}
    >
      <Grid container spacing={0} justifyContent="center" sx={{ height: '100vh' }}>
        <Grid
          item
          xs={12}
          sm={12}
          lg={4}
          xl={3}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Card elevation={9} sx={{ p: 4, zIndex: 1, width: '100%', maxWidth: '500px' }}>
            <Box display="flex" alignItems="center" justifyContent="center">
              {/* Replace Logo with CustomLogo */}
              <CustomLogo />
            </Box>
            <AuthRegister
              subtext={
                <Typography variant="subtitle1" textAlign="center" color="textSecondary" mb={1}>
                  A Decentralized report management system
                </Typography>
              }
              subtitle={
                <Stack direction="row" justifyContent="center" spacing={1} mt={3}>
                  <Typography color="textSecondary" variant="h6" fontWeight="400">
                    Already have an Account?
                  </Typography>
                  <Typography
                    component={Link}
                    to="/auth/login"
                    fontWeight="500"
                    sx={{
                      textDecoration: 'none',
                      color: 'primary.main',
                    }}
                  >
                    Sign In
                  </Typography>
                </Stack>
              }
            />
          </Card>
        </Grid>
      </Grid>
    </Box>
  </PageContainer>
);

export default Register2;
