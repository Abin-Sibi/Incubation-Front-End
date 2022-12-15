import React, { useEffect, useState } from "react";
import axios from "../../../axios";
import '../UserManage/UserManage.css'
import AdminHeader from "../AdminHeader/AdminHeader";
function UserMange() {
  const [state, setState] = useState([]);
  const [block, setBlock] = useState(false);
  useEffect(() => {
    axios.get("/api/user/getUserInfo").then((response) => {
        console.log("Now i am in getudser info",response,'jjjjjjjjjjjjjjjjjj')
      setState(response.data);
    });
  }, [block]);

  const blockUser = (id) => {
    console.log(id);
    axios.get(`/api/admin/blockUser/${id}`).then(({ data }) => {
      console.log(data);
       setBlock(!block);
    });
  };

  const unblockUser = (id) => {
    console.log(id);
    axios.get(`/api/admin/unblockUser/${id}`).then(({ data }) => {
      console.log(data);
      setBlock(!block);
    });
  };

  return (
    <>
    <AdminHeader></AdminHeader>
    <div className="row "  style={{ height: "100vh" }}>
     
      <div className="col-md-10 usertable">
        <h1>User Management</h1>
        <table class="table table-dark table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Eamil</th>
              <th scope="col">Options</th>
            </tr>
          </thead>
          <tbody>
            {state.map((data, i) => {
              return (
                <tr>
                  <th scope="row">{i + 1}</th>
                  <td>{data.email}</td>
                  <td>
                    {data.isBlocked === false ? (
                      <button
                        type="button"
                        onClick={() => blockUser(data._id)}
                        class="btn btn-primary"
                      >
                        BLOCK
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={() => unblockUser(data._id)}
                        class="btn btn-secondary"
                      >
                        UNBLOCK
                      </button>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
    
    </>
  );
}

export default UserMange;
