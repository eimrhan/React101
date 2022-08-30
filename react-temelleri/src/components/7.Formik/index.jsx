import { Formik, Field, Form } from 'formik'

function FormikExample() {
    return (
        <div>
            <h2>Formik</h2>
            <describe>
                Form ile ilgili işlemleri state kullanmadan Formik Componenti aracılığıyla 
                çok daha basit bir şekilde yapabiliyoruz. Detaylar:
                <a href="https://formik.org/docs/overview"> Formik Docs</a>
                <br/>
                <p><i>Formik veya benzeri çözümleri kullanmamızın bir diğer sebebi de, 
                state kullanarak yaptığınız form kontrollerinde state her değiştiğinde 
                component tekrardan render edilir. Formik kullanarak bunun önüne geçmiş oluyoruz.</i></p>
            </describe>
            <hr/>

            <h4>Sign Up</h4>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                }}
                // Formik ile useState kullanımına gerek kalmıyor,
                // ilk değerleri bu şekilde Formik içinde initialValues altında tanımlıyoruz.

                onSubmit={(values) => {
                    console.log(values);
                }}
                // Gerekli fonksiyonlar da Formik tag'ı içinde yazılıyor
            >
                {/* ve Form verilerini de Form altında yazıyoruz. //* form name'leri initialValues keyleri ile aynı olmalı. */}
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


                {/* //* Bazen html etiketleri kullanman gerekebilir. Bu durumlarda handleSubmit & handleChange devreye giriyor
                        handles.js sayfasında da buna bakalım. */}

            </Formik>
        </div>
    )
}

export default FormikExample;