// import React, { useEffect } from "react";
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import { getEmployeeList } from "./MainAppAction"

// function MainApp(props) {
//   useEffect(() => {
//     props.getEmployeeList();
//   }, []);

//   return (
//     <div>
//       <h1> Hello</h1>
//       <table>
//         <th>Name</th>
//         <th>Email</th>

//         <th>Phone</th>
//         <th>Address</th>
//         <th>Website</th>
//         {props.employeeList.map((item) => {
//           return (
//             <tr>
//               <td style={{ width: "18%" }}>
//                 {item.name}
//               </td>
//               <td style={{ width: "24%" }}>
//                 {item.email}
//               </td>

//               <td style={{ width: "19%" }}>
//                 {item.phone}

//               </td>
//               <td style={{ width: "19%" }}>
//                 {item.address.street || ""} {item.address.street ||
//                   ""} {item.address.suite || ""} {item.address.city || ""} {item.address.zipcode ||
//                     ""}
//               </td>
//               <td style={{ width: "10%" }}>
//                 {item.website}
//               </td>

//             </tr>
//           );
//         })}
//       </table>
//       {props.employeeList.username}
//     </div>
//   )
// }
// const mapStateToProps = ({ main }) => ({
//   employeeList: main.employeeList,
// });

// const mapDispatchToProps = (dispatch) =>
//   bindActionCreators(
//     {
//       getEmployeeList,
//     },
//     dispatch
//   );
// export default connect(mapStateToProps, mapDispatchToProps)(MainApp)
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getEmployeeList } from "./MainAppAction"
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { Redirect } from 'react-router-dom';
import { Link } from "react-router-dom";
import EditIcon from '@material-ui/icons/Edit';
import AddCircleSharp from '@material-ui/icons/AddCircleSharp';

 function MainApp(props) {
  useEffect(() => {
        props.getEmployeeList();
      }, []);
  return (
    <>
    <div style={{textAlign:"center", marginTop:"20px"}}>To Add new Data click on plus icon <AddCircleSharp/></div>
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 700 }} size="small" aria-label="a dense table">
      <TableHead>
        <TableRow style={{background: "Pink", fontWeight: "bold"}}>
          <TableCell>Name of Airline</TableCell>
          <TableCell align="right">Website</TableCell>
          <TableCell align="right">Country</TableCell>
          <TableCell align="right">Established In</TableCell>
          <TableCell align="right">Headquater</TableCell>
          <TableCell align="right">Update Data</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {props.employeeList.map((item) => (
          <TableRow
            key={item.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">{item.name}</TableCell>
            <TableCell align="right">{item.website}</TableCell>
            <TableCell align="right">{item.country}</TableCell>
            <TableCell align="right">{item.established}</TableCell>
            <TableCell align="right">{item.head_quaters}</TableCell>
            <TableCell align="right"> <EditIcon/></TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  </>
  );
}
const mapStateToProps = ({ main }) => ({
  employeeList: main.employeeList,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getEmployeeList,
    },
    dispatch
  );
export default connect(mapStateToProps, mapDispatchToProps)(MainApp)