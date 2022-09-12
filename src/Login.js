import React from "react";
import "./App.css";
import { FcGoogle } from "react-icons/fc";

const CLIENT_ID = "7f89b2f550be4859985a2771fa5c5fb9";
export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "http://localhost:3000/callback/";
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];
export const accessUrl = `${authEndpoint}?client_id=${CLIENT_ID}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;

export default function Login() {
  return (
    <div className="Login">
      <h1>Welcome & Enjoy</h1>
      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <button className="spotify">
       <a href={accessUrl}>
       Login with Spotify</a> 
      </button>
      
        <p>
          <span> Or</span>
        </p>

      <button className="goggle">
      <FcGoogle /> Login with Google
      </button>
    </div>
  );
}
