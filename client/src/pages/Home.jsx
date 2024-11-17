import { Link } from "react-router-dom";
import HeroImg from "../assets/home.png";
import DefaultPoster from "../assets/poster.jpg";

function Home() {
  return (
    <div className="container-lg my-5">
      <div className="row align-items-center align-content-center">
        <div className="col-md-6 mt-5 mt-md-0">
          <div className="text-center">
            <img
              src={HeroImg}
              alt=""
              className="img-fluid"
              height="350px"
              width="450px"
            />
          </div>
        </div>
        <div className="col-md-6 mt-5 mt-md-0 order-md-first">
          <div>
            <h1 className="text-primary text-uppercase fs-1 fw-bold">
              Write Your Own Stories And Share it with Everyone!
            </h1>
            <p className="mt-4 text-muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
              tenetur sequi odit ipsam iusto cupiditate totam aut eligendi
              dolorem vero, repudiandae magni laudantium illum impedit nulla
              quis et, at omnis?
            </p>
            <Link to="/write">
              <button className="btn btn-primary px-3 my-3 fw-bold">
                Write a Story
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="my-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="text-center">
              <h2 className="fw-bold mb-5">Latest Stories</h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 col-lg-4 text-center text-decoration-none">
            <div className="shadow rounded">
              <img src={DefaultPoster} alt="" height="300px" width="200px" />
            </div>
            <h2 className="lead fw-bold my-4">Story 1</h2>
            <Link to="/story/:id">
              <button className="btn btn-primary text-white lead fw-bold mb-5">
                Read Story
              </button>
            </Link>
          </div>
          <div className="col-md-6 col-lg-4 text-center text-decoration-none">
            <div className="shadow rounded">
              <img src={DefaultPoster} alt="" height="300px" width="200px" />
            </div>
            <h2 className="lead fw-bold my-4">Story 2</h2>
            <Link to="/story/:id">
              <button className="btn btn-primary text-white lead fw-bold mb-5">
                Read Story
              </button>
            </Link>
          </div>
          <div className="col-md-6 col-lg-4 text-center text-decoration-none">
            <div className="shadow rounded">
              <img src={DefaultPoster} alt="" height="300px" width="200px" />
            </div>
            <h2 className="lead fw-bold my-4">Story 3</h2>
            <Link to="/story/:id">
              <button className="btn btn-primary text-white lead fw-bold mb-5">
                Read Story
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
