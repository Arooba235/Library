import Student from '../models/Student';

const getStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching students', error });
  }
};

const createStudent = async (req, res) => {
  const studentData = req.body;
  const newStudent = new Student(studentData);

  try {
    await newStudent.save();
    res.status(201).json(newStudent);
  } catch (error) {
    res.status(500).json({ message: 'Error creating student', error });
  }
};

// Add other CRUD operations as needed

export { getStudents, createStudent };
