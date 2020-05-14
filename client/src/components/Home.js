import React, { useState, useEffect } from "react";
import Axios from "axios";

function Home() {
  const [Tours, setTours] = useState([]);

  useEffect(() => {
    Axios.post("/api/tour/getTours").then((response) => {
      if (response.data.success) {
        setTours(response.data.tours);
        console.log(response.data.tours);
      } else {
        alert("Failed to fetch tour datas");
      }
    });
  }, []);

  const renderCards = Tours.map((tour, index) => {
    return (
      <div class="card-md-4 m-3">
        <div class="card" style={{ width: "18rem" }}>
          <a href={`/tour/${tour._id}`}>
            {tour.images.map((image, index) => (
              <div key={index}>
                <img
                  style={{ width: "100%", maxHeight: "150px" }}
                  src={`http://localhost:5000/${image}`}
                  alt="tourImage"
                />
              </div>
            ))}
          </a>
          <div class="card-body">
            <h5 class="card-title">{tour.city}</h5>
            <p class="card-text">{tour.name}</p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div style={{ width: "75%", margin: "3rem auto" }}>
      <div style={{ textAlign: "center" }}>
        <h2>{}</h2>
      </div>
      {Tours.length === 0 ? (
        <div
          style={{
            display: "flex",
            height: "300px",
            justifyContent: "center",
            alignItems: "center",
          }}
        ></div>
      ) : (
        <div class="row justify-content-center align-items-center">
          {renderCards}
        </div>
      )}
    </div>
  );
}

export default Home;
