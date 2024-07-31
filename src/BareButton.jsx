const BareButton = () => {
  const handleClick = (value) => () => {
    console.log(value);
  };

  return (
    <div>
      <button onClick={handleClick('add')}>Add</button>
      <button onClick={handleClick('update')}>Update</button>
      <button onClick={handleClick('delete')}>Delete</button>
      {/* <button onClick={() => handleClick('add')}>Add</button>
      <button onClick={() => handleClick('update')}>Update</button>
      <button onClick={() => handleClick('delete')}>Delete</button> */}
    </div>
  );
};

export default BareButton;
