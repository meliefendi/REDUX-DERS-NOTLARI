
import { useState, useEffect } from "react";
import { Alert, Box, Button, Flex, FormControl, FormLabel, Heading, Input } from '@chakra-ui/react';
import { useFormik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import validationSchema from "./validations";
//reducer
import { login, selectUser, setTheme } from "../../../redux/themeSlice";
import style from "../Signin/style.module.css"

function Signin() {
const navigate = useNavigate();
    //state
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //dispatch
    const dispatch = useDispatch();
    //tema
    const initialState = useSelector(state => state.user.them)

    const changeTheme = () => {

        dispatch(setTheme(initialState === "red" ? "blue" : "red"));

    };
    const themeClass = initialState === "red" ? style.red : style.blue;
    //login
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login({
            name: name,
            email: email,
            password: password,
            loggedIn: true,
        }))
        navigate("../profile")
    };
    const user = useSelector(selectUser);

    useEffect(() => {
        console.log(user)
    }, [user]);

    //formik
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            passwordConfirm: "",
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


    return (
        <div className={themeClass} >
            <span></span>
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
                        <form
                            //</Box> onSubmit={formik.handleSubmit} 
                            onSubmit={(e) => handleSubmit(e)}>
                            <FormControl style={{ display: "none" }} >
                                <FormLabel>Name</FormLabel>
                                <Input name="name"
                                    //onChange={formik.handleChange}
                                    onChange={(e) => setName(e.target.value)}
                                    // onBlur={formik.handleBlur}
                                    // value={formik.values.email}
                                    value={name}
                                // isInvalid={formik.touched.name && formik.errors.name}
                                />
                            </FormControl>
                            <FormControl>
                                <FormLabel>E-mail</FormLabel>
                                <Input name="email"
                                    //onChange={formik.handleChange}
                                    onChange={(e) => setEmail(e.target.value)}
                                    // onBlur={formik.handleBlur}
                                    // value={formik.values.email}
                                    value={email}
                                // isInvalid={formik.touched.email && formik.errors.email}
                                />
                            </FormControl>

                            <FormControl mt={4} >
                                <FormLabel>Password</FormLabel>
                                <Input name="password" type="password"
                                    //onChange={formik.handleChange}
                                    onChange={(e) => setPassword(e.target.value)}
                                    // onBlur={formik.handleBlur}
                                    // value={formik.values.password}
                                    value={password}
                                //isInvalid={formik.touched.password && formik.errors.password}
                                />
                            </FormControl>

                            {/* <FormControl mt={4} >
                                <FormLabel>Password</FormLabel>
                                <Input name="passwordConfirm" type="password"
                                   // onChange={formik.handleChange}
                                   onChange={(e) => setPassword(e.target.value)}
                                    onBlur={formik.handleBlur}
                                   // value={formik.values.passwordConfirm}
                                   value={password}
                                    isInvalid={formik.touched.passwordConfirm && formik.errors.passwordConfirm}
                                />
                            </FormControl> */}



                            <Button mt="4" width="full" type="submit" >Sign Up</Button>
                            <br />
                            <Button onClick={changeTheme}>theme {initialState} </Button>
                        </form>
                    </Box>
                </Box>

            </Flex>
        </div>
    )
}

export default Signin;