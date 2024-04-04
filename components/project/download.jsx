import React, {useState, useRef} from 'react'
import Link from 'next/link'
import { downloadProject } from '../../apis/apis';


const Download = ({project}) => {
    const [field, setField] = useState({
        name: "", phone: "", folder : project
    });
    const [errors, setErrors] = useState({
        name: "", phone: "", checkbox: ""
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
            newErrors.name = "Name should contain alphabets only.";
            isValid = false;
        } else {
            newErrors.name = "";
        }

        // Phone validation
        if (!/^\d{10}$/.test(field.phone.trim())) {
            newErrors.phone = "Please enter a valid 10-digit phone number";
            isValid = false;
        } else {
            newErrors.phone = "";
        }

        // Checkbox validation
        if (!field.checkbox) {
            newErrors.checkbox = "Please accept the terms and conditions";
            isValid = false;
        } else {
            newErrors.checkbox = "";
        }

        setErrors(newErrors);
        return isValid;
    };

    const submitForm = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            field.folder = 'education'
                await  downloadProject(field).then(() => {
                    const form = formRef.current;
                    if (form) {
                        return  form.reset()
                        // toast("Syllabus Download Sussessfull")
                    }
                })
        }
    };

  return (
    <div className="project-box">
    <h3 className="keypoints-head">Download Project Bundle</h3>
    <input type="text" placeholder="Name" name="name" id="name7" required="" onChange={handelChange}/>
    <div className="input-box mb--20">
        <input type="tel" id="phone7" className="phone-input" name="phone"
            placeholder="Mobile Number" required  onChange={handelChange}/>
    </div>
    <div className="t-and-c">
        <label><input id="checkbox-7" type="checkbox" required=""></input></label>
        <label htmlFor="checkbox-7"> I have reviewed all <Link href="termsandcondition.html" target="_blank"> Terms and
                                    Conditions</Link>.</label>
    </div>
   
     <button className="button"  onClick={submitForm} type="button">Download Project</button>
</div>
  )
}

export default Download
