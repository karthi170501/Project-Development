
import { Avatar } from "@mui/material";
import React from "react";
import "./Suggestions.css";

function Suggestions() {
  return (
    <div className="suggestions">
      <div className="suggestions__title">Suggestions for you</div>
      <div className="suggestions__usernames">
        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>S</Avatar>
            </span>
            <div className="username__info">
              <span className="username">Sindhu</span>
              <span className="relation">New to Instagram</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>

        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>K</Avatar>
            </span>
            <div className="username__info">
              <span className="username">Karti</span>
              <span className="relation">New to Instagram</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>

        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>R</Avatar>
            </span>
            <div className="username__info">
              <span className="username">Raghu</span>
              <span className="relation">New to Instagram</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>

        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>S</Avatar>
            </span>
            <div className="username__info">
              <span className="username">Sai</span>
              <span className="relation">New to Instagram</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>
      </div>
    </div>
  );
}

export default Suggestions;
