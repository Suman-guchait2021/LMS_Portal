// import { color } from "chart.js/helpers";
import DateObject from "react-date-object";
import event from "./../assets/event.json"

function EventHistory() {
  var date = new DateObject();
  var date2 = date.format();
  var date3 =
    date2[8] +
    date2[9] +
    date2[7] +
    date2[5] +
    date2[6] +
    date2[4] +
    date2[0] +
    date2[1] +
    date2[2] +
    date2[3];
  return (
    <div>
      <ul style={{ textAlign: "left" }}>
        {event.map((event, index) => (
          event.Date===date3 ? (
          <li key={index}>
            {event.Date} | {event.Events}
          </li>) :(
            null
          )
        ))}
      </ul>
    </div>
  );
}

export default EventHistory;
