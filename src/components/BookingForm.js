import './BookingForm.css';
import * as Yup from 'yup';
import { useFormik, Formik, Form, ErrorMessage, Field } from 'formik';
import moment from 'moment';

function BookingForm() {
    const formik = useFormik({
        initialValues: {
            resDate:"",
            resTime:"17:00",
            guests:2,
            occation: "",
        },
        validationSchema: Yup.object({
            resDate: Yup.date(),
            guests: Yup.number().min(1).max(10).required('required'),
        }),
        onSubmit: (values) => {
            console.log(values);
            alert("Thanks you!");
            formik.resetForm(
                {
                    resDate:"",
                    resTime:"20:00",
                    guests:1,
                    occation: "",
                },
            );
        }
    });

    console.log(formik.errors)

    return (
        <form onSubmit={formik.handleSubmit}>
            <label for='res-date'>Choose date: </label>
            <input 
            type='date' 
            id='res-date'
            onChange={formik.handleChange}
            value={formik.values.resDate}
            />

            <label for='res-time'>Choose time: </label>
            <select id='res-time' 
            value={formik.values.resDate}
            onChange={formik.handleChange}>
                <option>17:00</option>
                <option>18:00</option>
                <option>19:00</option>
                <option>20:00</option>
                <option>21:00</option>
                <option>22:00</option>
            </select>

            <label for='guests'>Number of guests: </label>
            <input type='number' 
            id='guests' 
            value={formik.values.guests}
            onChange={formik.handleChange}/>

            <label for='occation'>Occation: </label>
            <select id='occation' value={formik.values.occation} onChange={formik.handleChange}>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>

            <input type='submit' value='Make your reservation'></input>
        </form>
    );
}

export default BookingForm;