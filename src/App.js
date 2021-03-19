import React, { useState } from "react";
import "./styles.css";

var songsLists = {
  Pop: [
    {
      name: "Rolling in the deep",
      singer: "Adele",
      ratings: "4.5/5",
      link:
        "https://open.spotify.com/track/4OSBTYWVwsQhGLF9NHvIbR?si=8ED-SkaiQlasLUVXiwtK2A"
    },
    {
      name: "Royals",
      singer: "Lorde",
      ratings: "4.5/5",
      link:
        "https://open.spotify.com/track/7jLtMHiGyksHgRdTHgi1qa?si=TLLQzyD9TbebvcTrfsXNlQ"
    },
    {
      name: "Here with me",
      singer: "Marshmello and CHVRCHES",
      ratings: "4.2/5",
      link:
        "https://open.spotify.com/track/5icOoE6VgqFKohjWWNp0Ac?si=CJCMETGLR02GsJasYLI1lQ"
    },
    {
      name: "Darkside",
      singer: "Alan Walkar",
      ratings: "4.0/5",
      link:
        "https://open.spotify.com/track/6SRWhUJcD2YKahCwHavz3X?si=ATD_xp-ISm-w3MPnzuMVEw"
    }
  ],
  R_B: [
    {
      name: "That's what I like",
      singer: "Bruno Mars",
      ratings: "4.3/5",
      link:
        "https://open.spotify.com/track/0KKkJNfGyhkQ5aFogxQAPU?si=E6Za7I-8SZmEz4FtOJrnzA"
    },
    {
      name: "Just the way you are",
      singer: "Bruno Mars",
      ratings: "5/5",
      link:
        "https://open.spotify.com/track/7BqBn9nzAq8spo5e7cZ0dJ?si=HxB0Fgj4RZWBSFTlBgAMKg"
    },
    {
      name: "Its you",
      singer: "Ali Gatie",
      ratings: "4.0/5",
      link:
        "https://open.spotify.com/track/5DqdesEfbRyOlSS3Tf6c29?si=9r6PJowRSw-n2xgRyfJvsA"
    }
  ],
  Electronic: [
    {
      name: "Closer",
      singer: "The Chainsmokers",
      ratings: "4.5/5",
      link:
        "https://open.spotify.com/track/7BKLCZ1jbUBVqRi2FVlTVw?si=Q89jMjYpQLKisC7S4M_UXQ"
    },
    {
      name: "Titanium",
      singer: "David Guetta ft.Sia",
      ratings: "4.1/5",
      link:
        "https://open.spotify.com/track/4OQfIweaFWNTT5NkJ04txq?si=xpHLLH0XRgqGrKThFGzycw"
    },
    {
      name: "Lily",
      singer: "Alan Walkar",
      ratings: "4.2/5",
      link:
        "https://open.spotify.com/track/0lks2Kt9veMOFEAPN0fsqN?si=cLKRqwk4Q4qQdCzZ-3hxEw"
    },
    {
      name: "Let me love you",
      singer: "DJ Snake ft.Justin Bieber",
      ratings: "4.0/5",
      link:
        "https://open.spotify.com/track/0lYBSQXN6rCTvUZvg9S0lU?si=G9Hwr6pATb-hZ3SUYhYjtA"
    }
  ]
};

export default function App() {
  var [activeGenre, setGenreList] = useState("Pop");

  //convert obj to array to show in the view
  var genreList = Object.keys(songsLists);

  function tabClickHandler(currentTab) {
    // var activeGenre = songsLists[currentTab];
    console.log("clicked", activeGenre);
    console.log(songsLists);
    setGenreList(currentTab);
  }
  return (
    <div className="App">
      <div className="main-container">
        <h1>
          <i className="fas fa-music" style={{ color: "#33cc33" }}></i> Tune-In
        </h1>
        <p style={{ padding: "10px" }}>
          Checkout my favorite songs. Select a genre to get started.
        </p>
        <div className="container">
          <div className="tabs">
            {genreList.map((tab) => {
              //add active class
              var tabclass = "tab";
              if (activeGenre === tab) {
                tabclass = "tab active";
              }

              return (
                <button
                  key={tab}
                  className={tabclass}
                  onClick={() => tabClickHandler(tab)}
                >
                  {tab}
                </button>
              );
            })}
          </div>

          <div className="genre-list">
            {songsLists[activeGenre].map((genre) => {
              return (
                <div className="card" key={genre.name}>
                  <h2>{genre.name}</h2>
                  <p>
                    <i class="far fa-user" style={{ margin: "5px 0" }}>
                      &nbsp;{genre.singer}
                    </i>
                  </p>
                  <div className="rating">
                    <i
                      className="fas fa-star"
                      style={{
                        color: "gold",
                        margin: "10px 0 0",
                        fontSize: "18px"
                      }}
                    >
                      &nbsp; {genre.ratings}
                    </i>
                  </div>
                  <div className="spotifylink">
                    listen&gt;&gt;&nbsp;
                    <a
                      href={genre.link}
                      rel="noreferrer"
                      target="_blank"
                      className="btn-spotify"
                    >
                      <i
                        className="fab fa-spotify"
                        style={{
                          color: "#33cc33",
                          float: "right",
                          fontSize: "2rem"
                        }}
                      ></i>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <footer>
        <a
          href="https://chanchalrajput.netlify.app/"
          rel="noreferrer"
          target="_blank"
        >
          @Chanchal Rajput
        </a>
      </footer>
    </div>
  );
}
