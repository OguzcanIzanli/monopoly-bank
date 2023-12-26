import React from "react";
import PictureSelection from "../components/TokenSelection";
import ProfileCard from "../components/ProfileCard.js";
import "../styles/Home.scss";

import { useUserProfile } from "../context/UserProfileContext.js";

function Home() {
   const { username } = useUserProfile();

   return (
      <div className="home-container">
         {!username ? <PictureSelection /> : <ProfileCard />}
      </div>
   );
}

export default Home;
