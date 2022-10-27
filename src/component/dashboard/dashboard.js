import React, { useCallback, useEffect, useState } from "react";
import Footer from "../Footer/footer";
import { axio } from "../../Config/Config";
import { useLocation } from "react-router-dom";
import AdminNavBar from "../userProfile/AdminNavBar";
import MaterialReactTable from "material-react-table";
import { getUniversitiesInfo } from "../../Store/Slice/getUniversities";
import { getProgrammeInfo } from "../../Store/Slice/getProgramme";
import { userProfileData } from "../../Store/Slice/UserprofilePageSlice";
import "./dashboard.css";
import { useDispatch, useSelector } from "react-redux";
import editUniversities from "../../Store/Slice/EditUniversities";
import { deleteSelectedUniversity } from "../../Store/Slice/deleteUniversity";

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

  const appState = useSelector((state) => state);
  const { universitiesData, universitiesLoading } = useSelector(
    (state) => state.universitiesInfo
  );
  const { programmeData } = useSelector((state) => state.getProgrammeInfo);
  const { userData, loading } = useSelector((state) => state.userProfileInfo);

  const {deleteLoading} = useSelector((state) => state.selectDeletingUniversity)

  data = appState["universitiesInfo"]["universitiesData"];
  if (dataState === "Programme") {
    data = appState["getProgrammeInfo"]["programmeData"];
  }

  useEffect(() => {
    if (dataState === "Universities") {
      dispatch(getUniversitiesInfo());
    }
    if (dataState === "Programme") {
      dispatch(getProgrammeInfo());
      data = appState["getProgrammeInfo"]["programmeData"];
      setKeys(keyTypes[dataState]);
    }
    dispatch(userProfileData(locationState));
  }, [dataState, data, universitiesData, programmeData]);

  const handleCreateNewRow = (values) => {
    data.push(values);
    // setTableData([...data]);
  };

  const changedValues = async(values) => {
    const res = axio.put(`/api/edit-universities`, {
      values
    }).catch((err) => console.log(err,"editing error"))
    return await res.data
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

  const columns = keys.map((key) => {
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
        <MaterialReactTable
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
          onEditingRowSave={handleSaveRowEdits}
          renderRowActions={({ row, table }) => (
            <Box sx={{ display: "flex", gap: "1rem" }}>
              <Tooltip arrow placement="left" title="Edit">
                <IconButton onClick={() => table.setEditingRow(row)}>
                  <Edit />
                </IconButton>
              </Tooltip>
              <Tooltip arrow placement="right" title="Delete">
                <IconButton color="error" onClick={() => handleDeleteRow(row)}>
                  <Delete />
                </IconButton>
              </Tooltip>
            </Box>
          )}
        />
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


