import { useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { AuthData } from "../../context/AuthWrapper"
import { toast } from "react-toastify";

 const Login = () => {

     const navigate = useNavigate();
     const { login } = AuthData();
     const [ formData, setFormData ] = useReducer((formData, newItem) => { return ( {...formData, ...newItem} )}, {userName: "", password: ""})

     // Redirect to "/tasklist" if user is already authenticated
        const { user } = AuthData();
        useEffect(() => {
            if (user.isAuthenticated) {
                navigate("/tasklist");
            }
        }, [user, navigate]);

     const doLogin = async (e) => {
        e.preventDefault()
          try {
               await login(formData.userName, formData.password)
               navigate("/tasklist")

          } catch (error) {

               toast.error(error);
          }
          
     }

     return (
        <section className="login-page">
        <h2>Login</h2>
        <p>Enter Any UserName / Password must be "password"</p>
        <form onSubmit={doLogin} className="inputs">
            <div className="input">
                <input placeholder="Username" value={formData.userName} onChange={(e) => setFormData({ userName: e.target.value })} type="text" />
            </div>
            <div className="input mt-2">
                <input placeholder="Password" value={formData.password} onChange={(e) => setFormData({ password: e.target.value })} type="password" />
            </div>
            <div className="button">
                <input type="submit" className="btn btn-danger mt-2" value="Log in" />
            </div>
        </form>
    </section>
     )
}

export default Login