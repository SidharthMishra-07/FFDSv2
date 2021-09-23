import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Modal,Button } from "react-bootstrap";
import "./Matches.css";
function MyVerticallyCenteredModal(props) {
    return (
      <Modal 
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body >
          <h4>Centered Modal</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ex optio obcaecati, officiis deserunt modi aperiam accusamus accusantium soluta totam vitae similique sapiente nihil vel inventore eum in, sit animi ut delectus esse voluptas excepturi neque sunt? Laborum sit nostrum temporibus laudantium impedit doloremque optio tempora possimus ut, est quaerat recusandae quibusdam dignissimos provident, explicabo repellendus dolore? Ex velit, possimus quis quam temporibus doloremque nobis. Labore neque inventore iusto veniam, dolorum ipsa nihil facilis quod nobis? Error cupiditate sit similique tenetur fugit distinctio fuga eveniet eligendi porro voluptas, enim, maiores vero hic, magnam rerum placeat dolor. Facere, inventore. Sequi, qui!
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide} variant="success">Accept </Button>
          <Button onClick={props.onHide} variant="danger">Reject</Button>
        </Modal.Footer>
      </Modal>
    );
  }
const Matches = () => {

  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
    <div className="container mt-4">
      <h2 className="text-center MatchingTitle">Swipe and Start Matching</h2>
    </div>
    <div className="container mt-5 mb-5">
      <Carousel>
        <Carousel.Item  onClick={() => setModalShow(true)}>
          <img
            className="d-block w-100"
            src="https://source.unsplash.com/WLUHO9A_xik/500x500"
            alt="First slide"
          />
          
        </Carousel.Item >
        <Carousel.Item onClick={() => setModalShow(true)}>
          <img
            className="d-block w-100"
            src="https://source.unsplash.com/user/erondu/500x500"
            alt="Second slide"
          />

          
        </Carousel.Item>
        <Carousel.Item onClick={() => setModalShow(true)}>
          <img
            className="d-block w-100"
            src="https://source.unsplash.com/user/erondu/500x500"
            alt="Third slide"
          />
 
        </Carousel.Item>
      </Carousel>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
    
    <div className="footer">
        <div className="row">
          <div className="footer col-lg-6">
            <div className="cl">
              <h4> Connect With Us </h4>
            </div>
          </div>

          <div class="footer-content">
            <h4>Follow us on</h4>
            <ul class="socials">
              <li><a href="https://www.facebook.com/codechefvit/"><i class="fa fa-facebook-square"></i></a></li>
              <li><a href="https://twitter.com/codechefvit?lang=en"><i class="fa fa-twitter"></i></a></li>
              <li><a href="https://www.instagram.com/codechefvit/?hl=en"><i class="fa fa-instagram"></i></a></li>
              <li><a href="https://github.com/CodeChefVIT?language=java"><i class="fa fa-github"></i></a></li>
              <li><a href="https://www.linkedin.com/company/codechef-vit-chapter/mycompany/"><i
                class="fa fa-linkedin-square"></i></a></li>
            </ul>
          </div>
          <div class="footer-bottom">
            <p> &copy; Copyright 2021 | Made With 💜 by
              <a href="http://www.codechefvit.com" target="_blank">
                <span> CodeChef-VIT</span>
              </a>
            </p>
          </div>

        </div>
      </div>
    </>
  );
};

export default Matches;
