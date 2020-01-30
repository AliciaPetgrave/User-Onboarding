import React, {useState} from "react"
import Axios from "axios"
import * as Yup from "yup"
import {withFormik, Form, Field} from "formik"


function FormInfo (){

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

const FormikFormInfo = withFormik (FormInfo)
export default FormikFormInfo