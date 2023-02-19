function PetInfo(props) {
  // console.log(props);
  const { animal, age } = props;
  return (
    <h1>
      My {animal} in {age} years old
    </h1>
  );
}

export default PetInfo;
