function Write() {
  return (
    <div className="container-lg my-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="text-center">
            <h2 className="fw-bold mb-5">Write Your Story</h2>
          </div>
        </div>
      </div>

      <div className="row justify-content-center text-center">
        <form encType="multipart/form-data">
          <div className="mb-5 rounded">
            <input name="story-poster" type="file" hidden />
            <button className="btn btn-secondary">Upload Image</button>
          </div>

          <div className="mb-3 rounded">
            <input
              type="text"
              placeholder="Title"
              className="form-control"
              required
            />
          </div>

          <div className="mb-3 rounded">
            <textarea
              rows="20"
              cols="50000"
              placeholder="Story"
              className="form-control"
              required
            ></textarea>
          </div>

          <div className="mb-3 rounded">
            <button type="submit" className="btn btn-primary">
              Publish
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Write;
