import React from "react";

const Categories = ({categories, filterItems}) => {
    return (
        <div className="btn-container">
            {categories.map((categories, index) => {
                return (
                    <button
                        type="button"
                        className="filter-btn"
                        key={index}
                        onClick={() => filterItems(categories)}>
                        {categories}
                    </button>
                );
            })}
        </div>
    );
};

export default Categories;
