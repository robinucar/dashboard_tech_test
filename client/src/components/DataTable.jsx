import {format} from 'date-fns'
import './DataTable.css'
const DataTable = ({ data }) => {
    return (
      <table className='data'>
        <tbody>
          <tr>
            <th>DATE</th>
            <th>FIRST NAME</th>
            <th>LAST NAME</th>
            <th>STATUS</th>
            <th>EVENT TITLE</th>
            <th>TICKET PRICE</th>
            <th>ORGANISER NAME</th>
          </tr>
          {data.map((item,index) => (
            <tr key={item.id + index}>
              <td>{format(new Date(item.bookingDate),'dd/mm/yyyy' )}</td>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.status}</td>
              <td>{item.eventTitle}</td>
              <td>{item.ticketPrice.originalValue + ' ' + item.ticketPrice.currencyCode}</td>
              <td>{item.organiserTitle}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  export default DataTable;