import React from 'react';
export default function ProductRow(props) {
    const {id,name,price,image} = props.product
    const handleDelete = ()=> {
        props.deleteProduct(props.product.id);
    }
    const handleUpdate = () => {
        props.updateIsEditting(props.product.id);
    }
    return (
        <div className="table-row">
                      <div className="table-cell">
                          {id}
                      </div>
                      <div className="table-cell">
                          {name}
                      </div>
                      <div className="table-cell">
                          {price}$
                      </div>
                      <div className="table-cell">
                          <img src={image[0]}></img>
                      </div>
                      <div className="table-cell">
                          <button className="btn" onClick={handleUpdate}>Edit</button>
                          <button className="btn" onClick={handleDelete}>Delete</button>
                      </div>
                  </div>
    )
}