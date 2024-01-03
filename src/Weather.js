import "./Weather.css";

export default function Weather(props) {
  return (
    <h1>
      <div className="row">
        <div className="col-5">
          <form id="search-form">
            <div className="mb-3">
              <label for="search" className="form-label">
                <ul>
                  <li id="date">today</li>
                </ul>
              </label>
              <input
                type="search"
                placeholder="enter a city"
                className="form-control"
                id="city-input"
                aria-describedby="search"
                autoFocus="on"
              />
            </div>

            <button type="submit" className="btn btn-primary">
              search
            </button>
          </form>
        </div>
        <div className="col-1 decor"></div>
        <div className="col-6 last" id="city"></div>
      </div>
    </h1>
  );
}
