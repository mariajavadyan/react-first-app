import React from 'react';


function UserList() {
    const people = [
       {
          id: 111738,
          firstName : "Maria",
          lastName : "Javadyan",
          phoneNum: 97234687
      },
      {
         id: 142738,
        firstName : "Anna",
        lastName : "Harutyunyan",
        phoneNum: 23346817
      },
      {
        id: 973618,
        firstName : "Armen",
        lastName : "Andryan",
        phoneNum: 27643913
      }
    ];

    const userToText = (data) => {
        return (
                <div key={data.id}>
                    <p>{data.id + data.firstName + data.lastName + data.phoneNum}</p>
                    <br/>
                </div>
            )
    }
  
    return (
      <div>
        { people.map(userToText) }
      </div>
    );
  }

  export default UserList;