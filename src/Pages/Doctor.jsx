import {
  Alert,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  Center,
  Heading,
  Spinner,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { fetchDoctor } from "../Redux/slice/doctor";

const Doctor = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { data, isLoading, isError } = useSelector(
    (state) => state.doctor.doctorInfo
  );

  console.log(data, isLoading, isError);

  useEffect(() => {
    dispatch(fetchDoctor(id));
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
        <AlertTitle>Failed to fetch doctor data!</AlertTitle>
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
        <Heading size="md">Email</Heading>
        {data.email}
      </Box>

      <Box m={4}>
        <Heading size="md">Description</Heading>
        {data.description}
      </Box>

      <Box m={4}>
        <Heading size="md">Experience</Heading>
        {data.experience}
      </Box>

      <Box m={4}>
        <Heading size="md">Department</Heading>
        {data.doctorType}
      </Box>

      <Box m={4}>
        <Heading size="md">Gender</Heading>
        {data.gender}
      </Box>

      <Box m={4}>
        <Heading size="md">Visiting hospitals</Heading>
        {data?.hospitals?.map((hospital) => (
          <Box>
            <Link key={hospital._id} to={`/hospitals/${hospital._id}`}>
              <Button variant={"link"} colorScheme="green">
                {hospital.name}
              </Button>
            </Link>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Doctor;
