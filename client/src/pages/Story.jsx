import { FaEye } from "react-icons/fa";
import DefaultPoster from "../assets/poster.jpg";

function Story() {
  return (
    <div className="container-lg my-5">
      <div className="row text-center justify-content-center">
        <div className="rounded">
          <img src={DefaultPoster} alt="" height="300px" width="200px" />
        </div>
        <h2 className="lead fw-bold mt-5">Story Title</h2>
        <div className="mt-3">
          <div className="d-flex flex-row justify-content-center text-center">
            <div>
              <button className="btn btn-secondary">Edit</button>
            </div>
            <div>
              <button className="btn btn-danger ms-2">Delete</button>
            </div>
          </div>
        </div>
        <h2 className="lead fw-bold mt-5">Story Title</h2>
        <h4 className="text-primary lead fw-bold mt-5">
          Published by iCodeLand
        </h4>
        <p className="text-secondary lead fw-bold mt-2">
          <FaEye className="me-2" />
          Seen by 50
        </p>
        <p className="lead mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint dolorem
          minima harum facilis iusto nemo quasi ut fugiat, a quod laboriosam
          nulla dolor amet esse optio voluptatum tempora earum. Impedit.
        </p>
      </div>
    </div>
  );
}

export default Story;
