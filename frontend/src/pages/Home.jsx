import React from 'react';
import { Box, Heading, Text, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Home = () => {
  const events = [
    { id: 1, name: 'Event One', date: '2024-08-17', location: 'Location One', description: 'Description One' },
    // Add more events here
  ];

  const handleRegister = (event) => {
    // Handle registration logic here
  };

  return (
    <Box p={4} bg="white" color="red.500">
      {/* <Heading mb={4}>Upcoming Events</Heading>
      <Box mb={8}>
        {events.map(event => (
          <EventCard key={event.id} event={event} onRegister={handleRegister} />
        ))}
      </Box> */}
      <Box
        p={6}
        // bg="black"
        borderRadius="md"
        boxShadow="md"
        textAlign="center"
        border="1px"
        borderColor="red.500"
      >
        <Heading size="lg" mb={4} color="red.500">Welcome to the Event Planner</Heading>
        <Text mb={4}>
        Dive into thrilling events happening close by. Whether it's concerts or workshops, discover the ideal event that suits your passions and sign up now        </Text>
        <Button
          colorScheme="red"
          variant="solid"
          as={Link}
          to="/login"
        >
          Participate Now
        </Button>
      </Box>
    </Box>
  );
};

export default Home;
