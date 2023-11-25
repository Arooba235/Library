import Staff from '../models/Staff';

const getStaff = async (req, res) => {
  try {
    const staff = await Staff.find();
    res.status(200).json(staff);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching staff', error });
  }
};

const createStaff = async (req, res) => {
  const staffData = req.body;
  const newStaff = new Staff(staffData);

  try {
    await newStaff.save();
    res.status(201).json(newStaff);
  } catch (error) {
    res.status(500).json({ message: 'Error creating staff', error });
  }
};

// Add other CRUD operations as needed

export { getStaff, createStaff };
