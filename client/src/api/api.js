const API_BASE = '/api';

export const api = {
  async getBookings() {
    const res = await fetch(`${API_BASE}/bookings`);
    if (!res.ok) throw new Error('Failed to fetch bookings');
    const json = await res.json();
    return json.data;
  },

  async getBookingById(id) {
    const res = await fetch(`${API_BASE}/bookings/${id}`);
    if (!res.ok) throw new Error('Failed to fetch booking');
    const json = await res.json();
    return json.data;
  },

  async createBooking(booking) {
    const res = await fetch(`${API_BASE}/bookings`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(booking),
    });
    const json = await res.json();
    if (!res.ok) throw new Error(json.message || 'Failed to create booking');
    return json.data;
  },

  async updateBookingStatus(id, status) {
    const res = await fetch(`${API_BASE}/bookings/${id}/status`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status }),
    });
    const json = await res.json();
    if (!res.ok) throw new Error(json.message || 'Failed to update booking');
    return json.data;
  },

  async deleteBooking(id) {
    const res = await fetch(`${API_BASE}/bookings/${id}`, { method: 'DELETE' });
    const json = await res.json();
    if (!res.ok) throw new Error(json.message || 'Failed to delete booking');
    return json;
  },

  async submitContact(form) {
    const res = await fetch(`${API_BASE}/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    const json = await res.json();
    if (!res.ok) throw new Error(json.message || 'Failed to submit message');
    return json.data;
  },
};
