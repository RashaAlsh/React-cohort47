import { useState, useEffect } from 'react';

const URL = 'https://www.randomuser.me/api?results=1';

function PersonController() {
  const [personData, setPersonData] = useState(null);

  const getPerson = async () => {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      const person = data.results[0];
      const formattedPersonData = {
        first_name: person.name.first,
        last_name: person.name.last,
        email: person.email,
        phone: person.phone,
      };
      setPersonData(formattedPersonData);
    } catch (error) {
      console.error('Error fetching random user data:', error);
    }
  };

  useEffect(() => {
    getPerson();
  }, []);

  const getNewPerson = () => {
    getPerson();
  };

  return { personData, getNewPerson};
}

export default PersonController;