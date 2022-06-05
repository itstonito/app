import React, { useState, useEffect } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBContainer,
  MDBRow,
} from "mdb-react-ui-kit";
import SpaceMission from "./graphql";

function App() {
  const [data, setData] = useState([]);

  const loadSpaceMission = async () => {
    const spaceMission = await SpaceMission.getSpaceMission(10);
    setData(spaceMission);
  };

  useEffect(() => {
    loadSpaceMission();
  });

  return (
    <MDBContainer
      style={{
        margin: "auto",
        padding: "15px",
        maxWidth: "720px",
        alignContent: "center",
      }}
    >
      <MDBRow>
        <h2>Spacex Graphql API IN REACT</h2>
        {data.map((item) => (
            <MDBCard
              key={item.id}
              style={{ maxWidth: "22rem", maxHeight: "24rem" }}
            >
              <MDBCardImage
                src={
                  item && item.ships[0] && item.ships[0].image
                    ? item.ships[0].image
                    : "https://cdnuploads.aa.com.tr/uploads/Contents/2020/05/30/thumbs_b_c_a4a6996640e91d4ff86a71f5d9d9f84b.jpg?v=225920"
                }
                position="top"
                alt={item.mission_name}
              ></MDBCardImage>
              <MDBCardBody>
                <MDBCardTitle>{item.mission_name}</MDBCardTitle>
                <MDBCardText>{item.launch_site.site_name_long}</MDBCardText>
              </MDBCardBody>
            </MDBCard>
        ))}
      </MDBRow>
    </MDBContainer>
  );
}

export default App;
