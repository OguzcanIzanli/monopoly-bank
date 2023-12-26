import React from "react";
import { useState } from "react";
import "../styles/ProfileCard.scss";
import { useUserProfile } from "../context/UserProfileContext.js";

function BankBalance() {
   const { tokenUrl, username } = useUserProfile();

   const [cash, setCash] = useState("");
   const [cashBalance, setCashBalance] = useState(1500);

   const handleCash = (action) => {
      action === "add"
         ? setCashBalance((prev) => prev + Number(cash))
         : setCashBalance((prev) => prev - Number(cash));
      setCash("");
   };

   return (
      <div className="profile-card">
         <img src={tokenUrl} alt="" />

         <span>{username}</span>

         <label>
            Bank Balance: <span>{cashBalance} $</span>
         </label>

         <input
            value={cash}
            onChange={(e) => setCash(e.target.value)}
            type="number"
         />

         <div>
            <button className="addButton" onClick={() => handleCash("add")}>
               Add
            </button>
            <button
               className="subButton"
               onClick={() => handleCash("subtract")}
            >
               Subtract
            </button>
         </div>

         <button onClick={() => setCashBalance(1500)}>Reset</button>
      </div>
   );
}

export default BankBalance;
