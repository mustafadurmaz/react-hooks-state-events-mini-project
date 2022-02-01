import React from "react";

function CategoryFilter({ categories, onClickCategoryName, selectCategory }) {

  const categoryButton = categories.map((category) => {
    const nameOfClass = category === selectCategory ? "selected" : null;

    return (
      <button
        key={category}
        onClick={onClickCategoryName}
        className={nameOfClass}
      >
        {category}
      </button>
    );
  });

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButton}
    </div>
  );
}

export default CategoryFilter;
