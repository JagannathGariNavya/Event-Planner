import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Flex, Input, Spinner, Center, Alert, AlertIcon, Text } from '@chakra-ui/react';

const EventSearch = () => {
  const [events, setEvents] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://event-management-ngu0.onrender.com/api/events');
        setEvents(response.data);
      } catch (error) {
        setError('Error fetching data');
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Filter events based on user input
  const filteredEvents = events.filter(event =>
    event.name.toLowerCase().includes(query.toLowerCase()) ||
    event.date.toLowerCase().includes(query.toLowerCase()) ||
    event.location.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <Box p={5}>
      <Flex mb={5} justify="center">
        <Input
          type="text"
          placeholder="Search "
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          width="full"
          maxWidth="600px"
        />
      </Flex>

      {loading ? (
        <Center>
          <Spinner size="xl" />
        </Center>
      ) : error ? (
        <Alert status="error">
          <AlertIcon />
          {error}
        </Alert>
      ) : (
        <Flex flexWrap="wrap" gap={5} justify="center">
          {filteredEvents.length ? (
            filteredEvents.map(event => (
              <Box key={event._id} borderWidth="1px" borderRadius="lg" overflow="hidden" p={3} maxWidth="200px">
                <Box p={2}>
                  <Text fontWeight="bold">{event.name}</Text>
                  <Text>{new Date(event.date).toLocaleDateString()}</Text>
                  <Text>{event.location}</Text>
                </Box>
              </Box>
            ))
          ) : (
            <Text>No events found for "{query}".</Text>
          )}
        </Flex>
      )}
    </Box>
  );
};

export default EventSearch;
