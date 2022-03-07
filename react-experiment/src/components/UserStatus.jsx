import { useState } from "react";

function UserStatus() {
  const [isLoggedin] = useState(true);
  const [userName] = useState('apoveda');

  // if / else 

  //   if (isLoggedin){
  //     return (
  //       <div>
  //         Welcome {userName}
  //       </div> 
  //     );
  //   } else {
  //     return (
  //       <div>
  //         Login 
  //       </div>
  //     );
  //   };

  // if ternario

  //   return (
  //     isLoggedin ?
  //       <div>
  //         Welcome {userName}
  //       </div>
  //     :
  //       <div>
  //         Login 
  //       </div>
  //   );

  // variable

  //   let status;

  //   if (isLoggedin) {
  //     status = <div>Welcome {userName} </div>
  //   } else {
  //     status = <div>Login</div>
  //   }
  //   return status;
  // }

  // logi operator 

  // return (isLoggedin && (
  //   <div>
  //     Welcome {userName}
  //   </div>
  // )) || (
  //   <div>
  //     Login 
  //   </div>
  // );

  // in line 

  return (
    <div>
      { isLoggedin ? (
        <span>Welcome {userName}</span>    
      ) : (
        <span>Login</span>
      )}
    </div>
  );
}

export default UserStatus;
