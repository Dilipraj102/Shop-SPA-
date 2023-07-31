import { Link, useNavigate } from "react-router-dom"
import IShopLogin from "./ishopLogin"
import { useFormik } from "formik"
import axios from "axios"


export default function IShopRegister() {
    let navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            UserId: '',
            UserName: '',
            Password:'',
            Age: '',
            Mobile: '',
            Subscribed: true
        },
        onSubmit:Values=>{
            axios.post("http://localhost:4477/registeruser",Values);
            alert("Registed Successfully")
            navigate("/login")
        }
    })
    return (
        <div>
            <h2>Register New User</h2>
            <form onSubmit={formik.handleSubmit}>
                <h2>Register User</h2>
                <dl>
                    <dt>User Id</dt>
                    <dd><input type="text" value={formik.values.UserId} onChange={formik.handleChange} name="UserId" /></dd>
                    <dt>UserName</dt>
                    <dd><input type="text"  value={formik.values.UserName} onChange={formik.handleChange} name="UserName" /></dd>
                    <dt>Password</dt>
                    <dd><input type="password"  value={formik.values.Password} onChange={formik.handleChange} name="Password" /></dd>
                    <dt>Age</dt>
                    <dd><input type="number"  value={formik.values.Age} onChange={formik.handleChange} name="Age" /></dd>
                    <dt>Mobile</dt>
                    <dd><input type="text"  value={formik.values.Mobile} onChange={formik.handleChange} name="Mobile" /></dd>
                    <dt>Subscription</dt>
                    <dd><input type="checkbox"  checked={formik.values.Subscribed} onChange={formik.handleChange} name="Subscribed" /></dd>
                </dl>
                <button className="btn btn-primary">Register</button>
                <Link to="/login">Already have acoount?</Link>
            </form>
        </div>
    )
}