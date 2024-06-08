function Person({ personData }) {
    return(
      <ul>
        {personData ? (
          <>
            <li>First Name: {this.props.personData.first_name}</li>
            <li>Last Name: {this.props.personData.last_name}</li>
            <li>Email: {this.props.personData.email}</li>
            <li>Phone: {this.props.personData.phone}</li>
          </>
        ) : (
          <li>Loading...</li>
        )}
      </ul>
    );
  }
  
  export default Person;