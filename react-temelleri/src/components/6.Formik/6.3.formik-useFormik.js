
//! useFormik


import { useFormik } from 'formik';

function UseFormikExample() {


    const {handleSubmit, handleChange, values} = useFormik({
        initialValues:{
            firstName: '',
            lastName: '',
            email: '@gmail.com',
            gender: 'male',
            languages: [],
            country: ''
        },

        onSubmit: (values) => {
            console.log(values);
        }
    })

/*  const formik = useFormik({

    normalde bu şekilde de tanımlanabilir ama aşağıda kullandığımız tüm {handleSubmit, handleChange, values}
    değerlerinin başına "formik." yazmak gerekeceği için yukarıdaki haliyle kullandık.
})
*/

    return (
        <div>
            <h4>Sign Up</h4>
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name </label>
                <input name="firstName" onChange={handleChange} />

                <label htmlFor="lastName"> Last Name </label>
                <input name="lastName" onChange={handleChange} />

                <label htmlFor="email"> Email </label>
                <input
                    name="email"
                    type="email"
                    onChange={handleChange}
                />

                <br />

                <label>  Male</label>
                <input type="radio" name='gender' value="male" onChange={handleChange}></input>

                <label>  Female</label>
                <input type="radio" name='gender' value="female" onChange={handleChange}></input>

                <br />

                <input type="checkbox" name="languages" value="turkish" onChange={handleChange} />
                <label> Turkish</label>
                <input type="checkbox" name="languages" value="english" onChange={handleChange} />
                <label> English</label>
                <input type="checkbox" name="languages" value="spanish" onChange={handleChange} />
                <label> Spanish</label>

                <br />

                <select name="country" value={values.country} onChange={handleChange} >
                    <option value="tr">Türkiye</option>
                    <option value="abd">Amerika</option>
                    <option value="en">İngiltere</option>
                </select>

                <br />

                <label>  </label>
                <button type="submit">Submit</button>


                <br /><br />
                <code>{JSON.stringify(values)}</code>
            </form>
        </div>
    )
}

export default UseFormikExample;
