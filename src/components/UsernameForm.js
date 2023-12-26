import React, { useState } from "react";
import { useUserProfile } from "../context/UserProfileContext.js";
import "../styles/UsernameForm.scss";

function UsernameForm() {
   const { setUsername } = useUserProfile();

   const [inputValue, setInputValue] = useState();

   const handleUsername = (e) => {
      e.preventDefault();
      setUsername(inputValue);
      localStorage.getItem("wasd", 123132);
   };

   return (
      <form className="form-username" onSubmit={handleUsername}>
         <div>
            <label>Nickname:</label>
            <input
               placeholder="Write your nickname!"
               onChange={(e) => setInputValue(e.target.value)}
            />
         </div>
         <button type="submit">Next</button>
      </form>
   );
}

export default UsernameForm;
