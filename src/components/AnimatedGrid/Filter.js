const Filter = ({ filter, setFilter }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "start",
        alignItems: "center",
      }}
    >
      <button
        className={!filter ? "active" : ""}
        onClick={() => {
          setFilter(0);
        }}
      >
        All
      </button>
      <button
        className={filter === 35 ? "active" : ""}
        onClick={() => {
          setFilter(35);
        }}
      >
        Comedy
      </button>
      <button
        className={filter === 28 ? "active" : ""}
        onClick={() => {
          setFilter(28);
        }}
      >
        Action
      </button>
    </div>
  );
};

export default Filter;
