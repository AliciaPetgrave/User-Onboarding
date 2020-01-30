import React, {useState, useEffect} from "react"
import Axios from "axios"
import * as Yup from "yup"
import {withFormik, Form, Field} from "formik"


function FormInfo (){

    //sets state for incoming values data
    const [person, setSPerson] = ([])


    
    return(
        <div>
            <h1>User Onboarding</h1>
            <Form>
                <label>
                    Name:
                    <Field type="text" name="name"/>
                </label>

                <label>
                    Email:
                    <Field type="text" name="email"/>
                </label>

                <label>
                    Password:
                    <Field type="text" name="password"/>
                </label>

                <label>
                    Terms of Service
                    <Field type="checkbox" name="terms"/>
                </label>

                <button type="submit">Submit</button>
            </Form>
        </div>

    )
}

const FormikFormInfo = withFormik({
    mapPropsToValues(name, email, password, terms){
        return{
            name: name || "",
            email: email || "",
            password: password || "",
            terms: terms || false,
        }
    }
}) (FormInfo)
export default FormikFormInfo