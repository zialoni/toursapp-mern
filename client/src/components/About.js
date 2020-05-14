import React, { useState, useEffect } from "react";
import Axios from "axios";
import ProductImage from "./ProductImage";

function About(props) {
  const [Tour, setTour] = useState([]);

  const tourId = props.match.params.tourId;

  useEffect(() => {
    Axios.get(`/api/tour/tours_by_id?id=${tourId}&type=single`).then(
      (response) => {
        setTour(response.data[0]);
        console.log(response.data[0]);
      }
    );
  });

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h2>{Tour.city}</h2>
      </div>

      <div className="row px-5">
        <div className="card bg-dark text-white">
          <div className="card-img" style={{ opacity: "0.4", height: "50%" }}>
            <ProductImage detail={Tour} />
          </div>
          <div className="card-img-overlay p-5">
            <h5 className="card-name py-3">{Tour.name}</h5>
            <p className="card-text pt-5">{Tour.info}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
