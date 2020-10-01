import React from "react";
import { connect } from "react-redux";
import "./collection-item.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import { addItem } from "../../redux/cart/cart.actions";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
<<<<<<< HEAD
      <div className="image" style={{ background: `url(${imageUrl})` }} />
=======
      <img
        alt=""
        className="image"
        style={{ background: `url(${imageUrl})` }}
      />
>>>>>>> ccf1b9c86b039db7256a5d89e55297056a33e6f8
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>
        Add to cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
