import {
  Alert,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  Heading,
  Input,
  VStack,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login, toggleForm, updateLoginFormValues } from "../Redux/slice/auth";

const Login = () => {
  const { loginFormValues, loginData } = useSelector((store) => store.auth);
  const navigate = useNavigate();
  const { isLoading, isError, data } = loginData;
  console.log(isError);
  const dispatch = useDispatch();

  if (data.accessToken) {
    localStorage.setItem("token", data.accessToken);
    navigate("/");
  }

  return (
    <>
      {isError && (
        <Alert status="error" variant={"top-accent"}>
          <AlertIcon />
          <AlertTitle>Failed to login!</AlertTitle>
        </Alert>
      )}
      <Center height={"90vh"}>
        <VStack borderWidth={"1px"} borderRadius="lg" padding={"24px"}>
          <Heading as="h3" size="lg" marginBottom={"24px"}>
            Login
          </Heading>
          <FormControl isRequired>
            <FormLabel>Username</FormLabel>
            <Input
              value={loginFormValues.username}
              onChange={(event) =>
                dispatch(
                  updateLoginFormValues({
                    field: "userId",
                    value: event.target.value,
                  })
                )
              }
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              type={"password"}
              value={loginFormValues.password}
              onChange={(event) =>
                dispatch(
                  updateLoginFormValues({
                    field: "password",
                    value: event.target.value,
                  })
                )
              }
            />
          </FormControl>
          <Button
            mt={2}
            colorScheme={"green"}
            onClick={() => dispatch(login(loginFormValues))}
            isLoading={isLoading}
          >
            Login
          </Button>
          <Box marginTop={5}>
            <Button
              variant={"link"}
              colorScheme="green"
              onClick={() => dispatch(toggleForm())}
            >
              Don't have an account? Go to signup
            </Button>
          </Box>
        </VStack>
      </Center>
    </>
  );
};

export default Login;
