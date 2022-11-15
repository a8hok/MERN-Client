import React, { useCallback, useEffect, useState } from "react";
import Footer from "../Footer/footer";
import { axio } from "../../Config/Config";
import { useLocation } from "react-router-dom";
import AdminNavBar from "../userProfile/AdminNavBar";
import MaterialReactTable from "material-react-table";
import { getUniversitiesInfo } from "../../Store/Slice/getUniversities";
import { getProgrammeInfo } from "../../Store/Slice/getProgramme";
import { userProfileData } from "../../Store/Slice/UserprofilePageSlice";
import { TablePagination } from '@mui/material';
import "./dashboard.css";
import { useDispatch, useSelector } from "react-redux";
import editUniversities from "../../Store/Slice/EditUniversities";
import { getSchoolData } from "../../Store/Slice/getSchool";
import { getCollageInfo } from "../../Store/Slice/getCollageData";
import { deleteSelectedUniversity } from "../../Store/Slice/deleteUniversity";
import { deleteSelectedProgramme } from "../../Store/Slice/deleteProgramme";
import { deleteSelectedSchool } from "../../Store/Slice/deleteSchool";
import { deleteSelectedCollage } from "../../Store/Slice/deleteCollage";
import Loader from "../Event/img/loader.gif";

import {
  Box,
  Dialog,
  DialogContent,
  IconButton,
  Stack,
  TextField,
  Tooltip,
} from "@mui/material";

import { Delete, Edit } from "@mui/icons-material";

import keyTypes from "./makeData";

