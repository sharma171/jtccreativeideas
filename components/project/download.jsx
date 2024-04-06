import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { downloadProject } from '../../apis/apis';

const Download = ({ project }) => {
    const [field, setField] = useState({
        name: '', phone: '', folder: project,
    });
    const [errors, setErrors] = useState({
        name: '', phone: '', checkbox: '',
    });
    const formRef = useRef(null); // Ref for form element (optional)

    const handelChange = (e) => {
        setField({ ...field, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        let isValid = true;
        const newErrors = { ...errors };

        // Name validation
        if (!/^[a-zA-Z\s]+$/.test(field.name)) {
            newErrors.name = 'Name should contain alphabets only.';
            isValid = false;
        } else {
            newErrors.name = '';
        }

        // Phone validation
        if (!/^\d{10}$/.test(field.phone.trim())) {
            newErrors.phone = 'Please enter a valid 10-digit phone number';
            isValid = false;
        } else {
            newErrors.phone = '';
        }

        // Checkbox validation
        if (!field.checkbox) {
            newErrors.checkbox = 'Please accept the terms and conditions';
            isValid = false;
        } else {
            newErrors.checkbox = '';
        }

        setErrors(newErrors);

        return isValid;
    };

    const submitForm = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            field.folder = 'education';
            try {
                await downloadProject(field);
                const form = formRef.current;
                if (form) {
                    form.reset();
                    // toast("Syllabus Download Successful")
                }
            } catch (error) {
                console.error('Error occurred while downloading:', error);
                // Handle error, show message to user, etc.
            }
        }
    };

    return (
        <div className="project-box">
            <h3 className="keypoints-head">Download Project Bundle</h3>
            <form className="login-form" onSubmit={submitForm} id="downloadSyllabus_java" ref={formRef}>
                    <input type="text" placeholder="Name" name="name" id="name7" onChange={handelChange} className="forminput" />
                    {errors.name && <span className="error-message red">{errors.name}</span>}
                <div className="input-box mb--20">
                    <input type="tel" id="phone7" className="phone-input forminput" name="phone"
                        placeholder="Mobile Number" onChange={handelChange}  />
                </div>
                    {errors.phone && <span className="error-message red">{errors.phone}</span>}
                <div className="t-and-c">
                    <input id="checkbox-7" name="checkbox" type="checkbox" onChange={handelChange} />
                    <label htmlFor="checkbox-7"> I have reviewed all Terms and Conditions.</label>
                </div>
                {errors.checkbox && <span className="error-message red">{errors.checkbox}</span>}
                <button className="rn-btn edu-btn w-100 mb--20 button" type="submit">
                    Download Project
                </button>
            </form>
        </div>
    );
};

export default Download;



{/* <input type="text" placeholder="Name" name="name" id="name7" required="" onChange={handelChange}/>
<div className="input-box mb--20">
    <input type="tel" id="phone7" className="phone-input" name="phone"
        placeholder="Mobile Number" required  onChange={handelChange}/>
</div>
<div className="t-and-c">
    <label><input id="checkbox-7"  type="checkbox" required=""></input></label>
    <label htmlFor="checkbox-7"> I have reviewed all <Link href="termsandcondition.html" target="_blank"> Terms and
                                Conditions</Link>.</label>
</div>

 <button className="button"  onClick={submitForm} type="button">Download Project</button> */}
