// components/AdminDashboard/EnquiriesTable.jsx
import React, { useEffect, useMemo, useState } from 'react';
import DataTable from 'react-data-table-component';
import Filters from './Filters';
import { useDispatch, useSelector } from 'react-redux';
import { fetchInquiries, updateInquiry, deleteInquiry } from '../../Redux/inquiries/inquiryThunks';
import { toast } from 'react-toastify';
import * as XLSX from 'xlsx';
import jsPDF  from 'jspdf';
// import 'jspdf-autotable';



// import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
// import * as XLSX from 'xlsx';



import { FiDownload, FiX } from 'react-icons/fi';

const EnquiriesTable = () => {
  const dispatch = useDispatch();
  const { inquiries, loading, error } = useSelector((state) => state.inquiry);
  const [localInquiries, setLocalInquiries] = useState([]);
  const [filters, setFilters] = useState({ 
    department: '', 
    status: '', 
    dateRange: '' 
  });

  // Fetch data on component mount
  useEffect(() => {
    dispatch(fetchInquiries());
  }, [dispatch]);

  // Update local state when Redux data changes
  useEffect(() => {
    setLocalInquiries(inquiries);
  }, [inquiries]);

  // Handle filter changes
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  // Reset all filters
  const handleResetFilters = () => {
    setFilters({ department: '', status: '', dateRange: '' });
  };

  // Update inquiry status
  // const handleStatusChange = async (_id, newStatus) => {
  //   try {
  //     await dispatch(updateInquiry({ id: _id, updatedData: { status: newStatus } })).unwrap();
  //     toast.success('Status updated successfully');
  //     dispatch(fetchInquiries()); // Refresh data
  //   } catch (err) {
  //     toast.error(err?.message || 'Failed to update status');
  //     // Revert UI change if API fails
  //     setLocalInquiries((prev) =>
  //       prev.map((inq) => 
  //         inq._id === _id ? { ...inq, status: inq.status } : inq
  //       )
  //     );
  //   }
  // };



  // new status change handler 
const handleStatusChange = async (_id, newStatus) => {
  try {
    await dispatch(updateInquiry({ id: _id, updatedData: { status: newStatus } })).unwrap();
    toast.success('Status updated successfully');
    // ✅ No need to refetch — Redux store is already updated
  } catch (err) {
    toast.error(err?.message || 'Failed to update status');
  }
};


  // Delete an inquiry
  const handleDelete = async (_id) => {
    if (window.confirm('Are you sure you want to delete this inquiry?')) {
      try {
        await dispatch(deleteInquiry(_id)).unwrap();
        toast.success('Inquiry deleted successfully');
        dispatch(fetchInquiries());
      } catch (err) {
        toast.error(err?.message || 'Failed to delete inquiry');
      }
    }
  };

  // Export data to PDF or Excel
  // const handleExport = (type) => {
  //   const dataToExport = filteredData.map(item => ({
  //     'Patient Name': item.name,
  //     'Contact': item.phone,
  //     'Department': item.department || 'N/A',
  //     'Enquiry Date': item.createdAt 
  //       ? new Date(item.createdAt).toLocaleDateString('en-IN', {
  //           day: '2-digit',
  //           month: 'short',
  //           year: 'numeric',
  //         })
  //       : 'N/A',
  //     'Status': item.status || 'N/A',
  //     'Notes': item.message || 'N/A'
  //   }));

  //   if (type === 'pdf') {
  //     const doc = new jsPDF();
  //     doc.text('Patient Enquiries Report', 14, 15);
  //     doc.autoTable({
  //       head: [['Patient Name', 'Contact', 'Department', 'Enquiry Date', 'Status', 'Notes']],
  //       body: dataToExport.map(item => [
  //         item['Patient Name'],
  //         item['Contact'],
  //         item['Department'],
  //         item['Enquiry Date'],
  //         item['Status'],
  //         item['Notes']
  //       ]),
  //       startY: 20,
  //       styles: { fontSize: 8 },
  //       headStyles: { fillColor: [34, 197, 94] }
  //     });
  //     doc.save('patient_enquiries.pdf');
  //   } else {
  //     const worksheet = XLSX.utils.json_to_sheet(dataToExport);
  //     const workbook = XLSX.utils.book_new();
  //     XLSX.utils.book_append_sheet(workbook, worksheet, 'Patient Enquiries');
  //     XLSX.writeFile(workbook, 'patient_enquiries.xlsx');
  //   }
  // };



  // new handleexport function of exporting data to PDF or Excel
//   const handleExport = (type) => {

// // console.log(type, "type")

//   const dataToExport = filteredData.map(item => ({
//     'Patient Name': item.name,
//     'Contact': item.phone,
//     'Department': item.department || 'N/A',
//     'Enquiry Date': item.createdAt 
//       ? new Date(item.createdAt).toLocaleDateString('en-IN', {
//           day: '2-digit',
//           month: 'short',
//           year: 'numeric',
//         })
//       : 'N/A',
//     'Status': item.status || 'N/A',
//     'Notes': item.message || 'N/A'
//   }));

//   if (type === 'pdf') {
//     console.log('Exporting PDF...');
//     console.log('Data to export:', dataToExport);

//     try {
//       const doc = new jsPDF();
//       doc.text('Patient Enquiries Report', 14, 15);
//       autoTable({
//         head: [['Patient Name', 'Contact', 'Department', 'Enquiry Date', 'Status', 'Notes']],
//         body: dataToExport.map(item => [
//           item['Patient Name'],
//           item['Contact'],
//           item['Department'],
//           item['Enquiry Date'],
//           item['Status'],
//           item['Notes']
//         ]),
//         startY: 20,
//         styles: { fontSize: 8 },
//         headStyles: { fillColor: [34, 197, 94] }
//       });
//       doc.save('patient_enquiries.pdf');
//     } catch (err) {
//       console.error('PDF export failed:', err);
//     }
//   } else {
//     try {
//       const worksheet = XLSX.utils.json_to_sheet(dataToExport);
//       const workbook = XLSX.utils.book_new();
//       XLSX.utils.book_append_sheet(workbook, worksheet, 'Patient Enquiries');
//       XLSX.writeFile(workbook, 'patient_enquiries.xlsx');
//     } catch (err) {
//       console.error('Excel export failed:', err);
//     }
//   }
// };


const handleExport = (type) => {
  const dataToExport = filteredData.map(item => ({
    'Patient Name': item.name,
    'Contact': item.phone,
    'Department': item.department || 'N/A',
    'Enquiry Date': item.createdAt 
      ? new Date(item.createdAt).toLocaleDateString('en-IN', {
          day: '2-digit',
          month: 'short',
          year: 'numeric',
        })
      : 'N/A',
    'Status': item.status || 'N/A',
    'Notes': item.message || 'N/A'
  }));

  if (type === 'pdf') {
    console.log('Exporting PDF...');
    console.log('Data to export:', dataToExport);

    try {
      const doc = new jsPDF();
      doc.text('Patient Enquiries Report', 14, 15);
      autoTable(doc, {
        head: [['Patient Name', 'Contact', 'Department', 'Enquiry Date', 'Status', 'Notes']],
        body: dataToExport.map(item => [
          item['Patient Name'],
          item['Contact'],
          item['Department'],
          item['Enquiry Date'],
          item['Status'],
          item['Notes']
        ]),
        startY: 20,
        styles: { fontSize: 8 },
        headStyles: { fillColor: [34, 197, 94] }
      });
      doc.save('patient_enquiries.pdf');
    } catch (err) {
      console.error('PDF export failed:', err);
    }
  } else {
    try {
      const worksheet = XLSX.utils.json_to_sheet(dataToExport);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, 'Patient Enquiries');
      XLSX.writeFile(workbook, 'patient_enquiries.xlsx');
    } catch (err) {
      console.error('Excel export failed:', err);
    }
  }
};



  // Filter data based on selected filters
  const filteredData = useMemo(() => {
    return localInquiries.filter((item) => {
      // Department filter - case insensitive with null check
      const departmentMatch = !filters.department || 
        (item.department && 
         item.department.toString().toLowerCase().includes(filters.department.toLowerCase()));
      
      // Status filter - case insensitive with null check
      const statusMatch = !filters.status || 
        (item.status && 
         item.status.toString().toLowerCase() === filters.status.toLowerCase());
      
      // Date filter
      const dateMatch = (() => {
        if (!filters.dateRange || !item.createdAt) return true;
        
        const enquiryDate = new Date(item.createdAt);
        const today = new Date();
        
        if (filters.dateRange === 'today') {
          return enquiryDate.toDateString() === today.toDateString();
        }
        if (filters.dateRange === 'week') {
          const weekAgo = new Date(today);
          weekAgo.setDate(today.getDate() - 7);
          return enquiryDate >= weekAgo && enquiryDate <= today;
        }
        if (filters.dateRange === 'month') {
          const monthAgo = new Date(today);
          monthAgo.setMonth(today.getMonth() - 1);
          return enquiryDate >= monthAgo && enquiryDate <= today;
        }
        return true;
      })();
      
      return departmentMatch && statusMatch && dateMatch;
    });
  }, [filters, localInquiries]);

  // Table columns configuration
  const columns = [
    { 
      name: '#', 
      selector: (_, index) => index + 1, 
      width: '60px', 
      sortable: true 
    },
    { 
      name: 'Patient Name', 
      selector: (row) => row.name, 
      sortable: true 
    },
    { 
      name: 'Contact', 
      selector: (row) => row.phone || 'N/A' 
    },
    { 
      name: 'Department', 
      selector: (row) => row.department || 'N/A', 
      sortable: true 
    },
    {
      name: 'Enquiry Date',
      selector: (row) => row.createdAt 
        ? new Date(row.createdAt).toLocaleDateString('en-IN', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
          })
        : 'N/A',
      sortable: true,
    },
    {
      name: 'Status',
      cell: (row) => (
        <span className={`px-2 py-1 rounded text-xs font-semibold ${
          row.status === 'Contacted' ? 'bg-blue-100 text-blue-800' :
          row.status === 'Visit Scheduled' ? 'bg-purple-100 text-purple-800' :
          row.status === 'Treatment Done' ? 'bg-green-100 text-green-800' :
          row.status === 'Admitted' ? 'bg-yellow-100 text-yellow-800' :
          row.status === 'Discharged' ? 'bg-gray-100 text-gray-800' :
          'bg-gray-100 text-gray-800'
        }`}>
          {row.status || 'N/A'}
        </span>
      ),
      sortable: true,
    },
    { 
      name: 'Notes', 
      selector: (row) => row.message || 'N/A',
      wrap: true 
    },
    {
      name: 'Actions',
      width: '240px',
      cell: (row) => (
        <div className="flex flex-col sm:flex-row gap-1">
          <select
            className="border border-gray-300 rounded px-2 py-1 text-sm"
            value={row.status || ''}
            onChange={(e) => handleStatusChange(row._id, e.target.value)}
          >
            <option value="">Select Status</option>
            <option value="Contacted">Contacted</option>
            <option value="Visit Scheduled">Visit Scheduled</option>
            <option value="Treatment Done">Treatment Done</option>
            <option value="Admitted">Admitted</option>
            <option value="Discharged">Discharged</option>
          </select>
          <button
            className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600"
            onClick={() => handleDelete(row._id)}
          >
            Delete
          </button>
        </div>
      ),
    },
  ];

  // Custom table styles
  const customStyles = {
    table: { 
      style: { 
        border: '1px solid #e5e7eb', 
        borderRadius: '6px' 
      } 
    },
    headRow: { 
      style: { 
        backgroundColor: '#f3f4f6' 
      } 
    },
    headCells: { 
      style: { 
        fontSize: '14px', 
        fontWeight: '600' 
      } 
    },
    rows: { 
      style: { 
        minHeight: '45px',
        '&:hover': {
          backgroundColor: '#f9fafb'
        }
      } 
    },
    cells: { 
      style: { 
        fontSize: '13px' 
      } 
    },
  };

  return (
    <div className="bg-white p-3 rounded shadow">
      <Filters 
        filters={filters} 
        onFilterChange={handleFilterChange}
        onResetFilters={handleResetFilters}
        onExport={handleExport}
      />
      
      <DataTable
        columns={columns}
        data={filteredData}
        progressPending={loading}
        pagination
        paginationPerPage={10}
        paginationRowsPerPageOptions={[10, 25, 50, 100]}
        fixedHeader
        fixedHeaderScrollHeight="500px"
        highlightOnHover
        striped
        customStyles={customStyles}
        noDataComponent={<div className="p-4 text-center text-gray-500">No enquiries found</div>}
      />
      
      {error && (
        <div className="mt-2 p-2 bg-red-50 text-red-600 rounded text-sm">
          Error: {error.message || error.toString()}
        </div>
      )}
    </div>
  );
};

export default EnquiriesTable;