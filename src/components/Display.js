import React from "react";

function Display({ data }) {
  return (
    <table >
      <thead>
        <tr>
          <th>Sno</th>
          <th>Profile Pic</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Gender</th>
          <th>E-mail</th>
          <th>Username</th>
          <th>Domain</th>
          <th>IP</th>
          <th>University</th>
        </tr>
        
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{<img src={item.image} alt="profile pic" height={50}></img>}</td>
            <td>{item.firstName}</td>

            <td>{item.lastName}</td>
            <td>{item.gender}</td>
            <td>{item.email}</td>

            <td>{item.username}</td>
            <td>{item.domain}</td>
            <td>{item.ip}</td>
            <td>{item.university}</td>
          </tr>
        ))}
        

      </tbody>
    </table>
  );
}

export default Display;
