import { DeleteIcon } from "@chakra-ui/icons";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  Center,
  Flex,
  Heading,
  IconButton,
  Spinner,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteSickness, fetchSicknesses } from "../Redux/slice/sicknesses";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { data, isLoading, isError } = useSelector(
    (state) => state.sickness.sicknessInfo
  );

  console.log(data, isLoading, isError);

  if (!localStorage.getItem("token")) {
    navigate("/auth");
  }

  useEffect(() => {
    dispatch(fetchSicknesses());
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
        <AlertTitle>Failed to fetch sickness data!</AlertTitle>
      </Alert>
    );
  }

  return (
    <Box m={8}>
      <Flex justifyContent={"end"}>
        <Button colorScheme={"green"}>Create Patient Record</Button>
      </Flex>
      <TableContainer>
        <Table variant="simple">
          <TableCaption placement="top" mb={5}>
            <Heading variant={"h5"}>Showing sickness data</Heading>
          </TableCaption>
          <Thead>
            <Tr>
              <Th>Patient Name</Th>
              <Th>Patient Email</Th>
              <Th>Diagnosis</Th>
              <Th>Doctor's name</Th>
              <Th>Hospital Name</Th>
              <Th>View Prescription</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((sickness) => (
              <Tr>
                <Td>{sickness.patient.name}</Td>
                <Td>{sickness.patient.email}</Td>
                <Td>{sickness.diagnosis}</Td>
                <Td>
                  <Button
                    variant={"link"}
                    onClick={() => navigate(`/doctors/${sickness.doctor._id}`)}
                  >
                    {sickness.doctor.name}
                  </Button>
                </Td>
                <Td>
                  <Button
                    variant={"link"}
                    onClick={() =>
                      navigate(`/hospitals/${sickness.hospital._id}`)
                    }
                  >
                    {sickness.hospital.name}
                  </Button>
                </Td>
                <Td>
                  <Button
                    variant={"link"}
                    onClick={() =>
                      navigate(`/prescriptions/${sickness.prescription._id}`)
                    }
                  >
                    View Prescription
                  </Button>
                </Td>
                <Td>
                  <IconButton>
                    <DeleteIcon
                      onClick={() => dispatch(deleteSickness(sickness._id))}
                    />
                  </IconButton>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Home;
