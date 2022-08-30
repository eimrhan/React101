import React from "react";
import { useFormik } from 'formik';
import SignInValidation from './validation';

function SignIn() {

    const { handleSubmit, handleChange, handleBlur, values, errors, touched } = useFormik({  
            // hata yakalamak için de errors keyini kullanıyoruz,
            // seçilmeyen input için hata görmemek içinse touched keyi ve
            // sadece o inputtan ayrıldığında göstermesi için handleBlur
        initialValues: {
            email: '',
            password: '',
            password2: ''
        },

        onSubmit: () => {
            console.log("Giriş Başarılı");
        },

        validationSchema: SignInValidation
        // ya da SignInValidation yerine validationSchema olarak import edersen sadece validationSchema yazman yeterli.
    })


    return (
        <div>
            <h4>Login</h4>
            <form onSubmit={handleSubmit}>

                <label> Email </label>
                <input name="email" type="email" value={values.email} onChange={handleChange} onBlur={handleBlur} />

                {errors.email && touched.email && (<span> {errors.email}</span>)}
                {/* hata kontrolleri validation'a bağlı. default mesajları da orada düzenleyebirsin */}

                <br/>

                <label> Password </label>
                <input name="password" type="password" value={values.password} onChange={handleChange} onBlur={handleBlur} />
                
                {errors.password && touched.password && <span> {errors.password}</span> }
                {/* password, validation şartlarına uymuyorsa errors keyi çalışır. ve onun altındaki hata mesajını ekrana yazar */}

                <br/>

                <label> Confirm Password </label>
                <input name="password2" type="password" value={values.password2} onChange={handleChange} onBlur={handleBlur} />

                {errors.password2 && touched.password2 && <span> {errors.password2}</span> }
                
                <br/>

                <label>  </label>
                <button type="submit">Submit</button>

            </form>
        </div>
    )
}

export default SignIn;
