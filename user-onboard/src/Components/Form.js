import React, {useState, useEffect} from "react"
import Axios from "axios"
import * as Yup from "yup"
import {withFormik, Form, Field} from "formik"


function FormInfo ({values, errors, touched}){

    //sets state for incoming values data
    const [person, setSPerson] = ([])


    
    return(
        <div>
            <h1>User Onboarding</h1>
            <Form>
                <label>
                    Name:
                    <Field type="text" name="name"/>
                    {touched.name && errors.name && (<p>{errors.name}</p>)}
                </label>

                <label>
                    Email:
                    <Field type="text" name="email"/>
                    {touched.email && errors.email && (<p>{errors.email}</p>)}
                </label>

                <label>
                    Password:
                    <Field type="password" name="password"/>
                    {touched.password && errors.password && (<p>{errors.password}</p>)}
                </label>

                <label>
                    Terms of Service
                    <Field type="checkbox" name="terms" checked={values.terms}/>
                    {touched.terms && errors.terms && (<p>{errors.terms}</p>)}
                </label>

                <button type="submit">Submit</button>
            </Form>
        </div>

    )
}

const FormikFormInfo = withFormik({
    mapPropsToValues(name, email, password, terms){
        return{
            name: "",
            email: email || "",
            password: "",
            terms: false,
        }
    },
    //validation set up with error messages
    validationSchema: Yup.object().shape({
        name: Yup.string().required("Name is required"),
        email: Yup.string().email("Invalid email address").required("Email is required"),
        password: Yup.string().required("Password is required"),
        terms: Yup.boolean().oneOf([true], "Must agree to Terms of Service").required()
    }),
    //POSTing values submitted, to axios site
    handleSubmit(values, formikBag){
        Axios.post("https://reqres.in/api/users", values)
        .then(response => {
            console.log("Success!", response)
        })
        .catch(error =>{
            console.log(error)
        })
    }
}) (FormInfo)
export default FormikFormInfo