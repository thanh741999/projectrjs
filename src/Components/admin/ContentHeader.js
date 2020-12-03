import React from 'react';
export default function ContentHeader (props) {
        const toggleModal = () =>{
            props.toggleModal();
        }
        return (
            <>
                <div className="content-header">
                    <h3>Product</h3>
                    <button className="btn btn-secondary" onClick={toggleModal}>
                    +Add
                    </button>
                </div> 
            </>
        )
}