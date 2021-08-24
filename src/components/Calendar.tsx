import React, {  FC } from 'react';
import '../App.css'
import useDatepicker, { Column } from '../helpers/useDatepicker';

const Calendar: FC = () => {
  const { calendarRows, selectedDate, todayFormatted, daysShort, monthNames, getNextMonth, getPrevMonth } = useDatepicker();

  const dateClickHandler = (date: string) => {
    console.log(date);
  }

  return(
    
      <div className="container-calendar">
      <div className="inline-element">
      <button className="button" onClick={getPrevMonth}>&lt;</button>
      <p> {`${monthNames[selectedDate.getMonth()]} - ${selectedDate.getFullYear()}`}</p>
      <button className="button" onClick={getNextMonth}>&gt;</button>
      </div>
      <table className="table">
        <thead>
          <tr>
            {daysShort.map(day => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {
            Object.values(calendarRows).map((cols: Column[]) => {
              return <tr key={cols[0].date}>
                {cols.map(col => (
                  col.date === todayFormatted
                    ? <td key={col.date} className={`${col.classes} today`} onClick={() => dateClickHandler(col.date)}>
                      {col.value}
                    </td>
                    : <td key={col.date} className={col.classes} onClick={() => dateClickHandler(col.date)}>{col.value}</td>
                ))}
              </tr>
            })
          }
        </tbody>
      </table>

      </div>
      
   
  );
}

export default Calendar;