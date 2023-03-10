import React, {
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useState,
  } from "react";
  import { UserData } from "../../../store/DbContext";
  import Dropdown from "react-bootstrap/Dropdown";
  import axios from "../../../axios";
  import Hr from "./Hr";
  
  function Pending(props) {
    const [allApp, setAllApp] = useState([]);
    // const { application } = useContext(UserData);
    const [selectApp, setSelectApp] = useState({});
    const [state, setState] = useState(false);
    const [selectedApplication, setSelectedApplication] = useState({});
  
    const approveApplication = (element) => {
      axios
        .get(`/api/admin/applicationApprove/${element._id}`)
        .then((response) => {
          props.application();
          setState(true);
        });
    };
  
    useEffect(() => {
      hi();
      setState(false)
    }, [state]);
    var hi = function () {
      axios.get("/api/admin/getApplicationList").then((response) => {
        console.log("hiiiii");
        setAllApp(response.data);
      });
    };
    
    const openModel = (application) => {
        console.log(application);
        setSelectedApplication(application);
        console.log(selectedApplication);
      };
  
    // useEffect(()=>{
    //   console.log(selectApp);
    // },[selectApp])
    return (
      <div className="pending-application">
        <h1 className="mx-2">APPLICATIONS</h1>
  
        <table className="table align-middle mb-0 bg-white table-bordered">
          <thead className="bg-light text-center">
            <tr>
              <th>No</th>
              <th>Company name</th>
              <th>Company details</th>
              <th>View</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {allApp.map((datas, i) => {
              return (
                <tr>
                  <th scope="row">{i + 1}</th>
                  <td key={i}>{datas.company_name}</td>
                  <td key={i}>{datas.Discribe_Your_Company_And_Products}</td>
                  <td>
                          <button
                            type="button"
                            class="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                            onClick={() => openModel(datas)}
                          >
                            Open
                          </button>

                          <div
                            class="modal fade"
                            id="exampleModal"
                            tabindex="-1"
                            aria-labelledby="exampleModalLabel"
                            aria-hidden="true"
                          >
                            <div class="modal-dialog">
                              <div class="modal-content">
                                <div class="modal-header">
                                  <h5
                                    class="modal-title"
                                    id="exampleModalLabel"
                                  >
                                    DETAILED VIEW
                                  </h5>
                                  <button
                                    type="button"
                                    class="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                  ></button>
                                </div>
                                <div class="modal-body">
                                  <div id="hello">
                                    <h4
                                      className="mb-1"
                                      style={{ color: "#35558a" }}
                                    >
                                      {selectedApplication.company_name}
                                    </h4>
                                    <Hr />
                                    <div className="d-flex justify-content-between">
                                      <p className="small">Client Name</p>
                                      <p className="small">
                                        {selectedApplication.name}
                                      </p>
                                    </div>
                                    <Hr />
                                    <div className="d-flex justify-content-between">
                                      <p className="small">Phone</p>
                                      <p className="small">
                                        {selectedApplication.phone}
                                      </p>
                                    </div>
                                    <Hr />
                                    <div className="d-flex justify-content-between">
                                      <p className="small">Email</p>
                                      <p className="small">
                                        {selectedApplication.email}
                                      </p>
                                    </div>
                                    <Hr />
                                    <div className="d-flex justify-content-between">
                                      <p className="small">Address</p>
                                      <p className="small">
                                        {selectedApplication.address},
                                        {selectedApplication.city},
                                        {selectedApplication.state}
                                      </p>
                                    </div>
                                    <Hr />
                                    <div className="d-flex justify-content-between">
                                      <p className="small">
                                        Discribe Your Team and Background
                                      </p>
                                      <p className="small">
                                        {
                                          selectedApplication.Discribe_Your_Company_And_Products
                                        }
                                      </p>
                                    </div>
                                    <Hr />
                                    <div className="d-flex justify-content-between">
                                      <p className="small">
                                        Who are your competitors and competative
                                        advantage?
                                      </p>
                                      <p className="small">
                                        {
                                          selectedApplication.competitive_advantage
                                        }
                                      </p>
                                    </div>
                                    <Hr />
                                    <div className="d-flex justify-content-between">
                                      <p className="small">
                                        How do you market or plan to market your
                                        product and sevieces?
                                      </p>
                                      <p className="small">
                                        {selectedApplication.market_plan}
                                      </p>
                                    </div>
                                    <Hr />
                                    <div className="d-flex justify-content-between">
                                      <p className="small">
                                        What is the potential market size of the
                                        product?
                                      </p>
                                      <p className="small">
                                        {selectedApplication.market_size}
                                      </p>
                                    </div>
                                    <Hr />
                                    <div className="d-flex justify-content-between ">
                                      <p className="small">Company Logo</p>
                                      {
                                        <img
                                          style={{ width: "50px" }}
                                          src={`${axios}/public/uploads/${selectedApplication._id}.jpg`}
                                          alt="logo"
                                        />
                                      }
                                    </div>
                                    <Hr />
                                    <div className="d-flex justify-content-between">
                                      <p className="small">
                                        Discribe the problem you are trying to
                                        solve
                                      </p>
                                      <p className="small">
                                        {selectedApplication.problem}
                                      </p>
                                    </div>
                                    <Hr />
                                    <div className="d-flex justify-content-between">
                                      <p className="small">
                                        What is uniqure about your solution?
                                      </p>
                                      <p className="small">
                                        {selectedApplication.solution}
                                      </p>
                                    </div>
                                    <Hr />
                                    <div className="d-flex justify-content-between">
                                      <p className="small">
                                        What is your value proposition for the
                                        customer?
                                      </p>
                                      <p className="small">
                                        {selectedApplication.revenue_model}
                                      </p>
                                    </div>
                                    <Hr />
                                    <div className="d-flex justify-content-between">
                                      <p className="small">
                                        Explain your revenue model
                                      </p>
                                      <p className="small">
                                        {selectedApplication.proposal}
                                      </p>
                                    </div>
                                    <Hr />
                                    <div className="d-flex justify-content-between">
                                      <p className="small">
                                        Discribe Your Team and Background
                                      </p>
                                      <p className="small">
                                        {
                                          selectedApplication.team_and_background
                                        }
                                      </p>
                                    </div>
                                    <Hr />
                                  </div>
                                </div>
                                <div class="modal-footer">
                                  <button
                                    type="button"
                                    class="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                  >
                                    Close
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                  <td>
                    {datas.isApproved === false ? (
                      <>
                        <Dropdown>
                          <Dropdown.Toggle variant="warning" id="dropdown-basic">
                            Pending
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item
                              onClick={() => approveApplication(datas)}
                            >
                              Approve
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </>
                    ) : (
                      <p>Approved</p>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
  
  export default Pending;