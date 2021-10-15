import React from "react";
import "./OnlineCourses.css";
import {MultiCourse} from ".././MultiCourse";
import { Dropdown } from "react-bootstrap";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardSubtitle,
} from "reactstrap";

const OnlineCourses = () => {
  const onlineCard = (oCard) => {
    return (
      <div className="courses">
        <div>
          <Card>
            <CardImg className="onlineImage" src={oCard.image} />
            <CardBody>
              <CardSubtitle
                className="onlineTitle"
                tag="h6"
                className="mb-2 text-muted"
              >
                {oCard.title}
              </CardSubtitle>
              <CardText className="onlinePrice">{oCard.price}</CardText>
            </CardBody>
          </Card>
        </div>
      </div>
    );
  };

  return (
    <div className="onlineCourses">
      <div className="filterContainer">
        <div className="filter">
          <h5>Filter By </h5>
          <hr />
          <p className="price">Price</p>
          <div class="slidecontainer">
            <br />
          Rs199.00<input type="range" min="1" max="100" id="myRange" />Rs7,244.00
          </div>
          <hr />
        </div>
      </div>
      <div className="courseBody">
        <div className="sortBy">
          <Dropdown className="Dropdown">
            <Dropdown.Toggle id="dropdown-basic">
              Sort by  
            </Dropdown.Toggle>
            <Dropdown.Toggle id="dropdown-basic">
              Add Cart
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Newest</Dropdown.Item>
              <Dropdown.Item href="#/action-2">
                Price (low to high)
              </Dropdown.Item>
              <Dropdown.Item href="#/action-3">
                Pricee (high to low)
              </Dropdown.Item>
              <Dropdown.Item href="#/action-4">Name A-Z</Dropdown.Item>
              <Dropdown.Item href="#/action-5">Name Z-A</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="coursesCard">
          <div className="cardItems">{MultiCourse.map(onlineCard)}</div>
        </div>
        <div className="onlineBtn">
          <button className="onlineLMBtn">Load More</button>
        </div>
      </div>
    </div>
  );
};

export default OnlineCourses;