
import React, { useState } from "react";
import axios from "axios";
import "./signin.css";
import HeadingComp from "../signup/HeadingComp";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
    const history = useNavigate();

    const [Inputs,setInputs] = useState({
        email:"",
        password:"",
    });

    const change = (e) => {
        const {name,value} =e.target;
        setInputs({...Inputs,[name]:value});
    };

    const submit = async (e) => {
        e.preventDefault();
        await axios
        .post(`http://localhost:1000/api/v1/signin`,Inputs)
        .then((response) => {
            console.log((response.data.others._id));
            history("/dailyjournal");
        });
    };
    return <div>
        <div className="signup">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 column col-left d-flex justify-content-center align-items-center"
                    >
                        <HeadingComp first="Sign" second={"In"}/>
                    </div>
                    <div className="col-lg-8 column d-flex justify-content-center align-items-center bg-primary">
                        <div className="d-flex flex-column w-100 p-5 ">
                           
                           
                            <input
                            className="p-2 my-3 input-signup"
                            type="email"
                            name="email"
                            placeholder="<Enter Your Email"
                            value={Inputs.email}
                            onChange={change}
                            />
    
                             <input
                            className="p-2 my-3 input-signup"
                            type="password"
                            name="password"
                            placeholder="<Enter Your Password"
                            value={Inputs.password}
                            onChange={change}
                            />
                            <button className="btn-signup p-2" onClick={submit}>
                                Sign In</button>
                        </div>
                    </div>
                    <div className="col-lg-4 column col-left d-flex justify-content-center align-items-center">
                      <HeadingComp first="Sign" second="In"/>
                    </div>
                </div>
            </div>
        </div>
    </div>;
};

export default SignIn;








// import React, { useState } from "react";
// import axios from "axios";
// import "./signin.css";
// import HeadingComp from "../signup/HeadingComp";
// import { useNavigate } from "react-router-dom";

// const SignIn = () => {
//     const history = useNavigate();
//     // const navigate = useNavigate();  // Correct usage of useNavigate

//     const [Inputs, setInputs] = useState({
//         email: "",
//         password: "",
//     });

//     const change = (e) => {
//         const { name, value } = e.target;
//         setInputs({ ...Inputs, [name]: value });
//     };

//     const submit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post("http://localhost:1000/api/v1/signin", Inputs);
//             console.log(response.data.others._id);
//             history("/dailyjournal");
//         } catch (error) {
//             console.error("Error during sign in:", error);
//         }
//     };

//     return (
//         <div>
//             <div className="signup">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-lg-4 column col-left d-flex justify-content-center align-items-center">
//                             <HeadingComp first="Sign" second="In" />
//                         </div>
//                         <div className="col-lg-8 column d-flex justify-content-center align-items-center bg-primary">
//                             <div className="d-flex flex-column w-100 p-5">
//                                 <input
//                                     className="p-2 my-3 input-signup"
//                                     type="email"
//                                     name="email"
//                                     placeholder="Enter Your Email"
//                                     value={Inputs.email}
//                                     onChange={change}
//                                 />
//                                 <input
//                                     className="p-2 my-3 input-signup"
//                                     type="password"
//                                     name="password"
//                                     placeholder="Enter Your Password"
//                                     value={Inputs.password}
//                                     onChange={change}
//                                 />
//                                 <button className="btn-signup p-2" onClick={submit}>
//                                     Sign In
//                                 </button>
//                             </div>
//                         </div>
//                         <div className="col-lg-4 column col-left d-flex justify-content-center align-items-center">
//                             <HeadingComp first="Sign" second="In" />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default SignIn;
