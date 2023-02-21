function PetInfo(props) {
  console.log(props);
  const { animal, age, hasPet } = props;
  /*
  const text = hasPet
    ? `My ${animal} in ${age} years old`
    : "I don't have an animal";
  */

  // return <h1>{text}</h1>;

  /*
  return hasPet ? (
    <h1>{`My ${animal} in ${age} years old`} </h1>
  ) : (
    <h2>I don't have an animal</h2>
  );
*/

  return hasPet ? (
    <h1>
      My {animal} in {age} years old
    </h1>
  ) : (
    <h2>I don't have an animal</h2>
  );
}

export default PetInfo;
