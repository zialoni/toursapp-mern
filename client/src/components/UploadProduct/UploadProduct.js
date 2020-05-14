import React, { useState } from "react";
import FileUpload from "./FileUpload";
import Axios from "axios";

function UploadProduct(props) {
  const [CityValue, setCityValue] = useState("");
  const [NameValue, setNameValue] = useState("");
  const [InfoValue, setInfoValue] = useState("");
  const [Images, setImages] = useState([]);

  const onCityChange = (e) => {
    setCityValue(e.currentTarget.value);
  };

  const onNameChange = (e) => {
    setNameValue(e.currentTarget.value);
  };

  const onInfoChange = (e) => {
    setInfoValue(e.currentTarget.value);
  };

  const updateImages = (newImages) => {
    console.log(newImages);
    setImages(newImages);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!CityValue || !NameValue || !InfoValue || !Images) {
      return alert("fill in all the fields first");
    } else {
      const variables = {
        city: CityValue,
        name: NameValue,
        info: InfoValue,
        images: Images,
      };
      Axios.post("/api/tour/uploadTour", variables).then((response) => {
        if (response.data.success) {
          alert("product uploaded successfullty");
          props.history.push("/");
        } else {
          alert("failed to upload tour");
        }
      });
    }
  };

  return (
    <div style={{ maxWidth: "700px", margin: "auto" }}>
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <h1>Upload Travel Cites</h1>
      </div>
      <form onSubmit={onSubmit}>
        <div class="form-group">
          <label>City</label>
          <input
            type="text"
            class="form-control"
            value={CityValue}
            onChange={onCityChange}
          />
        </div>

        <br />
        <div class="form-group">
          <label>Name</label>
          <input
            type="text"
            class="form-control"
            value={NameValue}
            onChange={onNameChange}
          />
        </div>

        <br />
        <div class="form-group">
          <label>Info</label>
          <textarea
            type="text"
            class="form-control"
            value={InfoValue}
            onChange={onInfoChange}
          ></textarea>
        </div>
        {/*Drop Zone*/}
        <FileUpload refreshFunction={updateImages} />
        <br />
        <br />
        <button
          type="submit"
          className="form-control btn btn-primary"
          onClick={onSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default UploadProduct;
