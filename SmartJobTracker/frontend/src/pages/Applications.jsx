import { useEffect, useState } from "react";
import DashboardCard from "../components/DashboardCard";
import PrimaryButton from "../components/PrimaryButton";
import PageContainer from "../components/PageContainer";
import PageTitle from "../components/PageTitle";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import TablePagination from "@mui/material/TablePagination";

function Applications() {
  const [showForm, setShowForm] = useState(false);

 const [applications, setApplications] = useState([]);

 useEffect(() => {
  fetch("http://localhost:8080/api/applications")
    .then((response) => response.json())
    .then((data) => {
      const formattedData = data.map((app) => ({
        id: app.id,
        company: app.company,
        role: app.position,
        status: app.status,
        date: app.applicationDate,
      }));

      setApplications(formattedData);
    })
    .catch((error) => {
      console.error(
        "Failed to load applications:",
        error
      );
    });
}, []);

  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");
  const [sortBy, setSortBy] = useState("date-desc");
  const [page, setPage] = useState(0);
  const rowsPerPage = 5;

  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("Applied");
  const [date, setDate] = useState("");
  const [editingId, setEditingId] = useState(null);
 const [deleteDialogOpen, setDeleteDialogOpen] =
  useState(false);

const [applicationToDelete, setApplicationToDelete] =
  useState(null);

  const handleSave = () => {
    if (!company || !role || !date) {
      alert("Please fill all fields");
      return;
    }

    if (editingId) {
  fetch(
    `http://localhost:8080/api/applications/${editingId}`,
    {
      method: "PUT",
      headers: {
        "Content-Type":
          "application/json",
      },
      body: JSON.stringify({
        company: company,
        position: role,
        status: status,
        applicationDate: date,
      }),
    }
  )
    .then((response) =>
      response.json()
    )
    .then((updatedApplication) => {
      setApplications(
        applications.map((app) =>
          app.id === editingId
            ? {
                id:
                  updatedApplication.id,
                company:
                  updatedApplication.company,
                role:
                  updatedApplication.position,
                status:
                  updatedApplication.status,
                date:
                  updatedApplication.applicationDate,
              }
            : app
        )
      );

      setEditingId(null);
    })
    .catch((error) => {
      console.error(
        "Update failed:",
        error
      );
    });
}else {
  fetch(
    "http://localhost:8080/api/applications",
    {
      method: "POST",
      headers: {
        "Content-Type":
          "application/json",
      },
      body: JSON.stringify({
        company: company,
        position: role,
        status: status,
        applicationDate: date,
      }),
    }
  )
    .then((response) =>
      response.json()
    )
    .then((savedApplication) => {
      setApplications([
        ...applications,
        {
          id: savedApplication.id,
          company:
            savedApplication.company,
          role:
            savedApplication.position,
          status:
            savedApplication.status,
          date:
            savedApplication.applicationDate,
        },
      ]);
    })
    .catch((error) => {
      console.error(
        "Error saving application:",
        error
      );
    });
}

    setCompany("");
    setRole("");
    setStatus("Applied");
    setDate("");
    setShowForm(false);
  };

  const handleDelete = (id) => {
  setApplicationToDelete(id);
  setDeleteDialogOpen(true);
};

  const handleEdit = (app) => {
    setCompany(app.company);
    setRole(app.role);
    setStatus(app.status);
    setDate(app.date);

    setEditingId(app.id);
    setShowForm(true);
  };

  const filteredApplications = [...applications]
  .filter((app) => {
    const matchesSearch =
      app.company
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      app.role
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      app.status
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

    const matchesStatus =
      filterStatus === "All" ||
      app.status === filterStatus;

    return matchesSearch && matchesStatus;
  })
  .sort((a, b) => {
    switch (sortBy) {
      case "company-asc":
        return a.company.localeCompare(
          b.company
        );

      case "company-desc":
        return b.company.localeCompare(
          a.company
        );

      case "date-asc":
        return (
          new Date(a.date) -
          new Date(b.date)
        );

      default:
        return (
          new Date(b.date) -
          new Date(a.date)
        );
    }
  });
  const paginatedApplications =
  filteredApplications.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  const totalApplications = applications.length;

  const interviewCount = applications.filter(
    (app) => app.status === "Interview"
  ).length;

  const selectedCount = applications.filter(
    (app) => app.status === "Selected"
  ).length;

  const rejectedCount = applications.filter(
    (app) => app.status === "Rejected"
  ).length;

  return (
  <PageContainer>
      <PageTitle>
  Applications
</PageTitle>

      <div
  style={{
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
    marginBottom: "25px",
  }}
>
  <DashboardCard
    title="Total Applications"
    value={totalApplications}
  />

  <DashboardCard
    title="Interviews"
    value={interviewCount}
  />

  <DashboardCard
    title="Selected"
    value={selectedCount}
  />

  <DashboardCard
    title="Rejected"
    value={rejectedCount}
  />
</div>

      <TextField
  fullWidth
  label="Search Applications"
  placeholder="Company, Role or Status"
  value={searchTerm}
  onChange={(e) =>
    setSearchTerm(e.target.value)
  }
  sx={{
    marginBottom: 2,
  }}
/>

      <FormControl
  sx={{
    minWidth: 250,
    marginBottom: 2,
  }}
>
  <InputLabel>Status</InputLabel>

  <Select
    value={filterStatus}
    label="Status"
    onChange={(e) =>
      setFilterStatus(e.target.value)
    }
  >
    <MenuItem value="All">All Status</MenuItem>
    <MenuItem value="Applied">Applied</MenuItem>
    <MenuItem value="Assessment">Assessment</MenuItem>
    <MenuItem value="Interview">Interview</MenuItem>
    <MenuItem value="Rejected">Rejected</MenuItem>
    <MenuItem value="Selected">Selected</MenuItem>
  </Select>
</FormControl>
<FormControl
  sx={{
    minWidth: 250,
    marginBottom: 2,
    ml: 2,
  }}
>
  <InputLabel>Sort</InputLabel>

  <Select
    value={sortBy}
    label="Sort"
    onChange={(e) =>
      setSortBy(e.target.value)
    }
  >
    <MenuItem value="company-asc">
      Company (A–Z)
    </MenuItem>

    <MenuItem value="company-desc">
      Company (Z–A)
    </MenuItem>

    <MenuItem value="date-desc">
      Latest Date
    </MenuItem>

    <MenuItem value="date-asc">
      Oldest Date
    </MenuItem>
  </Select>
</FormControl>

      <PrimaryButton
  onClick={() => {
    setShowForm(!showForm);

    if (!showForm) {
      setEditingId(null);
      setCompany("");
      setRole("");
      setStatus("Applied");
      setDate("");
    }
  }}
>
  Add Application
</PrimaryButton>

      {showForm && (
        <Card
  sx={{
    marginBottom: 3,
  }}
>
  <CardContent>
          <h3>
            {editingId
              ? "Edit Application"
              : "Add New Application"}
          </h3>

          <TextField
  fullWidth
  label="Company Name"
  value={company}
  onChange={(e) =>
    setCompany(e.target.value)
  }
  sx={{
    marginBottom: 2,
  }}
/>
         <TextField
  fullWidth
  label="Job Role"
  value={role}
  onChange={(e) =>
    setRole(e.target.value)
  }
  sx={{
    marginBottom: 2,
  }}
/>

         <FormControl
  fullWidth
  sx={{
    marginBottom: 2,
  }}
>
  <InputLabel>Status</InputLabel>
  <Select
    value={status}
    label="Status"
    onChange={(e) =>
      setStatus(e.target.value)
    }
  >
    <MenuItem value="Applied">Applied</MenuItem>
    <MenuItem value="Assessment">Assessment</MenuItem>
    <MenuItem value="Interview">Interview</MenuItem>
    <MenuItem value="Rejected">Rejected</MenuItem>
    <MenuItem value="Selected">Selected</MenuItem>
  </Select>
</FormControl>
          <TextField
  fullWidth
  label="Applied Date"
  type="date"
  value={date}
  onChange={(e) =>
    setDate(e.target.value)
  }
  InputLabelProps={{
    shrink: true,
  }}
  sx={{
    marginBottom: 2,
  }}
/>

          <PrimaryButton
  onClick={handleSave}
>
  {editingId ? "Update" : "Save"}
</PrimaryButton>
       </CardContent>
</Card>
)}

   <TableContainer
  component={Paper}
  sx={{
    overflowX: "auto",
    borderRadius: 2,
  }}
>
  <Table>
    <TableHead>
      <TableRow>
        <TableCell sx={{ whiteSpace: "nowrap" }}>
          Company
        </TableCell>

        <TableCell sx={{ whiteSpace: "nowrap" }}>
          Role
        </TableCell>

        <TableCell sx={{ whiteSpace: "nowrap" }}>
          Status
        </TableCell>

        <TableCell sx={{ whiteSpace: "nowrap" }}>
          Date
        </TableCell>

        <TableCell sx={{ whiteSpace: "nowrap" }}>
          Actions
        </TableCell>
      </TableRow>
    </TableHead>

    <TableBody>
      {filteredApplications.length > 0 ? (
        paginatedApplications.map((app) => (
          <TableRow
            key={app.id}
            hover
            sx={{
              "&:nth-of-type(odd)": {
                backgroundColor: "#f5f5f5",
              },
              cursor: "pointer",
            }}
          >
            <TableCell
              sx={{
                whiteSpace: "nowrap",
              }}
            >
              {app.company}
            </TableCell>

            <TableCell
              sx={{
                whiteSpace: "nowrap",
              }}
            >
              {app.role}
            </TableCell>

            <TableCell
              sx={{
                whiteSpace: "nowrap",
              }}
            >
              <Chip
                label={app.status}
                color={
                  app.status === "Selected"
                    ? "success"
                    : app.status === "Rejected"
                    ? "error"
                    : app.status === "Interview"
                    ? "warning"
                    : "primary"
                }
                size="small"
              />
            </TableCell>

            <TableCell
              sx={{
                whiteSpace: "nowrap",
              }}
            >
              {app.date}
            </TableCell>

            <TableCell
              sx={{
                whiteSpace: "nowrap",
              }}
            >
              <Button
                variant="contained"
                size="small"
                onClick={() =>
                  handleEdit(app)
                }
                sx={{
                  mr: 1,
                  mb: {
                    xs: 1,
                    sm: 0,
                  },
                }}
              >
                Edit
              </Button>

              <Button
                variant="contained"
                color="error"
                size="small"
                onClick={() =>
                  handleDelete(app.id)
                }
              >
                Delete
              </Button>
            </TableCell>
          </TableRow>
        ))
      ) : (
        <TableRow>
          <TableCell
            colSpan={5}
            align="center"
            sx={{
              py: 8,
              borderBottom: "none",
            }}
          >
            <h3>
              No applications found
            </h3>

            <p>
              Try changing filters or add
              your first application.
            </p>
          </TableCell>
        </TableRow>
      )}
    </TableBody>
  </Table>
</TableContainer>

<TablePagination
  component="div"
  count={filteredApplications.length}
  page={page}
  rowsPerPage={rowsPerPage}
  rowsPerPageOptions={[5]}
  onPageChange={(event, newPage) =>
    setPage(newPage)
  }
/>
<Dialog
  open={deleteDialogOpen}
  onClose={() => setDeleteDialogOpen(false)}
>
  <DialogTitle>
    Delete Application
  </DialogTitle>

  <DialogContent>
    Are you sure you want to delete this application?
  </DialogContent>

  <DialogActions>
    <Button
      onClick={() =>
        setDeleteDialogOpen(false)
      }
    >
      Cancel
    </Button>

    <Button
      color="error"
      variant="contained"
      onClick={() => {
  fetch(
    `http://localhost:8080/api/applications/${applicationToDelete}`,
    {
      method: "DELETE",
    }
  )
    .then(() => {
      setApplications(
        applications.filter(
          (app) =>
            app.id !== applicationToDelete
        )
      );

      setDeleteDialogOpen(false);
      setApplicationToDelete(null);
    })
    .catch((error) => {
      console.error(
        "Delete failed:",
        error
      );
    });
}}
    >
      Delete
    </Button>
  </DialogActions>
</Dialog>
   </PageContainer>
);
}

export default Applications;