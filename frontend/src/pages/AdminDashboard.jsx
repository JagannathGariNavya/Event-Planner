import React, { useState, useEffect } from 'react';
import { Box, Button, VStack, Text, Heading, useToast } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Sidebar = () => {
  return (
    <Box bg="black" color="white" w="200px" h="100vh" p="5">
      <VStack spacing="4" align="stretch">
        <Button as={Link} to="/create-event" colorScheme="red">
          Create Event
        </Button>
        <Button as={Link} to="/my-events" colorScheme="red">
          My Events
        </Button>
        {/* <Button as={Link} to="/analytics" colorScheme="red">
          Event Analytics
        </Button> */}
      </VStack>
    </Box>
  );
};

const AdminDashboard = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const toast = useToast();

  useEffect(() => {
    const checkAdminStatus = async () => {
      try {
        const response = await axios.get('https://event-planner-cxfc.onrender.com/api/auth/check-admin', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        setIsAdmin(response.data.isAdmin);
      } catch (error) {
        console.error('Error checking admin status:', error);
      }
    };

    checkAdminStatus();
  }, []);

  const requestAdminAccess = async () => {
    try {
      const response = await axios.post(
        'https://event-planner-cxfc.onrender.com/api/auth/request-admin-access',
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );

      if (response.data.success) {
        setIsAdmin(true);
        toast({
          title: 'Access Granted',
          description: 'You are now an admin and can create events.',
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Could not request admin access. Please try again.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Box display="flex">
      <Sidebar />
      <Box flex="1" p="6">
        <Heading color="red.500">Welcome to Admin Dashboard</Heading>
        <Box
          mt="8"
          p="6"
          borderWidth="1px"
          borderRadius="lg"
          background="linear-gradient(135deg, #000000, #d32f2f)"
          color="white"
        >
          <Heading size="md" mb="4" color="red.500">
            Request Admin Access
          </Heading>
          <Text mb="4">
            By clicking the button below, you will request admin access. Once granted, you'll have the ability to create events.
          </Text>
          {!isAdmin && (
            <Button colorScheme="red" variant="solid" onClick={requestAdminAccess}>
              Request Admin Access
            </Button>
          )}
          {isAdmin && (
            <Text color="red.500" fontWeight="bold">
              You are now an admin!
            </Text>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default AdminDashboard;
