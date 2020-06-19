import React, {useEffect} from "react";
import {useHistory, useLocation} from "react-router-dom";
import { API_URL } from "../../utils/urls"

export const LoginGoogle: React.FC = () => {
   const history = useHistory();
   const location = useLocation();

   useEffect(() => {
      fetch(`${API_URL}/users/login/google/callback${location.search}`, { headers: new Headers({ accept: 'application/json' }) })
         .then((response) => {
            if (response.ok) {
               return response.json();
            }
            throw new Error('Something went wrong!');
         })
         .then((data) => {
            sessionStorage.setItem("data", data)
            history.push("/login")
         })
         .catch((error) => {
            console.log(error)
         });
   }, [])

   return (
      <div className="">
         google
      </div>
   );
};