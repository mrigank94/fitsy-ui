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
import { fetchPrescription } from "../Redux/slice/prescription";

const Prescription = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { data, isLoading, isError } = useSelector(
    (state) => state.prescription.prescriptionInfo
  );

  useEffect(() => {
    dispatch(fetchPrescription(id));
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
        <AlertTitle>Failed to fetch prescription data!</AlertTitle>
      </Alert>
    );
  }

  return (
    <Box m={8}>
      <Box m={4}>
        <Heading size="md">Diagnostic tests</Heading>
        {data?.tests?.map((test) => (
          <li key={test}>{test}</li>
        ))}
      </Box>

      <Box m={4}>
        <Heading size="md">Medicines</Heading>
        {data?.medicines?.map((medicine) => (
          <Box>
            <Link key={medicine._id} to={`/medicines/${medicine._id}`}>
              <Button variant={"link"} colorScheme="green">
                {medicine.name}
              </Button>
            </Link>
          </Box>
        ))}
      </Box>

      <Box m={4}>
        <Heading size={"md"}>Doctor's fees</Heading>
        {data.doctorFees}
      </Box>

      <Box m={4}>
        <Heading size={"md"}>Medicines fees</Heading>
        {data.medicineFees}
      </Box>

      <Box m={4}>
        <Heading size={"md"}>Suggested duration</Heading>
        {data.duration} days
      </Box>
    </Box>
  );
};

export default Prescription;
