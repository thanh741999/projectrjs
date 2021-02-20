import React from 'react';
import Swal from 'sweetalert2'
export default function ProductRow(props) {
    const {id,name,price,image} = props.product
    const handleDelete = ()=> {   
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
            props.deleteProduct(props.product.id);
            Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
            )
            }
        })
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