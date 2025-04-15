import { useDispatch, useSelector } from "react-redux";
import { datainsert } from "./store/alldata";
import { useGetnjspostQuery } from "./store/apirtk";
import { useEffect } from "react";
// import { useEffect } from "react";


export const Table = () => {

  // const dispatch = useDispatch()
  // const dataapi = useSelector(state => state.dbdata);

  // //call api
  // const { data, isLoading } = useGetnjspostQuery("67feb674a3101bcabfc49ef4");
  // // insert data into variable
  // if (!isLoading) {
  //   dispatch(datainsert(data));
  // }
  // // when data is avalable render 
  // if (dataapi) {
  //   console.log("all data from api");
  //   console.log(dataapi);
  // }


  const dispatch = useDispatch();
  const dataapi = useSelector((state) => state.dbdata);

  const { data, isLoading } = useGetnjspostQuery("67feb674a3101bcabfc49ef4");

  // ✅ useEffect to dispatch after data is available
  useEffect(() => {
    if (!isLoading && data) {
      dispatch(datainsert(data));
    }
  }, [data, isLoading, dispatch]);

  // Optional: log your global state
  useEffect(() => {
    if (dataapi) {
      console.log("All data from Redux state:");
      console.log(dataapi);
    }
  }, [dataapi]);


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