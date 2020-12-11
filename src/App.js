import React, { useState } from "react";
import "./styles.css";

const punjabi = {
  Prada: "5/5",
  Sakhiyaan: "4.8/5",
  "Ik Tera": "4.7/5"
};
const bollwood = {
  "Tum Hi Ho": "4.5/5",
  Bekhayali: "4.3/5",
  "Dil Diyaan Gallan": "4.0/5"
};
const qawwali = {
  "Chhaap Tilak Sab": "5/5",
  "Sanu Ik Pal Chain Na Aave": "4.5/5",
  "Nit Khair Manga": "4.0/5"
};

var genre1List = Object.keys(punjabi);
var genre2List = Object.keys(bollwood);
var genre3List = Object.keys(qawwali);

export default function App() {
  var [genreList, setGenreList] = useState(genre1List);
  var [genreObject, setGenreObject] = useState(punjabi);

  function genreClickHandler(event) {
    var userInput = event.target.value;

    if (userInput === "punjabi") {
      genreList = genre1List;
      genreObject = punjabi;
    }
    if (userInput === "bollwood") {
      genreList = genre2List;
      genreObject = bollwood;
    }
    if (userInput === "qawwali") {
      genreList = genre3List;
      genreObject = qawwali;
    }
    setGenreList(genreList);
    setGenreObject(genreObject);
  }

  return (
    <div className="App">
      <h1>
        <span
          style={{
            backgroundColor: "white",
            borderRadius: "2rem",
            padding: "0.3rem",
            marginRight: "0.3rem"
          }}
        >
          🎼
        </span>{" "}
        best music
      </h1>

      <h3>select a genre to see the popular songs</h3>

      <button
        style={{
          padding: "0.5rem 0.5rem",
          margin: "1rem",
          marginLeft: "auto",
          fontFamily: "inherit",
          backgroundColor: "white",
          borderRadius: "0.5rem",
          fontSize: "large",
          fontWeight: "bold"
        }}
        onClick={genreClickHandler}
        value="punjabi"
      >
        Punjabi
      </button>

      <button
        style={{
          padding: "0.5rem 0.5rem",
          margin: "1rem",
          marginLeft: "auto",
          fontFamily: "inherit",
          backgroundColor: "white",
          borderRadius: "0.5rem",
          fontSize: "large",
          fontWeight: "bold"
        }}
        onClick={genreClickHandler}
        value="bollwood"
      >
        Bollwood
      </button>

      <button
        style={{
          padding: "0.5rem 0.5rem",
          margin: "1rem",
          marginLeft: "auto",
          fontFamily: "inherit",
          backgroundColor: "white",
          borderRadius: "0.5rem",
          fontSize: "large",
          fontWeight: "bold"
        }}
        onClick={genreClickHandler}
        value="qawwali"
      >
        Qawwali
      </button>

      <ul style={{ listStyleType: "none", paddingInlineStart: "0px" }}>
        {genreList.map(function (item) {
          return (
            <li
              style={{
                padding: "1rem",
                border: "1px solid lightgray",
                textAlign: "left",
                fontSize: "1.5rem",
                margin: "1rem 0rem",
                borderRadius: "0.5rem",
                width: "70%"
              }}
            >
              {item}
              <div style={{ fontSize: "1rem" }}>{genreObject[item]}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
