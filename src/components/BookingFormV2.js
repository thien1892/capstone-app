import './BookingForm.css';
import * as Yup from 'yup'; //"yup": "^1.2.0"
import { Formik, Form, ErrorMessage, Field, useField } from 'formik'; //"formik": "^2.4.2"
import moment from 'moment'; //"moment": "^2.29.4"
import { useNavigate } from 'react-router-dom';

//https://formik.org/docs/tutorial
const MyCheckbox = ({ children, ...props }) => {
    // React treats radios and checkbox inputs differently from other input types: select and textarea.
    // Formik does this too! When you specify `type` to useField(), it will
    // return the correct bag of props for you -- a `checked` prop will be included
    // in `field` alongside `name`, `value`, `onChange`, and `onBlur`
    const [field, meta] = useField({ ...props, type: 'checkbox' });
    return (
      <div>
        <label className="checkbox-input">
          <input type="checkbox" {...field} {...props} />
          {children}
        </label>
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </div>
    );
  };

const MySelect = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
      <div>
        <label htmlFor={props.id || props.name}>{label}</label>
        <select {...field} {...props} />
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </div>
    );
  };



function BookingFormVer2() {
    const navigate = useNavigate();
    return(
        <Formik
            initialValues={
                {
                    resDate:moment().format('YYYY-MM-DD'), //date
                    resTime:"17:00",
                    guests:2,
                    outside:false, //check box
                    occation: "Birthday",
                }
            }
            validationSchema={
                Yup.object({
                    resDate: Yup.date().min(moment().format('YYYY-MM-DD'), `Min date is today: ${moment().format('YYYY-MM-DD')}!`),
                    guests: Yup.number().min(1).max(10).required('required'),
                    occation: Yup.string()
                        .oneOf(
                        ['Birthday', 'Annivesary'],
                        'Invalid Occation'
                        )
                        .required('required'),
                    resTime: Yup.string()
                        .oneOf(
                        ['17:00','18:00','19:00','20:00','21:00','22:00'],
                        'Invalid Occation'
                        )
                        .required('required'),
                    outside: Yup.boolean()
                        .required('Required')
                        .oneOf([true,false]),
                        // .oneOf([true], 'You must accept the terms and conditions.'),
                })
            }
            onSubmit={(values, { setSubmitting, resetForm }) => {
                // setTimeout(() => {
                //     alert(JSON.stringify(values, null, 2));
                //     setSubmitting(false);
                // }, 400);
                resetForm(); //reset form
                navigate('/confirm');
            }}
        >
            <Form>
                <label htmlFor='resDate'>Date:</label>
                <Field name='resDate' type='date' className='field-form'/>
                <ErrorMessage name='resDate'>
                    { msg => <div className='error-message'>{msg}</div> }
                </ErrorMessage>
                {/* <label htmlFor='resTime'>Time: </label>
                <Field name='resTime' type='text'/>
                <ErrorMessage name='resTime'/> */}

                <MySelect label='Time: ' name='resTime'>
                    <option value='17:00'  className='field-form'>17:00</option>
                    <option value='18:00'  className='field-form'>18:00</option>
                    <option value='19:00' className='field-form'>19:00</option>
                    <option value='20:00' className='field-form'>20:00</option>
                    <option value='21:00' className='field-form'>21:00</option>
                    <option value='22:00' className='field-form'>22:00</option>
                </MySelect>

                <label htmlFor='guests'>Number of guests:</label>
                <Field name='guests' type='number' 
                data-testid='number'
                className='field-form'
                />
                <ErrorMessage name='guests'>
                    { msg => <div className='error-message'>{msg}</div> }
                </ErrorMessage>

                <MyCheckbox name="outside">
                    Outdoor
                </MyCheckbox>

                {/* <label htmlFor='guests'>Occation: </label> */}
                <MySelect label='Occation: ' name='occation'>
                    <option value='Birthday' className='field-form'>Birthday</option>
                    <option value='Annivesary' className='field-form'>Annivesary</option>
                </MySelect>

                <button type="submit"  className='submit-form'>Submit</button>
            </Form>

        </Formik>
    );
}


export default BookingFormVer2;