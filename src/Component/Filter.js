import React from "react";

function Filter({ handleSort, handleTagChange, selectedTag, sortBy }) {
  let tagNames = ["men's clothing", "jewelery", "electronics", "women's clothing"];

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-md-9">
          <p className=" mr-2">
            Filters: <span className="mr-4"></span>
            {tagNames.map((tag, idx) => (
              <button
                key={idx}
                type="button"
                className={`btn mr-2 custom-filter ${
                  selectedTag === tag
                    ? "btn-secondary"
                    : "btn-outline-secondary"
                }`}
                onClick={(e) => handleTagChange(e.target.value)}
                value={tag}
              >
                {tag}
              </button>
            ))}
          </p>
        </div>
        <div className="col-12 col-md-3">
          <select
            className="form-control"
            onChange={(e) => handleSort(e.target.value)}
            value={sortBy}
          >
            <option value="">Sort by</option>
            <option value="lowest">Lowest to highest</option>
            <option value="highest">Highest to lowest</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Filter;