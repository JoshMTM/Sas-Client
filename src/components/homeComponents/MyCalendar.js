import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import "./MyCalendar.css";

function MyCalendar() {
  const handleDateClick = (arg) => {
    // bind with an arrow function
    alert(arg.dateStr);
  };

  return (
    <div className="calendar" style={{ width: "500px", height: "600px" }}>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        dateClick={handleDateClick}
      />
    </div>
  );
}

export default MyCalendar;
