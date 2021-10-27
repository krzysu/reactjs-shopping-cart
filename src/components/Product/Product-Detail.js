import React from "react";
import { Modal } from "reactstrap";
import { useState } from "react";

const ProductDetail = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button className="btn btn-secondary ml-1" onClick={toggle}>
        Details
      </button>
      <Modal
        zIndex={5000}
        centered
        size="xl"
        isOpen={isOpen}
        toggle={toggle}
        contentClassName="border-1 p-3"
      >
        <div className="card" style={{ maxWidth: "2000px" }}>
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src={props.image} alt="..." style={{ maxWidth: "15rem" }} />
            </div>
            <div className="col-md-8">
              <div className="d-flex flex-row justify-content-end">
                <div className="d-flex-inline">
                  <button
                    className="btn btn-danger btn-sm m-2"
                    type="button"
                    name="close"
                    onClick={toggle}
                  >
                    X
                  </button>
                </div>
              </div>
              <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">
                    {props.price} {props.currency}
                </p>
                <p className="card-text">
                  This is some additional text.  It is meant as a placeholder.  Ideally, in the future this paragraph will contain product information.
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ProductDetail;
