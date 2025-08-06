import React from 'react';

import { Navigate } from 'react-router-dom';


const Dashboard_Redirect = () => {

     const role = 'admin'

      console.log(role);
      
 

  

                            

                    if(role == 'admin'){
                           return <Navigate to='/dashboard/admin-menu'></Navigate>
                    }


};

export default Dashboard_Redirect;