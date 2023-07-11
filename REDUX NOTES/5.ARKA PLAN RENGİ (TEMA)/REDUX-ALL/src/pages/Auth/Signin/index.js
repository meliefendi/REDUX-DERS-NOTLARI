
import React from "react";
import { Alert, Box, Button, Flex, FormControl, FormLabel, Heading, Input } from '@chakra-ui/react';
import { useFormik } from "formik";
import validationSchema from "./validations";

import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../../../redux/themeSlice";
import style from "./style.module.css"

function Signin() {
    const dispatch = useDispatch();
    const initialState = useSelector(state => state.theme.them)

    const changeTheme = () => {
       
          dispatch(setTheme(initialState  === "red" ? "blue" : "red"));
        
      };
      const themeClass = initialState === "red" ? style.red : style.blue;
      
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            passwordConfirm: "",
        },
        validationSchema,
    })


    return (
        <div className={themeClass} >
            <Flex align="center" width="full" justifyContent="center" >
                <Box pt={10} >
                    <Box textAlign="center" >
                        <Heading>Sign In</Heading>
                    </Box>
                    <Box my={5} >
                        {formik.errors.general && (
                            <Alert status="error" > {formik.errors.general} </Alert>
                        )}
                    </Box>
                    <Box my={5} textAlign="left" >
                        <form onSubmit={formik.handleSubmit} >
                            <FormControl>
                                <FormLabel>E-mail</FormLabel>
                                <Input name="email"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.email}
                                    isInvalid={formik.touched.email && formik.errors.email}
                                />
                            </FormControl>

                            <FormControl mt={4} >
                                <FormLabel>Password</FormLabel>
                                <Input name="password" type="password"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.password}
                                    isInvalid={formik.touched.password && formik.errors.password}
                                />
                            </FormControl>



                            <Button mt="4" width="full" type="submit" >Sign In</Button>
                            <Button onClick={changeTheme}>theme {initialState} </Button>

                        </form>

                    </Box>
                </Box>

            </Flex>

        </div>

    )
}

export default Signin;