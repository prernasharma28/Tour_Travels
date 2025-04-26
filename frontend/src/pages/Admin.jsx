import React, { useState, useEffect } from 'react';
import '../styles/admin.css';
import SettingsPage from './Setting.jsx';
import UserPage from './User.jsx';
import { Pie, Bar, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
} from 'chart.js';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement
);

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    setUsers(storedUsers);

    const fetchBookings = async () => {
      try {
        const res = await fetch('http://localhost:4000/api/v1/booking/all', {
          credentials: 'include',
        });
        const result = await res.json();

        if (result.success && Array.isArray(result.data)) {
          setBookings(result.data);
        } else {
          console.error('Unexpected response:', result);
          setBookings([]);
        }
        setLoading(false);
      } catch (err) {
        console.error('Failed to fetch bookings:', err);
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const today = new Date();
  const todayName = weekDays[today.getDay()];

  const bookingCountsByDay = weekDays.reduce((acc, day) => {
    acc[day] = 0;
    return acc;
  }, {});

  bookings.forEach((booking) => {
    const dayName = weekDays[new Date(booking.createdAt).getDay()];
    bookingCountsByDay[dayName]++;
  });

  const barData = {
    labels: weekDays,
    datasets: [
      {
        label: 'Bookings',
        data: weekDays.map(day => bookingCountsByDay[day]),
        backgroundColor: weekDays.map(day =>
          day === todayName ? 'rgba(54, 162, 235, 0.6)' : 'rgba(200, 200, 200, 0.6)'
        ),
        borderWidth: 2,
      },
    ],
  };

  const pieData = {
    labels: weekDays,
    datasets: [
      {
        data: weekDays.map(day => bookingCountsByDay[day]),
        backgroundColor: weekDays.map(day =>
          day === todayName ? '#36A2EB' : '#CCCCCC'
        ),
      },
    ],
  };

  
  const monthlyLabels = [];
  const monthlyBookings = [];

  // Get current date
  const currentDate = new Date();

  // Initialize months and counts
  for (let i = 5; i >= 0; i--) {
    const d = new Date(currentDate.getFullYear(), currentDate.getMonth() - i, 1);
    const label = d.toLocaleString('default', { month: 'short' });
    monthlyLabels.push(label);

    const count = bookings.filter(booking => {
      const bookingDate = new Date(booking.createdAt);
      return (
        bookingDate.getMonth() === d.getMonth() &&
        bookingDate.getFullYear() === d.getFullYear()
      );
    }).length;

    monthlyBookings.push(count);
  }

  const lineData = {
    labels: monthlyLabels,
    datasets: [
      {
        label: 'Monthly Bookings',
        data: monthlyBookings,
        borderColor: '#4F46E5',
        fill: false,
        tension: 0.4,
      },
    ],
  };

  const formatDateTime = (isoDate) => {
    const date = new Date(isoDate);
    const datePart = date.toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
    const timePart = date.toLocaleTimeString(undefined, {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });
    return `${datePart}\n${timePart}`;
  };

  const formatDate = (isoDate) => {
    if (!isoDate) return 'Not specified';
    const date = new Date(isoDate);
    return date.toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const exportCSV = () => {
    const headers = ['S.No', 'Username', 'Email', 'Phone', 'Tour Name', 'Guests', 'From Date', 'To Date', 'Date', 'Time', 'Payment ID'];
    const rows = bookings.map((b, index) => {
      const date = new Date(b.createdAt);
      return [
        index + 1, // S.No
        b.username,
        b.email,
        b.phone,
        b.tourName,
        b.guestSize,
        b.fromDate ? new Date(b.fromDate).toLocaleDateString() : 'N/A',
        b.toDate ? new Date(b.toDate).toLocaleDateString() : 'N/A',
        date.toLocaleDateString(),
        date.toLocaleTimeString(),
        b.razorpayPaymentId || 'N/A'
      ];
    });

    let csvContent = 'data:text/csv;charset=utf-8,' + headers.join(',') + '\n';
    rows.forEach(row => {
      csvContent += row.join(',') + '\n';
    });

    const link = document.createElement('a');
    link.href = encodeURI(csvContent);
    link.download = 'bookings.csv';
    link.click();
  };


  return (
    <div className="admin-container">
      <div className="admin-dashboard">
        <div className="sidebar">
          <h2>Admin Dashboard</h2>
          <ul>
            <li onClick={() => setCurrentPage('dashboard')}>Dashboard</li>
            <li onClick={() => setCurrentPage('users')}>Users</li>
            <li onClick={() => setCurrentPage('settings')}>Settings</li>
            <li onClick={exportCSV}>Export CSV</li>
          </ul>
        </div>

        <div className="admin-content">
          <h1 className="page-title">Admin Panel</h1>

          {loading ? (
            <div className="loading-spinner"><p>Loading...</p></div>
          ) : (
            currentPage === 'dashboard' && (
              <div>
                <div className="statistics">
                  <div className="stat-cards"><h3>Total Users</h3><p>{users.length}</p></div>
                  <div className="stat-cards"><h3>Total Bookings</h3><p>{bookings.length}</p></div>
                </div>

                <div className="charts-container">
                  <div className="chart-box"><h3>Bookings by Day</h3><Pie data={pieData} /></div>
                  <div className="chart-box"><h3>Daily Bookings</h3><Bar data={barData} /></div>
                  <div className="chart-box"><h3>Monthly Trend</h3><Line data={lineData} /></div>
                </div>

                  <div className="recent-bookings">
                    <h3>Recent Bookings</h3>
                    {bookings.length === 0 ? (
                      <p>No bookings available</p>
                    ) : (
                      <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
                        <table>
                          <thead>
                            <tr>
                              <th style={{ width: '60px' }}>S.No</th>
                              <th>Username</th>
                              <th>Email</th>
                              <th>Phone</th>
                              <th>Tour</th>
                              <th>Guests</th>
                              <th>From Date</th>
                              <th>To Date</th>
                              <th>Date & Time</th>
                              <th>Payment ID</th>
                            </tr>
                          </thead>
                          <tbody>
                            {[...bookings].reverse().map((booking, index) => (
                              <tr key={index}>
                                <td style={{ textAlign: 'center' }}>{index + 1}</td>
                                <td>{booking.username}</td>
                                <td>{booking.email}</td>
                                <td>{booking.phone}</td>
                                <td>{booking.tourName}</td>
                                <td>{booking.guestSize}</td>
                                <td>{formatDate(booking.fromDate)}</td>
                                <td>{formatDate(booking.toDate)}</td>
                                <td style={{ whiteSpace: 'pre-line' }}>{formatDateTime(booking.createdAt)}</td>
                                <td>{booking.razorpayPaymentId}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>
              </div>
            )
          )}

          {currentPage === 'users' && <UserPage users={users} setUsers={setUsers} />}
          {currentPage === 'settings' && <SettingsPage />}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;