import React from 'react';
import { Box, Grid, GridItem, Text } from '@chakra-ui/react';
// import AttendeeList from '../components/AttendeeList';
// import EventList from '../components/EventList';
import FeedbackForm from '../components/FeedbackForm';
// import TicketList from '../components/TicketList';
// import UserList from '../components/UserList';

const Dashboard = () => {
  return (
    <Box p={4}>
      <Text fontSize="2xl" mb={6}>Event Management Dashboard</Text>
      <Grid templateColumns="repeat(2, 1fr)" gap={6}>
        
        <GridItem>
          <FeedbackForm />
        </GridItem> 
      </Grid>
    </Box>
  );
};

export default Dashboard;