const Dashboard = () => {
  let data = [];

  const locationState = useLocation().state;
  const dispatch = useDispatch();

  const [dataState, setDataState] = useState("Universities");
  const [keys, setKeys] = useState(keyTypes.Universities);
  const [validationErrors, setValidationErrors] = useState({});
  const [render, setRender] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [rows, setRows] = useState([]);
  const [totalRows, setTotalRows] = useState(0);

  const [pagination, setPagination] = useState({
    pageIndex: 1,
    pageSize: 2000
  })

  const appState = useSelector((state) => state);

  const { universitiesData, universitiesLoading } = useSelector((state) => state.universitiesInfo);

  const { programmeData } = useSelector((state) => state.getProgrammeInfo);

  const { userData, loading } = useSelector((state) => state.userProfileInfo);

  const {allSchoolData, schoolLoading} = useSelector((state) => state.getSchoolData);

  const {CollageData} = useSelector((state) => state.CollageInfo)

  useEffect(() => {
    if(dataState === "Universities"){
      axio.get(`/api/universities/`, {
        params: {page: pagination.pageIndex, limit: pagination.pageSize}
      })
      .then((res) => {
        setRows(res?.data?.data)
        setTotalRows(res?.data?.data?.length)
      })
    }
  }, [])

  if(dataState === "Universities") {
    data = rows;
  }
  if (dataState === "Programme") {
    data = appState["getProgrammeInfo"]["programmeData"];
  }
  if (dataState === "School") {
    data = appState["getSchoolData"]["allSchoolData"];
  }
  if (dataState === "Collages") {
    data = appState["CollageInfo"]["CollageData"];
  }

  useEffect(() => {
    if (dataState === "Universities") {
      dispatch(getUniversitiesInfo(pagination));
      data = rows;
      setKeys(keyTypes[dataState]);
    }
    if (dataState === "Programme") {
      dispatch(getProgrammeInfo());
      data = appState["getProgrammeInfo"]["programmeData"];
      setKeys(keyTypes[dataState]);
    }
    if (dataState === "School") {
      dispatch(getSchoolData());
      data = appState["getSchoolData"]["allSchoolData"];
      setKeys(keyTypes[dataState]);
    }
    if (dataState === "Collages") {
      dispatch(getCollageInfo());
      data = appState["CollageInfo"]["CollageData"];
      setKeys(keyTypes[dataState]);
    }
    dispatch(userProfileData(locationState));
  }, [dataState]);

  const handleCreateNewRow = (values) => {
    data.push(values);
  };

  // console.log(data)

  const changedValues = async(values) => {
    if (dataState === "Universities"){
      const res = axio.put(`/api/edit-universities`, {
        values
      }).catch((err) => console.log(err,"editing error"))
      return await res.data
    }
    if (dataState === "Programme"){
      const res = axio.put(`/api/edit-programme`, {
        values
      }).catch((err) => console.log(err,"editing error"))
      return await res.data
    }
    if (dataState === "School"){
      const res = axio.put(`/api/edit-school`, {
        values
      }).catch((err) => console.log(err,"editing error"))
      return await res.data
    }
    if (dataState === "Collages"){
      const res = axio.put(`/api/edit-collage`, {
        values
      }).catch((err) => console.log(err,"editing error"))
      return await res.data
    }
    
  }

  const handleSaveRowEdits = async ({exitEditingMode, row, values }) => {
    if (!Object.keys(validationErrors).length) {
      changedValues(values);
      exitEditingMode();
    }
  };

  const handleDeleteRow = useCallback((row) => {
    alert(`Do you really want to delete this data`)
    const serialNumber = (row._valuesCache.S_No)
    dispatch(deleteSelectedUniversity(serialNumber))
    },
    [data]
  );

  const handleDeleteforProgramme = useCallback((row) => {
    alert(`Do you really want to delete this data`)
    const serialNumber = (row._valuesCache.SNo)
    dispatch(deleteSelectedProgramme(serialNumber))
    },
    [data]
  )

  const handleDeleteforSchool = useCallback((row) => {
    alert(`Do you really want to delete this data`)
    const serialNumber = (row._valuesCache.SlNo)
    dispatch(deleteSelectedSchool(serialNumber))
    },
    [data]
  )

  const handleDeletedCollage = useCallback((row) => {
    alert(`Do you really want to delete this data`)
    const serialNumber = (row._valuesCache.SlNo)
    dispatch(deleteSelectedCollage(serialNumber))
    },
    [data]
  )

  const handleDeleteMode = (row) => {
    if (dataState === "Universities"){
      handleDeleteRow(row)
    }
    if (dataState === "Programme"){
      handleDeleteforProgramme(row)
    }
    if (dataState === "School"){
      handleDeleteforSchool(row)
    }
    if(dataState === "Collages"){
      handleDeletedCollage(row)
    }
  }

  const getCommonEditTextFieldProps = useCallback(
    (cell) => {
      return {
        error: !!validationErrors[cell.id],
        helperText: validationErrors[cell.id],
        onBlur: (event) => {
          const isValid =
            cell.column.id === "email"
              ? validateEmail(event.target.value)
              : cell.column.id === "age"
              ? validateAge(+event.target.value)
              : validateRequired(event.target.value);
          if (!isValid) {
            //set validation error for cell if invalid
            setValidationErrors({
              ...validationErrors,
              [cell.id]: `${cell.column.columnDef.header} is required`,
            });
          } else {
            //remove validation error for cell if valid
            delete validationErrors[cell.id];
            setValidationErrors({
              ...validationErrors,
            });
          }
        },
      };
    },
    [validationErrors]
  );

  const columns = keys?.map((key) => {
    return {
      accessorKey: key,
      header: key,
      muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
        ...getCommonEditTextFieldProps(cell),
        type: key,
      }),
    };
  });

  return (
    <>
      <AdminNavBar profileInfo={userData.data} />
      <div className="dashboard-divider">
        <div className="option-toggle">
          <p className="toggle-heading">Dashboard</p>
          <hr className="group-divider"></hr>
          <button
            value="Universities"
            onClick={(e) => setDataState(e.target.value)}
          >
            Universities
          </button>
          <button
            value="Programme"
            onClick={(e) => setDataState(e.target.value)}
          >
            Programme
          </button>
          <button
            value="School"
            onClick={(e) => setDataState(e.target.value)}
          >
            School
          </button>
          <button
            value="Collages"
            onClick={(e) => setDataState(e.target.value)}
          >
            Colleges
          </button>
          <hr className="group-divider"></hr>
          <button>Table</button>
          <button>Services</button>
          <div className="dropdown">
            <button className="dropbtn">Files</button>
            <div className="dropdown-content">
              <a href="#/">Link 1</a>
              <a href="#/">Link 2</a>
              <a href="#/">Link 3</a>
            </div>
          </div>
          <button>Our Services</button>
          <button>Our Services</button>
          <hr className="group-divider"></hr>
          <label>Group - 1</label>
          <button>Our Services</button>
          <button>Our Services</button>
          <button>Our Services</button>
          <hr className="group-divider"></hr>
          <button>Our Services</button>
          <button>Our Services</button>
        </div>
        {data ? <MaterialReactTable
          displayColumnDefOptions={{
            "mrt-row-actions": {
              muiTableHeadCellProps: {
                align: "center",
              },
              size: 120,
            },
          }}
          columns={columns}
          data={data}
          editingMode="modal" //default
          enableColumnOrdering
          enableEditing
          // enablePagination={false}
          onEditingRowSave={handleSaveRowEdits}
          renderRowActions={({ row, table }) => (
            <Box sx={{ display: "flex", gap: "1rem" }}>
              <Tooltip arrow placement="left" title="Edit">
                <IconButton onClick={() => table.setEditingRow(row)}>
                  <Edit />
                </IconButton>
              </Tooltip>
              <Tooltip arrow placement="right" title="Delete">
                <IconButton color="error" onClick={() => handleDeleteMode(row)}>
                  <Delete />
                </IconButton>
              </Tooltip>
            </Box>
          )}
        /> : <img src={Loader} alt=""/>}
      </div>
      <Footer />
    </>
  );
};

//example of creating a mui dialog modal for creating new rows
export const CreateNewAccountModal = ({ open, columns, onClose, onSubmit }) => {
  const [values, setValues] = useState(() =>
    columns.reduce((acc, column) => {
      acc[column.accessorKey ?? ""] = "";
      return acc;
    }, {})
  );

  const handleSubmit = () => {
    //put your validation logic here
    onSubmit(values);
    onClose();
  };

  return (
    <Dialog open={open}>
      <DialogContent>
        <form onSubmit={(e) => e.preventDefault()}>
          <Stack
            sx={{
              width: "100%",
              minWidth: { xs: "300px", sm: "360px", md: "400px" },
              gap: "1.5rem",
            }}
          >
            {columns.map((column) => (
              <TextField
                key={column.accessorKey}
                label={column.header}
                name={column.accessorKey}
                onSubmit={(e) =>setValues({ ...values, [e.target.name]: e.target.value })}
              />
            ))}
          </Stack>
        </form>
      </DialogContent>
    </Dialog>
  );
};

const validateRequired = (value) => !!value.length;
const validateEmail = (email) =>
  !!email.length &&
  email
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
const validateAge = (age) => age >= 18 && age <= 50;

export default Dashboard;


