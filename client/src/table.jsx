import { useDispatch, useSelector } from "react-redux";
import {datainsert} from "./store/alldata";
import { useGetnjspostQuery } from "./store/apirtk";
// import { useEffect } from "react";


export const Table=()=>{

const dispatch=useDispatch()
const dataapi=useSelector(state=>state.dbdata);

  //call api
  const {data,isLoading}=useGetnjspostQuery("67fcbc25a604384fa7d10511");
  // insert data into variable
  if(!isLoading){
    dispatch(datainsert(data));
  }
  // when data is avalable render 
  if(dataapi){
  console.log("all data from api");
  console.log(dataapi);
}

  



return (
<>
<table className="table table-bordered">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">NAME</th>
      <th scope="col">EMAIL</th>
      <th scope="col">BUTTON</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>

        <button className="btn btn-primary">edit</button>
        <button className="btn btn-danger ms-2">delete</button>
      </td>
    </tr>
   </tbody>
</table>





</>




    )
}