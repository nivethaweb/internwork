import { useState } from "react";
import Student from "./components/Student";
import "./App.css";

function App() {
  const [studentCount, setStudentCount] = useState(5);

  const students = [
    {
      id: 1,
      name: "Ram",
      age: 21,
      city: "Chennai",
      marks: 95,
      course: "React",
    },
    {
      id: 2,
      name: "Ravi",
      age: 22,
      city: "Coimbatore",
      marks: 82,
      course: "Java",
    },
    {
      id: 3,
      name: "Priya",
      age: 20,
      city: "Madurai",
      marks: 70,
      course: "",
    },
    {
      id: 4,
      name: "Arun",
      age: 23,
      city: "Salem",
      marks: 91,
      course: "Python",
    },
    {
      id: 5,
      name: "Kiran",
      age: 21,
      city: "Trichy",
      marks: 76,
      course: "",
    },
  ];

  return (
    <div className="container">
      <h1 className="title">🎓 Student Details</h1>

      <div className="header">
        <h2>👨‍🎓 Student Count: {studentCount}</h2>

        <button onClick={() => setStudentCount(studentCount + 1)}>
          ➕ Increase Student Count
        </button>
      </div>

      <hr />

      <div className="student-list">
        {students
          .filter((student) => student.marks > 75)
          .map((student) => (
            <Student
              key={student.id}
              name={student.name}
              age={student.age}
              city={student.city}
              marks={student.marks}
              course={student.course}
            />
          ))}
      </div>
    </div>
  );
}

export default App;