import * as Yup from 'yup';

export default Yup.object().shape({
    name: Yup.string()
        .required('Please enter valid name')
        .min(3, 'Workout name must be at least 3 characters long'),
    type: Yup.string()
        .required('Please select workout type'),
    start: Yup.string()
        .required('Please select start time'),
    duration: Yup.string()
        .required('Please select workout length'),
    intensity: Yup.string()
        .required('Please select intensity level'),
    location: Yup.string()
        .required('Please select workout location'),
    max_size: Yup.string()
        .required('Please enter class limit'),
})
