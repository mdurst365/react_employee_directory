import React from "react";
import TableBody from "./TableBody";

//this is a functional component that will recieve the user as props
function Table(props) {
    return (
        <div className="table m-5">
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Image</th>
                        <th scope="col">
                            <span
                                className={props.getHeaderClassName("first")}
                                onClick={() => {
                                    this.handleSortDirectionChange("first");
                                }}
                            >
                                First
                  </span>
                        </th>
                        <th scope="col">
                            <span
                                className={props.getHeaderClassName("last")}
                                onClick={() => this.handleSortDirectionChange("last")}
                            >
                                Last
                  </span>
                        </th>
                        <th scope="col">
                            <span
                                className={props.getHeaderClassName("email")}
                                onClick={() => this.handleSortDirectionChange("email")}
                            >
                                Email
                  </span>
                        </th>
                        {/* <th scope="col">
                            <span
                                className={props.getHeaderClassName("dob")}
                                onClick={() => this.handleSortDirectionChange("dob")}
                            >
                                DOB
                  </span>
                        </th> */}
                    </tr>
                </thead>
                  <TableBody users={ props.users }/>              
            </table>
        </div>
    )
}

export default Table;
