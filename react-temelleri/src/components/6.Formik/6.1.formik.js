import { Formik, Field, Form } from 'formik'

function FormikExample() {
    return (
        <div>
            <h4>Sign Up</h4>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                }}
                // Formik ile useState kullanımına gerek kalmıyor, ilk değerleri bu şekilde Formik içinde tanımlıyoruz.

                onSubmit={(values) => {
                    console.log(values);
                }}
                // Gerekli fonksiyonlar da Formik tag'ı içinde yazılıyor
            >
                {/* ve Form verilerini de Form altında yazıyoruz. form name'leri initialValues keyleri ile aynı olmalı. */}
                
                <Form>
                    <label htmlFor="firstName">First Name </label>     {/* htmlFor kullanılmayacaksa id vermeye gerek yok. */}
                    <Field id="firstName" name="firstName" />   {/* Field input döndürür. */}

                    <label htmlFor="lastName"> Last Name </label>
                    <Field id="lastName" name="lastName" />
                    <label htmlFor="email"> Email </label>
                    <Field
                        id="email" 
                        name="email"
                        type="email"
                    />

                    <label>  </label>
                    <button type="submit">Submit</button>
                </Form>


                {/* //* Bazen html etiketleri kullanman gerekebilir. Bu durumlarda handleSubmit & handleChange devreye giriyor */}
    

            </Formik>
        </div>
    )
}

export default FormikExample;
