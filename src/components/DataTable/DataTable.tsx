import React, { useState } from "react";
import { DataGrid, GridColDef } from "@material-ui/data-grid";
import { useGetData } from "../../custom-hooks";
import { server_calls } from "../../api";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import { WhiskeyForm } from "../WhiskeyForm";
import { Navbar } from "../Navbar";

const columns: GridColDef[] = [
  { field: "style", headerName: "Style", flex: 2 },
  { field: "name", headerName: "Name", flex: 2 },
  { field: "abv", headerName: "ABV", flex: 2 },
  { field: "year", headerName: "Year", flex: 2 },
];

interface gridData {
  data: {
    id?: string;
  };
}
export const DataTable = () => {
  let { whiskeyData, getData } = useGetData();
  let [open, setOpen] = useState(false);
  let [gridData, setData] = useState<gridData>({ data: {} });
  const [selectionModel, setSelectionModel] = useState<any>([]);

  let handleOpen = () => {
    setOpen(true);
  };
  let handleClose = () => {
    setOpen(false);
  };

  let deleteData = () => {
    server_calls.delete(selectionModel);
    console.log(gridData.data.id);
    getData();
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  console.log(gridData.data.id!);
  console.log(`testing for data ${whiskeyData}`)

  return (
    <div style={{ height: 400, width: "100%" }}>
      <h2>My Bottles</h2>

      <DataGrid
        rows={whiskeyData}
        columns={columns}
        pageSize={5}
        checkboxSelection={true}
        onSelectionModelChange={(item) => {
          setSelectionModel(item);
          console.log(item)
        }}
      />

      <Button onClick={handleOpen}>Update</Button>
      <Button variant="contained" color="secondary" onClick={deleteData}>
        Delete
      </Button>

      {/* Dialog pop-up */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          Update Whiskey {selectionModel}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>Update Whiskey</DialogContentText>
          <WhiskeyForm id={selectionModel!} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Done
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
