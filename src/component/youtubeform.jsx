import React from 'react'
import './youtubeform.css'
import{useFormik} from 'formik'
import * as yup from 'yup'

const initialValues={
   name:"fghh",
   email:"",
   channel:""
}
const onSubmit= values=>{
   console.log('Form Data', values)
};
const validate=values =>{
   // values.names 
   let errors={}
   if(!values.name){
      errors.name='Required';
   }
   if(!values.email){
      errors.name='Required';
   }else if(!/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,20}$/i.test(values.email)){
      errors.email='Invalid email format'
   }
   if(!values.channel){
      errors.channel='Required'
   }
   return errors 
}
const validationSchema= yup.object(
   {
      name: yup.string().required('required-field'),
      email:yup.string()
      .required('required')
      .required('invalid email!'),
      channel:yup.string().required('required')
   }
)
function Youtubeform() {
   const formik = useFormik({
    initialValues,
    onSubmit,
    //validate
    validationSchema,
   })
  console.log ('Visited fields',formik.touched)
  return (
    <div>
        <form onSubmit={formik.handleSubmit}>
         <div class="form-controle" >
         <label htmlFor='name'>name</label>
            <input 
               type="text" 
               id="name" 
               name="name" 
               onChange={formik.handleChange} 
               value={formik.values.name}
               onBlur={formik.handleBlur}
               />
               {formik.touched.name && formik.errors.name? <div  class="error">{formik.errors.name} </div>:null}
         </div>

               <div class="form-controle" >
               <label htmlFor='email'>email</label>
                   <input
                        type="text"
                        id="Email"
                        name="email"
                        onChange={formik.handleChange} 
                        value={formik.values.email}
                        onBlur={formik.handleBlur}
                     />
                        {formik.touched.email && formik.errors.email? <div class="error">{formik.errors.email} </div>:null}
               </div>

                  <div class="form-controle" >
                  <label htmlFor='channel'>channel</label>
                   <input 
                        type="text" 
                        id="channel" 
                        name="channel"
                        onChange={formik.handleChange} 
                        value={formik.values.channel}
                        onBlur={formik.handleBlur}
                  />
                  {formik.touched.name && formik.errors.channel? <div class="error">{formik.errors.channel} </div>:null}
                  </div>
            
            <button type='submit'>submit</button>
        </form>
    </div>
  )
}

export default Youtubeform