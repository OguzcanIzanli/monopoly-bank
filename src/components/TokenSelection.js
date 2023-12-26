import React, { useState } from "react";
import images from "../assets/images/index.js";
import "../styles/TokenSelection.scss";
import UsernameForm from "./UsernameForm.js";
import { useUserProfile } from "../context/UserProfileContext.js";

function PictureSelection() {
   const { setTokenUrl } = useUserProfile();

   const [selectedToken, setSelectedToken] = useState();

   const handleClick = (e) => {
      setTokenUrl(e.target.src);
      setSelectedToken(e.target.alt);
      //   console.log(e.target); // Selected Token
   };

   return (
      <div className="token-selection">
         {!selectedToken ? <h1>Pick Your Token</h1> : <UsernameForm />}

         <div className="token-container">
            {Object.keys(images).map((token, key) => (
               <img
                  className={`token-image ${
                     token === selectedToken && "selected"
                  }`}
                  onClick={handleClick}
                  src={images[token]}
                  key={key}
                  alt={token}
                  tabIndex={key}
               />
            ))}
         </div>
      </div>
   );
}

export default PictureSelection;
