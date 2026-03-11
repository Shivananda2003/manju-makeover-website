import { useState, useEffect } from 'react';
import { api } from '../api/api';

const STATUS_OPTIONS = ['pending', 'confirmed', 'cancelled', 'completed'];

function AdminDashboard() {

  const handleLogout = () => {
    sessionStorage.removeItem("adminAuth");
    window.location.href = "/";
  };

  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [updatingId, setUpdatingId] = useState(null);

  const fetchBookings = async () => {
    try {
      setError('');
      const data = await api.getBookings();
      setBookings((data || []).sort((a, b) => new Date(b.date) - new Date(a.date)));
    } catch (err) {
      setError(err.message || 'Failed to load bookings');
      setBookings([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const handleStatusChange = async (id, status) => {
    setUpdatingId(id);
    try {
      await api.updateBookingStatus(id, status);
      setBookings((prev) =>
        prev.map((b) => (b._id === id ? { ...b, status } : b))
      );
    } catch (err) {
      setError(err.message || 'Failed to update status');
    } finally {
      setUpdatingId(null);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this booking?')) return;
    try {
      await api.deleteBooking(id);
      setBookings((prev) => prev.filter((b) => b._id !== id));
    } catch (err) {
      setError(err.message || 'Failed to delete');
    }
  };

  const formatDate = (d) => {
    if (!d) return '—';
    const date = new Date(d);
    return date.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
  };

  const getStatusStyles = (status) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'confirmed':
        return 'bg-green-100 text-green-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      case 'completed':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  if (loading) {
    return (
      <div className="py-12 flex justify-center">
        <p className="text-gray-500">Loading bookings...</p>
      </div>
    );
  }

  return (
    <div className="bg-black text-white py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="font-display text-3xl font-bold text-white mb-2">
              Admin Dashboard
            </h1>
            <p className="text-gray-400">
              View and manage appointment bookings.
            </p>
          </div>

          <button
            onClick={handleLogout}
            className="px-4 py-2 text-sm font-medium bg-accent-gold text-black rounded-lg hover:brightness-110 transition"
          >
            Logout
          </button>
        </div>

        {error && (
          <div className="mb-6 p-4 rounded-lg bg-red-50 text-red-800">{error}</div>
        )}

        {bookings.length === 0 ? (
          <div className="rounded-xl border border-gray-200 bg-gray-50 p-12 text-center text-gray-600">
            No bookings yet. Bookings will appear here when customers submit the form.
          </div>
        ) : (
          <div className="overflow-x-auto rounded-xl border border-white/10 bg-black/40">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-black/60">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase">Date</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase">Time</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase">Customer</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase">Phone</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase">Service</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase">Status</th>
                  <th className="px-4 py-3 text-right text-xs font-medium text-gray-400 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {bookings.map((b) => (
                  <tr key={b._id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-900">{formatDate(b.date)}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{b.timeSlot || '—'}</td>
                    <td className="px-4 py-3 text-sm text-gray-900">{b.customerName}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{b.phone}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{b.service}</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
    
                        <span
                          className={`text-xs px-2 py-1 rounded-full font-medium ${getStatusStyles(
                            b.status
                          )}`}
                        >
                          {b.status}
                        </span>

                        <select
                          value={b.status}
                          onChange={(e) => handleStatusChange(b._id, e.target.value)}
                          disabled={updatingId === b._id}
                          className="text-sm border border-white/20 bg-black text-white rounded px-2 py-1"
                        >
                          {STATUS_OPTIONS.map((s) => (
                            <option key={s} value={s}>
                              {s}
                            </option>
                          ))}
                        </select>

                      </div>
                    </td>
                    <td className="px-4 py-3 text-right">
                      <button
                        onClick={() => handleDelete(b._id)}
                        className="text-red-600 hover:text-red-800 text-sm"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <button
          onClick={fetchBookings}
          className="mt-6 px-4 py-2 border border-accent-gold/60 rounded-lg text-sm font-medium text-accent-gold hover:bg-white/5 transition"
        >
          Refresh
        </button>
      </div>
    </div>
  );
}

export default AdminDashboard;
