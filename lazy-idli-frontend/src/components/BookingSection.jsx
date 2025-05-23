import { Car, Clock, Train, Utensils } from "lucide-react";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";

function BookingSection() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold mb-8">Book your slots</h2>
        <p className="mb-8">
          To find special offers, occupancy rates and free time
        </p>

        <div className="bg-[#e8ffd4] text-black p-4 rounded-lg inline-block mb-8">
          <div className="flex items-center gap-4">
            <p className="font-medium">
              {format(selectedDate, "EEEE, dd MMMM yyyy")}
            </p>
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              className="px-3 py-1 rounded-md border border-gray-300 text-black"
              dateFormat="dd/MM/yyyy"
              minDate={new Date()}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-bold mb-4 text-amber-200">Activities</h3>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <p>06:00 AM – 11:00 PM</p>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-amber-200">F&B Timings</h3>
            <div className="flex items-center gap-2">
              <Utensils className="w-5 h-5" />
              <p>10:00 AM – 11:00 PM</p>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-amber-200">Personal Vehicles</h3>
            <div className="flex items-center gap-2">
              <Car className="w-5 h-5" />
              <p>Parking Available</p>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-amber-200">Nearest Metro</h3>
            <div className="flex items-center gap-2">
              <Train className="w-5 h-5" />
              <p>Silk Board (Yellow Line)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingSection;
