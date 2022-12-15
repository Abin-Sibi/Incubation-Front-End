import axios from "../../../axios";
import React, { useEffect, useState } from "react";
import AdminHeader from "../AdminHeader/AdminHeader"
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useCookies } from "react-cookie";
import jwt_decode from "jwt-decode";


function BookSlot() {
  const [cookies] = useCookies([]);
  const [info, setInfo] = useState([]);
  let [slots, setSlots] = useState({
    A: [],
    B: [],
    C: [],
    D: [],
    E: [],
    F: [],
    G: [],
    H: [],
  });
  const [choosedSlot, setChoosedSlot] = useState({});
  const [selectSlot, setSelectSlot] = useState();

  const generateError = (error) =>
    toast.error(error, {
      position: "top-right",
    });

  function getSlotsDetails() {
    axios.get("/api/admin/getSlots").then(({ data }) => {
      console.log(data[0]);
      setSlots(data[0]);
    });
  }

  useEffect(() => {
    console.log(info);
    getSlotsDetails();
    setis();
  }, [slots.isAlloted]);

  const setis = () => {
    axios.get("/api/admin/getApprovedCompanies").then((response) => {
      console.log(response.data);
      setInfo(response.data);
    });
  };

  const slotSelected = async() => {
    const token = cookies.jwt;
    const decoded = await jwt_decode(token);
    let userId = decoded.id;
    if(selectSlot){
      var data = {
        company: selectSlot,
        ...choosedSlot,
        isAlloted: selectSlot ?  true :false ,
        // id:userId
      }
    }else{
      console.log("else case")
      var data = {
        company: "",
        ...choosedSlot,
        isAlloted: false ,
        // id:userId
      };
    }
    
    console.log('liiiiiiiiiiii',data);
    axios.patch("/api/admin/bookSlot", data).then((response) => {
      console.log('abin is here');
      if (response.data.status) {
        console.log('abin is here top of getslots');
        getSlotsDetails();
        console.log('abin is here bottom of getslots');
        // setCompanyName(selectSlot);
      } else {
        console.log('abin is in a error');
        let error = "Something error occured";
        generateError(error);
      }
    });
  };
  return (
    <React.Fragment>

      <AdminHeader/>
      <div style={{display:"flex",justifyContent:"center"}}>
      <div className="row" style={{ height: "100vh" ,display:"flex",justifyContent:"space-between"}}>
     
     <div className="col-md-10">
       <h1>Book Slots</h1>
       <div className="d-flex ">
         <div className="d-flex mb-3 flex-fill text-center">
           {slots?.A?.map((slotItem, index) => {
             return (
               <div
                 onClick={() =>
                   setChoosedSlot({ slotName: "A", position: index })
                 }
                 data-bs-toggle="modal"
                 data-bs-target="#staticBackdrop"
                 key={index}
                 className="p-2 flex-fill text-white m-1"
                 style={{
                   height: "120px",
                   width: "150px",
                   background: (slotItem.company && " #889C9B") || "#5C8C46",
                 }}
               >
                 <p>{slotItem.company || slotItem.slot}</p>
               </div>
             );
           })}
         </div>

         <div className=" m-1" style={{ width: "15px" }}></div>
         <div className="d-flex mb-3 flex-fill text-center align-middle">
           {slots.B.map((slotItem, index) => {
             return (
               <div
                 data-bs-toggle="modal"
                 onClick={() =>
                   setChoosedSlot({ slotName: "B", position: index })
                 }
                 data-bs-target="#staticBackdrop"
                 key={index}
                 className="p-2 flex-fill text-white m-1"
                 style={{
                   height: "120px",
                   width: "150px",
                   background: (slotItem.company && " #889C9B") || "#5C8C46",
                 }}
               >
                 <p>{slotItem.company || slotItem.slot}</p>
               </div>
             );
           })}
         </div>
       </div>
       <div className=" m-1" style={{ width: "100%", height: "8px" }}></div>
       <div className="d-flex ">
         <div className="d-flex mb-3 flex-fill text-center">
           {slots.D.map((slotItem, index) => {
             return (
               <div
                 onClick={() =>
                   setChoosedSlot({ slotName: "D", position: index })
                 }
                 data-bs-toggle="modal"
                 data-bs-target="#staticBackdrop"
                 key={index}
                 className="p-2 flex-fill text-white m-1"
                 style={{
                   height: "120px",
                   width: "150px",
                   background: (slotItem.company && "#889C9B") || "#5C8C46",
                 }}
               >
                 <p>{slotItem.company || slotItem.slot}</p>
               </div>
             );
           })}
         </div>
         <div className=" m-1" style={{ width: "15px" }}></div>
         <div className="d-flex mb-3 flex-fill text-center align-middle">
           {slots.C.map((slotItem, index) => {
             return (
               <div
                 onClick={() =>
                   setChoosedSlot({ slotName: "C", position: index })
                 }
                 data-bs-toggle="modal"
                 data-bs-target="#staticBackdrop"
                 key={index}
                 className="p-2 flex-fill text-white m-1"
                 style={{
                   height: "120px",
                   width: "150px",
                   background: (slotItem.company && "#889C9B") || "#5C8C46",
                 }}
               >
                 <p>{slotItem.company || slotItem.slot}</p>
               </div>
             );
           })}
         </div>
         
       </div>
       <div className=" m-1" style={{ width: "100%", height: "8px" }}></div>
       <div className="d-flex ">
         <div className="d-flex mb-3 flex-fill text-center">
           {slots.E.map((slotItem, index) => {
             return (
               <div
                 onClick={() =>
                   setChoosedSlot({ slotName: "E", position: index })
                 }
                 data-bs-toggle="modal"
                 data-bs-target="#staticBackdrop"
                 key={index}
                 className="p-2 flex-fill text-white m-1"
                 style={{
                   height: "120px",
                   width: "150px",
                   background: (slotItem.company && "#889C9B") || "#5C8C46",
                 }}
               >
                 <p>{slotItem.company || slotItem.slot}</p>
               </div>
             );
           })}
         </div>
         <div className=" m-1" style={{ width: "15px" }}></div>
         <div className="d-flex mb-3 flex-fill text-center align-middle">
           {slots.F.map((slotItem, index) => {
             return (
               <div
                 onClick={() =>
                   setChoosedSlot({ slotName: "F", position: index })
                 }
                 data-bs-toggle="modal"
                 data-bs-target="#staticBackdrop"
                 key={index}
                 className="p-2 flex-fill text-white m-1"
                 style={{
                   height: "120px",
                   width: "150px",
                   background: (slotItem.company && "#889C9B") || "#5C8C46",
                 }}
               >
                 <p>{slotItem.company || slotItem.slot}</p>
               </div>
             );
           })}
         </div>
         
       </div>
       <div className=" m-1" style={{ width: "100%", height: "8px" }}></div>
       <div className="d-flex ">
         <div className="d-flex mb-3 flex-fill text-center">
           {slots.G.map((slotItem, index) => {
             return (
               <div
                 onClick={() =>
                   setChoosedSlot({ slotName: "G", position: index })
                 }
                 data-bs-toggle="modal"
                 data-bs-target="#staticBackdrop"
                 key={index}
                 className="p-2 flex-fill text-white m-1"
                 style={{
                   height: "120px",
                   width: "150px",
                   background: (slotItem.company && "#889C9B") || "#5C8C46",
                 }}
               >
                 <p>{slotItem.company || slotItem.slot}</p>
               </div>
             );
           })}
         </div>
         <div className=" m-1" style={{ width: "15px" }}></div>
         <div className="d-flex mb-3 flex-fill text-center align-middle">
           {slots.H.map((slotItem, index) => {
             return (
               <div
                 onClick={() =>
                   setChoosedSlot({ slotName: "H", position: index })
                 }
                 data-bs-toggle="modal"
                 data-bs-target="#staticBackdrop"
                 key={index}
                 className="p-2 flex-fill text-white m-1"
                 style={{
                   height: "120px",
                   width: "150px",
                   background: (slotItem.company && "#889C9B") || "#5C8C46",
                 }}
               >
                 <p>{slotItem.company || slotItem.slot}</p>
               </div>
             );
           })}
         </div>
         
       </div>
     </div>
   </div>
   {/* modal */}
   <div
     className="modal fade"
     id="staticBackdrop"
     data-bs-backdrop="static"
     data-bs-keyboard="false"
     tabIndex="-1"
     aria-labelledby="staticBackdropLabel"
     aria-hidden="true"
   >
     <div className="modal-dialog modal-dialog-scrollable">
       <div className="modal-content">
         <div className="modal-header">
           <h5 className="modal-title" id="exampleModalScrollableTitle">
             Choose Company
           </h5>
           <button
             type="button"
             className="btn-close"
             data-bs-dismiss="modal"
             aria-label="Close"
           ></button>
         </div>
         <div className="container">
           <div className="form-group">
             <select
               className="browser-default custom-select mb-3"
               onChange={(e) => setSelectSlot(e.target.value)}
             >
               {info.map((hello, index) => {
                 return (
                   <>
                     <option value={hello.company_name}>
                       {hello.company_name}
                     </option>
                   </>
                 );
               })}
               <option
                 
                 value=""
               >
                 Remove Company
               </option>
             </select>
           </div>
         </div>

         <div className="modal-footer">
           <Link
             onClick={() => {
               slotSelected();
             }}
             to="/admin/bookSlot"
             className="btn btn-primary"
             data-bs-dismiss="modal"
           >
             Submit
           </Link>
           <Link
             to="/admin/bookinSlots"
             type="button"
             className="btn btn-secondary"
             data-bs-dismiss="modal"
           >
             Cancel
           </Link>
         </div>
       </div>
     </div>
    
   </div>
      </div>
      
    </React.Fragment>
  );
}

export default BookSlot;
