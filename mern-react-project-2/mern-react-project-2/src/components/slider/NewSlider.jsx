import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import { sliderItems } from "../../data";
import Classes from "./Slider.module.css";
import styled from "styled-components";

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  background-color: #${({ bg }) => bg};
`;

const Item = ({ item }) => {
  return (
    <Paper>
      <Slide bg={item.bg}>
        <div className={Classes["image_container"]}>
          <img src={item.img} alt="" />
        </div>
        <div className={Classes["info_container"]}>
          <h1>{item.title}</h1>
          <p>{item.desc}</p>
          <button>اشتر الآن</button>
        </div>
      </Slide>
    </Paper>
  );
};
const NewSlider = () => {
  return (
    <Carousel
      IndicatorIcon={false}
      indicatorContainerProps={{
        style: {
          display: "none",
        },
      }}
    >
      {sliderItems.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
};

export default NewSlider;
