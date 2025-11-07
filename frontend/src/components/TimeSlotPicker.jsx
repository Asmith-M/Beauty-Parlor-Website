import React from 'react';

const TimeSlotPicker = ({ selectedTime, onTimeSelect, availableSlots = [], bookedSlots = [] }) => {
  // Generate time slots from 9 AM to 6 PM
  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 9; hour <= 18; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
        slots.push(time);
      }
    }
    return slots;
  };

  const timeSlots = generateTimeSlots();

  const isBooked = (time) => bookedSlots.includes(time);
  const isAvailable = (time) => availableSlots.length === 0 || availableSlots.includes(time);

  return (
    <div className="time-slot-picker">
      <label className="block mb-3 font-semibold text-primary text-base">Select Time Slot</label>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
        {timeSlots.map((time) => {
          const booked = isBooked(time);
          const available = isAvailable(time);
          const selected = selectedTime === time;

          return (
            <button
              key={time}
              type="button"
              onClick={() => !booked && available && onTimeSelect(time)}
              disabled={booked || !available}
              className={`
                px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200
                ${selected 
                  ? 'bg-gradient-to-r from-secondary to-secondary-dark text-white shadow-md scale-105' 
                  : booked 
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed line-through' 
                    : available
                      ? 'bg-white border-2 border-gray-200 text-gray-700 hover:border-accent hover:bg-accent/10 hover:scale-105'
                      : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                }
              `}
            >
              {time}
              {booked && <span className="block text-xs mt-0.5">Booked</span>}
            </button>
          );
        })}
      </div>
      {selectedTime && (
        <p className="mt-3 text-sm text-green-600 font-medium">
          ✓ Selected: {selectedTime}
        </p>
      )}
    </div>
  );
};

export default TimeSlotPicker;