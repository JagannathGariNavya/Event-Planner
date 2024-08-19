import React, { useState } from 'react';
import { Box, Text, Textarea, Button, Stack, Alert, AlertIcon } from '@chakra-ui/react';
import axios from 'axios';

const FeedbackForm = ({ eventId }) => {
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(5);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const submitFeedback = async () => {
    console.log("Submitting feedback for event ID:", eventId); // Debugging: Check if eventId is present
    setIsSubmitting(true);
    setError(null);
    setSuccess(null);

    // try {
    //   await axios.post(`http://localhost:8080/api/events/${eventId}/feedback`, { feedback, rating }, { withCredentials: true });
    //   setSuccess('Thank you for your feedback!');
    //   setFeedback('');
    // } catch (err) {
    //   setError('Thank you for your feedback!');
    // } finally {
    //   setIsSubmitting(true);
    // }
  };

  return (
    <Box p={4} borderWidth={1} borderRadius="md" boxShadow="md">
      <Text fontSize="xl" mb={4}>Submit Feedback</Text>
      <Stack spacing={4}>
        <Textarea
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          placeholder="Leave your feedback"
          rows={5}
        />
        <Button
          colorScheme="red"
          onClick={submitFeedback}
          isLoading={isSubmitting}
          loadingText="Submitting"
        >
          Submit
        </Button>
        {success && (
          <Alert status="success">
            <AlertIcon />
            {success}
          </Alert>
        )}
        {error && (
          <Alert status="error">
            <AlertIcon />
            {error}
          </Alert>
        )}
      </Stack>
    </Box>
  );
};

export default FeedbackForm;
