const DataTable = ({ data }) => {
    return (
      <table>
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
              <td>{item.bookingDate}</td>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.eventTitle}</td>
              <td>{item.status}</td>
              <td>{item.ticketPrice.originalValue + ' ' + item.ticketPrice.currencyCode}</td>
              <td>{item.organiserTitle}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  export default DataTable;