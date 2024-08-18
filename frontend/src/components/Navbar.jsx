import React, { useState } from 'react';
import {
  Box,
  Flex,
  Button,
  Heading,
  Input,
  IconButton
} from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineSearch, AiOutlineHome, AiOutlineLogin } from 'react-icons/ai';
import { FaRegRegistered } from 'react-icons/fa';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
      setSearchQuery(''); // Clear the search input after navigating
      setShowSearch(false); // Hide the search input after search
    }
  };

  return (
    <Flex as="nav" p={4} bg="black" color="red.500" align="center" justify="space-between">
      <Heading size="lg" color="red.500">Event Planner</Heading>
      <Box>
        <Button as={Link} to="/" mr={4} leftIcon={<AiOutlineHome />} colorScheme="red" variant="ghost">
          Home
        </Button>
       
        <Button as={Link} to="/register" leftIcon={<FaRegRegistered />} colorScheme="red" variant="ghost">
          Register
        </Button>
        <Button as={Link} to="/login" mr={4} leftIcon={<AiOutlineLogin />} colorScheme="red" variant="ghost">
          Login
        </Button>
        <Box
          position="relative"
          display="inline-block"
        >
          <IconButton
            onClick={() => setShowSearch(!showSearch)}
            colorScheme="red"
            variant="outline"
            icon={<AiOutlineSearch />}
            aria-label="Search"
            ml={4}
          />
          {showSearch && (
            <Box
              position="absolute"
              top="100%"
              right="0"
              mt={2}
              bg="black"
              p={4}
              borderRadius="md"
              boxShadow="md"
              width="300px"
            >
              <Input
                placeholder="Search "
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                focusBorderColor="red.500"
                mb={2}
              />
              <Button colorScheme="red" onClick={handleSearch}>
                Search
              </Button>
              {/* <Button as={Link} to="/feed" ml={4}  colorScheme="red">Feedback</Button> */}
            </Box>
          )}
        </Box>
        <Button as={Link} to="/feed" ml={4}  colorScheme="red"  variant="ghost">Feedback</Button>

      </Box>
    </Flex>
  );
};

export default Navbar;
