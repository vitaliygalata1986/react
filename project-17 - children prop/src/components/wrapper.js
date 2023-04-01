function Wrapper({ color, children }) {
  // console.log(props);
  const style = {
    backgroundColor: color,
    width: '250px',
    padding: '20px',
    margin: '20px auto',
  };
  return <div style={style}>{children}</div>;
}

export default Wrapper;
