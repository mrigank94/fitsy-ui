import {
  Alert,
  AlertIcon,
  AlertTitle,
  Box,
  Center,
  Heading,
  Spinner,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchHospital } from "../Redux/slice/hospital";

const Hospital = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { data, isLoading, isError } = useSelector(
    (state) => state.hospital.hospitalInfo
  );

  useEffect(() => {
    dispatch(fetchHospital(id));
  }, []);

  if (isLoading) {
    return (
      <Center height="100vh">
        <Spinner />
      </Center>
    );
  }

  if (isError) {
    return (
      <Alert status="error" variant={"top-accent"}>
        <AlertIcon />
        <AlertTitle>Failed to fetch hospital data!</AlertTitle>
      </Alert>
    );
  }

  return (
    <Box m={8}>
      <Box m={4}>
        <Heading size="md">Name</Heading>
        {data.name}
      </Box>

      <Box m={4}>
        <Heading size="md">Description</Heading>
        {data.description}
      </Box>

      <Box m={4}>
        <Heading size="md">Address</Heading>
        {data.address}
      </Box>

      <Box m={4}>
        <Heading size="md">Number of beds</Heading>
        {data.numOfBeds}
      </Box>

      <Box m={4}>
        <Heading size="md">Contact Number</Heading>
        {data.contactNumber}
      </Box>
    </Box>
  );
};

export default Hospital;
