import React from "react";

function TableBody (props) {
    return (
    <tbody>
        {props.users.map((user) => {
            return (
                <tr key={user.login.uuid}>
                    <td><img src={user.picture.medium} /></td>
                    <td>{user.name.first}</td>
                    <td>{user.name.last}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                </tr>
            )
        })}
    </tbody>)
}

export default TableBody;