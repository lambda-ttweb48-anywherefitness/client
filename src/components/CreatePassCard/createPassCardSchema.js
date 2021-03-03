import * as Yup from 'yup';

export default Yup.object().shape({
    total_classes: Yup.number()
        .required('Please select number of workouts'),
    price: Yup.number()
        .required('Please enter correct amount'), 
})
