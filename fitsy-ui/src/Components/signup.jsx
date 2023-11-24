import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Select,
  VStack,
} from "@chakra-ui/react";

import { useDispatch, useSelector } from "react-redux";
import { USERTYPES } from "../constants";
import {
  signup,
  toggleForm,
  toggleIsPasswordVisible,
  updateSignupFormValues,
} from "../Redux/slice/auth";

const Signup = () => {
  const { signupFormValues, isPasswordVisible } = useSelector(
    (store) => store.auth
  );

  const dispatch = useDispatch();

  return (
    <Center height={"100vh"}>
      <VStack borderWidth={"1px"} borderRadius="lg" padding={"24px"}>
        <Heading as="h3" size="lg" marginBottom={"24px"}>
          Signup
        </Heading>
        <FormControl isRequired>
          <FormLabel>Username</FormLabel>
          <Input
            value={signupFormValues.username}
            onChange={(event) =>
              dispatch(
                updateSignupFormValues({
                  field: "userId",
                  value: event.target.value,
                })
              )
            }
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Name</FormLabel>
          <Input
            value={signupFormValues.name}
            onChange={(event) =>
              dispatch(
                updateSignupFormValues({
                  field: "name",
                  value: event.target.value,
                })
              )
            }
          ></Input>
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            value={signupFormValues.email}
            onChange={(event) =>
              dispatch(
                updateSignupFormValues({
                  field: "email",
                  value: event.target.value,
                })
              )
            }
          ></Input>
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Password</FormLabel>
          <InputGroup>
            <Input
              type={isPasswordVisible ? "text" : "password"}
              value={signupFormValues.password}
              onChange={(event) =>
                dispatch(
                  updateSignupFormValues({
                    field: "password",
                    value: event.target.value,
                  })
                )
              }
            />
            <InputRightElement>
              {isPasswordVisible ? (
                <ViewOffIcon
                  onClick={() => dispatch(toggleIsPasswordVisible())}
                />
              ) : (
                <ViewIcon onClick={() => dispatch(toggleIsPasswordVisible())} />
              )}
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <FormControl isRequired>
          <FormLabel>User Type</FormLabel>
          <Select
            value={signupFormValues.userType}
            onChange={(event) =>
              dispatch(
                updateSignupFormValues({
                  field: "userType",
                  value: event.target.value,
                })
              )
            }
          >
            <option value={USERTYPES.ADMIN}>ADMIN</option>
            <option value={USERTYPES.PATIENT}>PATIENT</option>
            <option value={USERTYPES.DOCTOR}>DOCTOR</option>
          </Select>
        </FormControl>
        <Button
          mt={2}
          colorScheme={"green"}
          onClick={() => dispatch(signup(signupFormValues))}
        >
          Signup
        </Button>
        <Box marginTop={5}>
          <Button
            variant={"link"}
            colorScheme="green"
            onClick={() => dispatch(toggleForm())}
          >
            Already have an account? Go to signin
          </Button>
        </Box>
      </VStack>
    </Center>
  );
};

export default Signup;
