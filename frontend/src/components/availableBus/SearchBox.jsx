import React from "react";

const SearchBox = ({ dept }) => {
  // console.log("dep",dept)
  function handleChange(e){
    console.log(e.target.value)
  }
  return (
    <div class="p-2 px-3">
      <div className="d-flex">
        <small className="fw-bold flex-grow-1">{dept.name}</small>
        <div>
          <i class="fa-solid fa-caret-down"></i>
        </div>
      </div>
      <form className="my-3" action="/action_page.php" method="get">
        <input
        style={{maxWidth:"100%"}}
          className="d-block h-25 mb-1"
          type="search"
          name={dept.value}
          value=""
          placeholder="search"
        />
        {dept.name1.map((item) => {
          return (
            <div>
              <input type="radio" name="some name" value={item.value} onChange={handleChange}/>
              <label className="px-2" htmlFor="vehicle1">
                <small className="">{item.value}</small>
              </label>
              <br />
            </div>
          );
        })}
        <input className="d-none" type="submit" value="Submit" />
      </form>
      <hr className="border border-primary border-1 m-0 p-0" />
    </div>
  );
};

export default SearchBox;
