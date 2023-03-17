function ResetBtn({ onClick }) {
  return (
    <div>
      <button onClick={onClick} style={{ backgroundColor: 'lightgreen' }}>
        Reset
      </button>
    </div>
  );
}
export default ResetBtn;
