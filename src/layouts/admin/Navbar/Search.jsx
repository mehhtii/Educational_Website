import React from 'react';
 

const SearchInput = () => {
    return ( 
        <div
          className="col-7 h-100 d-flex align-items-center p-0"
        >
          <input
            className="form-control form-controls search w-50 me-5 pe-3  "
            type="search"
            placeholder="جستجو آیتم مورد نظر"
          />
        </div>
     );
}
 
export default SearchInput;