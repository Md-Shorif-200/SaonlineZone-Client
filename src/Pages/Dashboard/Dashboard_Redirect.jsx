import React from 'react';

import { Navigate } from 'react-router-dom';


const Dashboard_Redirect = () => {

     const role = 'user'

      console.log(role);
      
 

  

                            

                    if(role == 'user'){
                           return <Navigate to='/dashboard/Find-Job'></Navigate>
                    }


};

export default Dashboard_Redirect;