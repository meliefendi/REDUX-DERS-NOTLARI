
import React from "react";
import { Alert, Box, Button, Flex, FormControl, FormLabel, Heading, Input } from '@chakra-ui/react';
import { useFormik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import validationSchema  from "./validations";
//reducer
import { setTheme } from "../../../redux/themeSlice";
import style from "../Signin/style.module.css"

function Signup(){   

    const dispatch = useDispatch();
    const initialState = useSelector(state => state.user.them)

    const changeTheme = () => {
       
          dispatch(setTheme(initialState  === "red" ? "blue" : "red"));
        
      };
      const themeClass = initialState === "red" ? style.red : style.blue;

    // const dispatch = useDispatch();
    // const userRegister = useSelector((state) => state.name.email)
    // const userPassword = useSelector((state) => state.name.password)
    // const userPasswordConfirm = useSelector((state) => state.name.passwordConfirm)

    const formik = useFormik({
        initialValues: {
            email:"",
            password:"",
            passwordConfirm:"",
        },
        validationSchema,
        // onSubmit: async (values, bag) => {
        //     try {
        //         const registerResponse = await fetchRegister({
        //             email: values.email,
        //             password: values.password,
        //         });


        //         login(registerResponse);
        //         //kayıt işlemi sonrası profile yönlendirmesi
        //         navigate("../Profile")


        //     } catch (e) {
        //         bag.setErrors({ general: e.response.data.message })
        //     }
        // },

    });
       
    
    return(
        <div  className={themeClass} >
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
                    <form onSubmit={formik.handleSubmit } >
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

                        <FormControl mt={4} >
                            <FormLabel>Password</FormLabel>
                            <Input name="passwordConfirm" type="password"
                             onChange={formik.handleChange}
                             onBlur={formik.handleBlur}
                             value={formik.values.passwordConfirm}
                             isInvalid={formik.touched.passwordConfirm && formik.errors.passwordConfirm}
                            />
                        </FormControl>

                

                        <Button mt="4" width="full" type="submit" >Sign Up</Button>
                        <Button onClick={changeTheme}>theme {initialState} </Button>
                    </form>
                </Box>
            </Box>

        </Flex>
    </div>
    )
}

export default Signup;
