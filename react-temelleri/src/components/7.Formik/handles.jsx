//! handleSubmit & handleChange 

import { Formik } from 'formik';

function FormikHandleExample() {
    
    return (
        <div>
            <h4>Sign Up</h4>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '@gmail.com',
                    gender: 'male',
                    languages: [],
                    country: 'abd'
                }}

                onSubmit={(values) => {
                    console.log(values);
                }}
            >

{/* //* bu kısımlar çok karmaşık görünüyor. useFormik bunu bir miktar düzeltiyor */}

                {({ handleSubmit, handleChange, values }) => (

                    <form onSubmit={handleSubmit}>
                        <label htmlFor="firstName">First Name: </label>
                        <input name="firstName" onChange={handleChange} />

                        <label htmlFor="lastName"> Last Name: </label>
                        <input name="lastName" onChange={handleChange} />

                        <label htmlFor="email"> Email: </label>
                        <input
                            name="email"
                            type="email"
                            value={values.email}    /* ile varsayılan değer inputa atanabilir. */
                            onChange={handleChange}     /* herhangi bir value tanımı yapmak zorundayız. */
                        /*  Field yerine input kullandığımız için artık onChange de eklememiz gerekiyor */
                        /> 

                        <br/>

                        <label>  Male</label>
                        <input type="radio" name='gender' value="male" onChange={handleChange} 
                        checked={values.gender === "male"}></input>
                        {/* values altındaki gender'in değeri (varsayılan değer) male ise bu butonu auto check'le */}

                        <label>  Female</label>
                        <input type="radio" name='gender' value="female" onChange={handleChange}
                        checked={values.gender === "female"}></input>

                        <br/>

                        <input type="checkbox" name="languages" value="turkish" onChange={handleChange} />
                        <label>Turkish </label>
                        <input type="checkbox" name="languages" value="english" onChange={handleChange} />
                        <label>English </label>
                        <input type="checkbox" name="languages" value="spanish" onChange={handleChange} />
                        <label>Spanish </label>

                        <br/>

                        <select name="country" value={values.country} onChange={handleChange} >
                            <option value="tr">Türkiye</option>
                            <option value="abd">Amerika</option>
                            <option value="en">İngiltere</option>
                        </select>

                        <br/>

                        <label>  </label>
                        <button type="submit">Submit</button>

                        <br/><br/><hr/>
                        <describe>{JSON.stringify(values)}</describe>
                    </form>
                )}
            </Formik>
        </div>
    )
}

export default FormikHandleExample;