import { useFormik } from 'formik';
import SignInValidation from './6.4.2.signin-validation';

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

                {errors.email && touched.email && (<div>{errors.email}</div>)}
                {/* hata kontrolleri validation'a bağlı. default mesajları da orada düzenleyebirsin */}

                <label> Password </label>
                <input name="password" type="password" value={values.password} onChange={handleChange} onBlur={handleBlur} />
                
                {errors.password && touched.password && <div>{errors.password}</div> }
                {/* password, validation şartlarına uymuyorsa errors keyi çalışır. ve onun altındaki hata mesajını ekrana yazar */}

                <label> Confirm Password </label>
                <input name="password2" type="password" value={values.password2} onChange={handleChange} onBlur={handleBlur} />

                {errors.password2 && touched.password2 && <div>{errors.password2}</div> }
                
                <label>  </label>
                <button type="submit">Submit</button>

            </form>

        </div>
    )
}

export default SignIn;
