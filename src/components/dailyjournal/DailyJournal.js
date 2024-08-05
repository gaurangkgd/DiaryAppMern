import React, { useState } from "react";
import "./dailyjournal.css";
import DailyJournalCards from "./DailyJournalCards";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const DailyJournal = () => {
    const [Inputs,setInputs] = useState({title:"",body:""});
    const [Array,setArray] = useState([]);

    const show = () =>{
        document.getElementById("textarea").style.display = "block";
    };
    const change =(e) => {
        const {name,value} = e.target;
        setInputs({...Inputs,[name]:value});
    };
    const submit = () =>{
        if(Inputs.title ==="" || Inputs.body ===""){
            toast.error("Title or Body is empty");
        }else{
            setArray([...Array,Inputs]);
            setInputs({title:"",body:""});
            toast.success("Your Work is Added");
            // toast.error("Your Work is not saved ! Please SignUp");
        } 
    };

    const del = (id) => {
        console.log(id);
        Array.splice(id,"1");
        setArray([...Array]);
    };

    // const dis = (value) => {
    //     console.log(value);
    //     document.getElementsById("todo-update").style.display =value;
    // };




    return (
        <>
        <div className="todo">
            <ToastContainer/>
            <div className="todo-main container d-flex justify-content-center align-items-center my-4 flex-column">
                <div d-flex flex-column todo-inputs-div w-50 p-1>
                    <input
                    type="text"
                     placeholder="TITLE"
                     className="my-2 p-2 todo-inputs"
                     onClick={show}
                     name="title"
                     value={Inputs.title}
                     onChange={change}
                    />
                    <textarea 
                    id="textarea"
                    type="text"
                    placeholder="BODY"
                    name="body"
                    className="p-2 todo-inputs"
                    value={Inputs.body}
                    onChange={change}
                    />
                </div>
                <div className=" w-50 d-flex justify-content-end my-3"> <button className="home-btn px-2 py-1" id="gk"  onClick={submit}>Add</button>
                </div>
            </div>
            <div className="todo-body">
                <div className="container-fluid">
                    <div className="row ">
                    {Array && 
                        Array.map((item,index) => (
                            <div className="col-lg-3 col-10 mx-5 my-2" key={index}>
                            <DailyJournalCards title={item.title} body={item.body} id={index} delid={del}
                    
                            />
                        </div>
                       ))}
                    </div>
                </div>
            </div>
        </div>
    </>
    );
};

export default DailyJournal;
















// import React, { useState } from "react";
// // import Update from "./Update";
// import "./dailyjournal.css";
// import DailyJournalCards from "./DailyJournalCards";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const DailyJournal = () => {
//     const [inputs, setInputs] = useState({ title: "", body: "" });
//     const [array, setArray] = useState([]);

//     const show = () => {
//         document.getElementById("textarea").style.display = "block";
//     };

//     const change = (e) => {
//         const { name, value } = e.target;
//         setInputs({ ...inputs, [name]: value });
//     };

//     const submit = () => {
//         if (!inputs.title || !inputs.body) {
//             toast.error("Title or Body is empty");
//         } else {
//             setArray([...array, inputs]);
//             setInputs({ title: "", body: "" });
//             toast.success("Your Work is Added");
//             // toast.error("Your Work is not saved! Please SignUp");
//         }
//     };

//     const del = (id) => {
//         setArray(array.filter((_, index) => index !== id));
//     };

//     // const dis = (value) => {
//     //     document.getElementById("todo-update").style.display = value;
//     // };

//     return (
//             <div className="todo">
//                 <ToastContainer />
//                 <div className="todo-main container d-flex justify-content-center align-items-center my-4 flex-column">
//                     <div className="d-flex flex-column todo-inputs-div w-50 p-1">
//                         <input
//                             type="text"
//                             placeholder="TITLE"
//                             className="my-2 p-2 todo-inputs"
//                             onClick={show}
//                             name="title"
//                             value={inputs.title}
//                             onChange={change}
//                         />
//                         <textarea
//                             id="textarea"
//                             type="text"
//                             placeholder="BODY"
//                             name="body"
//                             className="p-2 todo-inputs"
//                             value={inputs.body}
//                             onChange={change}
//                         />
//                     </div>
//                     <div className="w-50 d-flex justify-content-end my-3">
//                         <button className="home-btn px-2 py-1" id="gk" onClick={submit}>Add</button>
//                     </div>
//                 </div>
//                 <div className="todo-body">
//                     <div className="container-fluid">
//                         <div className="row">
//                             {array &&
//                                 array.map((item, index) => (
//                                     <div className="col-lg-3 col-10 mx-5 my-2" key={index}>
//                                         <DailyJournalCards title={item.title} body={item.body} id={index} delid={del} />
//                                     </div>
//                                 ))}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             // <>
//             // <div className="todo-update" id="todo-update">
//             //     <div className="container update">
//             //         <Update display={dis} />
//             //     </div>
//             // </div>
//         // </>
//     );
// };

