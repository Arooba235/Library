import Manager from '../models/Manager';

const getManagers = async (req, res) => {
  try {
    const managers = await Manager.find();
    res.status(200).json(managers);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching managers', error });
  }
};

const createManager = async (req, res) => {
  const managerData = req.body;
  const newManager = new Manager(managerData);

  try {
    await newManager.save();
    res.status(201).json(newManager);
  } catch (error) {
    res.status(500).json({ message: 'Error creating manager', error });
  }
};

// Add other CRUD operations as needed

export { getManagers, createManager };
