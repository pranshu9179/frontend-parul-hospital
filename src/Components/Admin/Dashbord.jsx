

import React, { useEffect } from "react";
import { FaUserAlt, FaBell, FaCalendarCheck } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { fetchInquiries } from "../../Redux/inquiries/inquiryThunks";
import { fetchAppointments } from "../../Redux/appointment/appointmentThunks";
import DataTable from "react-data-table-component";

const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchInquiries());
    dispatch(fetchAppointments());
  }, [dispatch]);

  const inquirList = useSelector((state) => state.inquiry.inquiries);
  const appointmentList = useSelector((state) => state.appointment.list);

  const InquireCount = inquirList ? inquirList.length : 0;
  const appointmentCount = appointmentList ? appointmentList.length : 0;

  // Columns for React Data Table
  const columns = [
    {
      name: "ID",
      selector: (row, index) => index + 1,
      sortable: true,
      width: "70px",
    },
    {
      name: "Patient",
      selector: (row) => row.name || "N/A",
      sortable: true,
    },
    {
      name: "Department",
      selector: (row) => row.department || "N/A",
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => row.status || "Pending",
      sortable: true,
    },
    {
      name: "Date",
      selector: (row) => new Date(row.createdAt).toLocaleDateString(),
      sortable: true,
    },
  ];

  return (
    <div className="p-2 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow flex items-center gap-4">
          <FaUserAlt className="text-blue-600 text-3xl" />
          <div>
            <h3 className="text-lg font-semibold">Total Enquiries</h3>
            <p className="text-3xl font-bold">{InquireCount}</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow flex items-center gap-4">
          <FaBell className="text-yellow-600 text-3xl" />
          <div>
            <h3 className="text-lg font-semibold">Pending Enquiries</h3>
            <p className="text-3xl font-bold">
              {
                inquirList?.filter((inq) => inq.status === "Pending").length
              }
            </p>
          </div>
        </div>


        <div className="bg-white p-6 rounded-lg shadow flex items-center gap-4">
          <FaCalendarCheck className="text-green-600 text-3xl" />
          <div>
            <h3 className="text-lg font-semibold">Visits Scheduled</h3>
            <p className="text-3xl font-bold">{appointmentCount}</p>
          </div>
        </div>
      </div>
       <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
        <div className="bg-blue-100 p-4 rounded-lg text-center">
          {/* <p className="text-sm">Contacted</p> */}
          {/* <p className="text-xl font-bold">10</p> */}
        </div>
        <div className="bg-purple-100 p-4 rounded-lg text-center">
          {/* <p className="text-sm">Visit Scheduled</p>
            <p className="text-xl font-bold">5</p> */}
        </div>
        <div className="bg-yellow-100 p-4 rounded-lg text-center">
          {/* <p className="text-sm">Admitted</p>
            <p className="text-xl font-bold">3</p> */}
        </div>
        <div className="bg-green-100 p-4 rounded-lg text-center">
          {/* <p className="text-sm">Treatment Done</p>
            <p className="text-xl font-bold">15</p> */}
        </div>
        <div className="bg-gray-100 p-4 rounded-lg text-center">
          {/* <p className="text-sm">Discharged</p>
            <p className="text-xl font-bold">7</p> */}
        </div>
      </div>

      {/* Recent Enquiries Table */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Recent Enquiries</h2>
        <DataTable
          columns={columns}
          data={[...inquirList].reverse()} // Latest first
          pagination
          highlightOnHover
          striped
          defaultSortFieldId={5}
        />
      </div>
    </div>
  );
};

export default Dashboard;
