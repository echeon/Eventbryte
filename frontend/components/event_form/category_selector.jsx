import React from 'react';

export default class CategorySelector extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { categories, subcategories } = this.props;

    const categoryList = Object.keys(categories).map(key => {
      const category = categories[key];
      return (
        <option key={key} value={category.id}>
          {category.name}
        </option>
      );
    });

    const subcategoryList = subcategories.map(subcategory => {
      return (
        <option key={subcategory.id} value={subcategory.id}>
          {subcategory.name}
        </option>
      );
    });

    // const SubcategorySelector = ({ onSubcategoryChange }) => {
    //   if (subcategoryList.length) {
    //     return (
    //       <div className="subcategory-selector-container">
    //         <select defaultValue="0" onChange={onSubcategoryChange}>
    //           <option value="0">Select a sub-topic</option>
    //           {subcategoryList}
    //         </select>
    //       </div>
    //     );
    //   } else {
    //     return <div className="subcategory-selector-container"></div>;
    //   }
    // };

    return (
      <div className="event-detail-container">
        <h3>event topic</h3>
        <div className="category-selector-container">
          <select value={this.props.categoryId} onChange={this.props.onCategoryChange}>
            <option value="0">Select a topic</option>
            {categoryList}
          </select>
        </div>
        <div className="subcategory-selector-container">
          <select value={this.props.subcategoryId} onChange={this.props.onSubcategoryChange}>
            <option value="0">Select a sub-topic</option>
            {subcategoryList}
          </select>
        </div>
      </div>
    );
  }
}
