import persons from '../data/persons.js';
import Person from './Person.js';

function Persons() {
  return (
    <div className="cards">
      {persons.map((person) => {
        return <Person key={person.id} {...person} />;
      })}
    </div>
  );
}

export default Persons;
