// import axios from "axios";
import actionTypes from "../actionType/actionType";

// export const fetchBusDetail = () => {
//   return (dispatch) => {
//     axios
//       .get(`http://localhost:8080/busdetail`)
//       .then((response) => {
//         const data = response.data;
//         console.log("data", data);
//         dispatch({
//           type: actionTypes.BUSDETAIL_API_SUCCESS,
//           payload: data,
//         });
//       })
//       .catch((error) => {
//         const errorMsg = error.message;
//         dispatch({
//           type: actionTypes.BUSDETAIL_API_ERROR,
//           payload: errorMsg,
//         });
//       });
//   };
// };

export const fetchBusDetail = (dispatch,busdetail) => {
  return dispatch({
      type: actionTypes.BUSDETAIL_API_SUCCESS,
      payload: busdetail,
    });
  };

export const setBusLocation = (dispatch, location) => {
  return dispatch({
    type: actionTypes.LOCTION_SUCCESS,
    payload: location,
  });
};

export const getSeatNumber= (dispatch, item) => {
  // console.log("seatnumber",item)
  return dispatch({
    type: actionTypes.SEATNUMBER_SUCCESS,
    payload:  item,
  });
};

export const getSingleBusDetail= (dispatch, item) => {
  // console.log("seatnumber",item)
  return dispatch({
    type: actionTypes.SINGLBUSDETAIL_SUCCESS,
    payload:  item,
  });
};

export const getPrice= (dispatch, price) => {
  // console.log("seatnumber",item)
  return dispatch({
    type: actionTypes.SETPRICE_SUCCESS,
    payload:  price,
  });
};

export const getForm= (dispatch, formValue) => {
  // console.log("seatnumber",item)
  return dispatch({
    type: actionTypes.FORM_SUCCESS,
    payload:  formValue,
  });
};

export const getSeletedBuses= (dispatch, selectedBuses) => {
  // console.log("seatnumber",item)
  return dispatch({
    type: actionTypes.SELECTED_BUS_SUCCESS,
    payload:  selectedBuses,
  });
};


