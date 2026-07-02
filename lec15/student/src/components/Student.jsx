function Student(props) {
  return (
    <div
      style={{
        border: "none",
        padding: "20px",
        margin: "15px",
        backgroundColor: "white",
        borderRadius: "15px",
        boxShadow: "0px 5px 15px rgba(0,0,0,0.2)",
        transition: "0.3s",
        width: "280px",
      }}
    >
      <h2 style={{ color: "#0d6efd" }}>{props.name}</h2>

      <p><strong>Age:</strong> {props.age}</p>

      <p> <strong>City:</strong> {props.city}</p>

      <p> <strong>Marks:</strong> {props.marks}</p>

      {props.course && (
        <p>
           <strong>Course:</strong> {props.course}
        </p>
      )}

      {props.marks > 90 && (
        <h3
          style={{
            color: "white",
            background: "green",
            padding: "8px",
            borderRadius: "20px",
            textAlign: "center",
          }}
        >
          🏆 Topper
        </h3>
      )}
    </div>
  );
}

export default Student;