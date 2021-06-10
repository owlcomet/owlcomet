import React from 'react';

const SortBy =(props)=>{
    console.log(`sortBy : ${props.data}`);
    return (
        <React.Fragment>
       
<div className="btn-group">
  <button type="button" className="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    Action
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#" active>Action</a></li>
    <li><a className="dropdown-item" href="#">Another action</a></li>
    <li><a className="dropdown-item" href="#">Something else here</a></li>
    <li><hr className="dropdown-divider" /></li>
    <li><a className="dropdown-item" href="#">Separated link</a></li>
  </ul>
</div>
        </React.Fragment>
    )
}
export default SortBy;