// export default DailyJournal;








// import React, { useState } from "react";
// import Update from "./Update";
// import "./dailyjournal.css";
// import DailyJournalCards from "./DailyJournalCards";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const DailyJournal = () => {
//     const [inputs, setInputs] = useState({ title: "", body: "" });
//     const [array, setArray] = useState([]);
//     const [isUpdating, setIsUpdating] = useState(false);
//     const [currentIndex, setCurrentIndex] = useState(null);

//     const show = () => {
//         document.getElementById("textarea").style.display = "block";
//     };

//     const change = (e) => {
//         const { name, value } = e.target;
//         setInputs({ ...inputs, [name]: value });
//     };

//     const submit = () => {
//         if (!inputs.title || !inputs.body) {
//             toast.error("Title or Body is empty");
//         } else {
//             setArray([...array, inputs]);
//             setInputs({ title: "", body: "" });
//             toast.success("Your Work is Added");
//             // toast.error("Your Work is not saved! Please SignUp");
//         }
//     };

//     const del = (id) => {
//         setArray(array.filter((_, index) => index !== id));
//     };

//     // const dis = (value) => {
//     //     document.getElementById("todo-update").style.display = value;
//     // };

//     const handleUpdateClick = (index) => {
//         setInputs(array[index]);
//         setCurrentIndex(index);
//         setIsUpdating(true);
//         dis("block");
//     };

//     const handleUpdate = (updatedInputs) => {
//         const updatedArray = array.map((item, index) =>
//             index === currentIndex ? updatedInputs : item
//         );
//         setArray(updatedArray);
//         setInputs({ title: "", body: "" });
//         setIsUpdating(false);
//         dis("none");
//     };

//     return (
//         <>
//             <div className="todo">
//                 <ToastContainer />
//                 <div className="todo-main container d-flex justify-content-center align-items-center my-4 flex-column">
//                     <div className="d-flex flex-column todo-inputs-div w-50 p-1">
//                         <input
//                             type="text"
//                             placeholder="TITLE"
//                             className="my-2 p-2 todo-inputs"
//                             onClick={show}
//                             name="title"
//                             value={inputs.title}
//                             onChange={change}
//                         />
//                         <textarea
//                             id="textarea"
//                             type="text"
//                             placeholder="BODY"
//                             name="body"
//                             className="p-2 todo-inputs"
//                             value={inputs.body}
//                             onChange={change}
//                         />
//                     </div>
//                     <div className="w-50 d-flex justify-content-end my-3">
//                         <button className="home-btn px-2 py-1" id="gk" onClick={submit}>Add</button>
//                     </div>
//                 </div>
//                 <div className="todo-body">
//                     <div className="container-fluid">
//                         <div className="row">
//                             {array &&
//                                 array.map((item, index) => (
//                                     <div className="col-lg-3 col-10 mx-5 my-2" key={index}>
//                                         <DailyJournalCards
//                                             title={item.title}
//                                             body={item.body}
//                                             id={index}
//                                             delid={del}
//                                             display={() => handleUpdateClick(index)}
//                                         />
//                                     </div>
//                                 ))}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             {isUpdating && (
//                 <div className="todo-update" id="todo-update">
//                     <div className="container update">
//                         <Update
//                             display={dis}
//                             inputs={inputs}
//                             setInputs={setInputs}
//                             handleUpdate={handleUpdate}
//                         />
//                     </div>
//                 </div>
//             )}
//         </>
//     );
// };

// export default DailyJournal;

//Update


// import React from "react";

// const Update =({display}) => {
//     return (
//     <div className="p-5 d-flex justify-content-center align-items-start flex-column update">
//         <h3>Update Your Work</h3>
//         <input type="text" className="todo-inputs my-4 w-100 p-3" />
//         <textarea className="todo-inputs w-100 p-3"/>
//         <div>
//         <button className="btn btn-dark my-4">UPDATE</button>
//         <button className="btn btn-danger my-4 mx-3" onClick={() => display("none")}>Close</button>
//         </div>

       
//     </div>
//     );
// };

// export default Update;

