import React from 'react'
import './FormInput.css';
import {useFormik} from 'formik';
import * as yup from 'yup'

const initialValues={
    name:"",
    firstname:"",
    email:"",
    password:"",
    confirmpassword:"",
};
const onSubmit= Values=>{
    console.log('Form Data',Values);
}
const validationSchema= yup.object(
    {
        name:yup.string().required('username should be have a special caracters'),
        firstname:yup.string().required('fisrt name is required'),
        email:yup.string()
        .required('email is required')
        .required('email invalid'),
        password: yup.string().required('password is required'),
        confirmpassword:yup.string().required('required').required('use the same password')
    }
)
const validate =Values=>{
    let errors={}

    if(!Values.name){
        errors.name='required'
    }
    if(!Values.firstname){
        errors.firstname='required'
    }
    if (!Values.email) {
        errors.email='required'
    }
    if (!Values.password) {
        errors.password='required'
    }
    if (!Values.confirmpassword) {
        errors.confirmpassword='required'
    }
return errors
}



function FormInput(){
    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema,
        //validate
    
    })
    console.log ('Visited fields',formik.touched)

    return(
        <div className="container-right">
        <div className="inscription">
        <h1>S'inscrire</h1>
        <div Name="barre-b"></div>
        </div>
        <div className="forminput">
           <form onSubmit={formik.handleSubmit}>
            <>
            <input type="text"
            id="name" 
            name="name"
            placeholder="nom"
            onChange={formik.handleChange}
            value={formik.values.name}
            onBlur={formik.handleBlur}
            />
             {formik.touched.name && formik.errors.name?<span class="error-msg">{formik.errors.name} </span> :null}
            </>
       
            <>
            <input type="text" 
            id="firstname" 
            name="firstname"
            placeholder="prenom"
            onChange={formik.handleChange}
            value={formik.values.firstname}
            onBlur={formik.handleBlur}
            />
             {formik.touched.firstname&& formik.errors.firstname?<span class="error-msg">gr{formik.errors.firstname} </span> :null}
            </>
            <>
            <input type="Email" 
            id="email" 
            name="email"
            placeholder="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
            />
             {formik.touched.email && formik.errors.email?<span class="error-msg">{formik.errors.email} </span> :null}
            </>
            <>
            <input type="password" 
            id="password" 
            name="password"
            placeholder="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password?<span class="error-msg">{formik.errors.password} </span> :null}
            </>
            <>
            <input type="password" 
            id="name" 
            name="name"
            placeholder="confirm password"
            onChange={formik.handleChange}
            value={formik.values.confirmpassword}
            onBlur={formik.handleBlur}
            />
            {formik.touched.confirmpassword && formik.errors.confirmpassword?<span class="error-msg">{formik.errors.confirmpassword} </span> :null}
            </>
           
         <div class="last">
            <p class="textfooter">
            Sed ut perspiciatis unde omnis iste natus error doloremque.<br/>
            sit voluptatem accusantium doloremque.
            </p>
            <button type='submit'>S'inscrire</button>
         </div>
           </form>

        </div>
       </div>

        
    )
}
export default FormInput