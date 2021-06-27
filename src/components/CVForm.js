import React from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'

const CVForm = () =>(
    <div>
        <Formik
            initialValues={{
                fname:"",
                lname:"",
                address1:"",
                address2:"",
                number:"",
                position:"",
                duties:""
            }}
            validate ={values =>{
                let errors ={}
                if(!values.fname){
                    errors.fname = "Enter Valid Input"
                }
                if(!values.lname){
                    errors.lname = "Enter Valid Input"
                }
                if(!values.address1){
                    errors.address1 = "Enter Valid Input"
                }
                if(values.number === ""){
                    errors.number = "Enter Valid Input"
                }
                else if(values.number.length < 3){
                    errors.breed = " Numbers should be more than 3 characters"
                }
                if(!values.position){
                    errors.position = "Enter Valid Input"
                }
                if(!values.duties){
                    errors.duties = "Enter Valid Input"
                }
                return errors


            }}
            onSubmit ={(values, {setSubmitting})  =>{
                alert("Form is validating submitting the Form.....")
                setSubmitting(false)
            }}
        >
            {({isSubmitting})=>(
                <Form>
                    <h4>Personal Information</h4>
                    <div className="container">
                        <h5>Names:</h5>
                        <Field className="Fname" placeholder="First Name" name="fname"/>
                        <ErrorMessage className="span" component="div" name="fname"/>
                        <Field className="Lname" placeholder="Last Name" name="lname"/>
                        <ErrorMessage className="span" component="div" name="lname"/>
                        <h5>Address:</h5>
                        <Field className="Address" placeholder="Address 1" name="address1"/>
                        <ErrorMessage className="span" component="div" name="address1"/>
                        <Field className="Address" placeholder="Address 2" name="address2"/>
                        <ErrorMessage className="span" component="div" name="address2"/>
                    </div>
                    <h4>Work Experience</h4>
                    <div className="container">
                        <h5>Role:</h5>
                        <Field className="Fname" placeholder="Position" name="position"/>
                        <ErrorMessage className="span" component="div" name="position"/>
                        <Field className="Lname" placeholder="Duties" name="duties"/>
                        <ErrorMessage className="span" component="div" name="duties"/>
                        <button className="btn1">ADD ROLE</button>
                    </div>
                    <button className="btn" disabled={isSubmitting}>SUBMIT</button>
   
                </Form>
            )}

        </Formik>
    </div>
)
export default CVForm
