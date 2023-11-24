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
import { fetchMedicine } from "../Redux/slice/medicine";

const Medicine = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { data, isLoading, isError } = useSelector(
    (state) => state.medicine.medicineInfo
  );

  useEffect(() => {
    dispatch(fetchMedicine(id));
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
        <AlertTitle>Failed to fetch medicine data!</AlertTitle>
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
        <Heading size="md">Best Before</Heading>
        {data.bestBefore} years
      </Box>

      <Box m={4}>
        <Heading size="md">Manufacturer</Heading>
        {data.manufacturer}
      </Box>

      <Box m={4}>
        <Heading size="md">Manufacturer Address</Heading>
        {data.manufacturerAddress}
      </Box>

      <Box m={4}>
        <Heading size="md">Price</Heading>
        {data.price}
      </Box>

      <Box m={4}>
        <Heading size="md">Dosage</Heading>
        {data.dosage}
      </Box>

      <Box m={4}>
        <Heading size="md">Side Effects</Heading>
        {data?.sideEffects?.map((sideEffect) => (
          <li>{sideEffect}</li>
        ))}
      </Box>
    </Box>
  );
};

export default Medicine;
