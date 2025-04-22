const employees=require('../schema/employee');

// Get all employees
const getAllEmployees = async (req, res) => {
    try {
      const data = await employees.find({});
      res.status(200).json({data});
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
};

// Create a new employee
const createEmployee = async (req, res) => {
    try {
        const { name, email, role } = req.body;
        const employee = await employees.create({
        name,
        email,
        role,
      });
      res.status(201).json({ employee });
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
};

// update the employee by id
const updateEmployee= async (req, res) => {
    try {
      const { id } = req.params;
      const { name, email, role } = req.body;
      const employee = await employees.findByIdAndUpdate(
        id,
        {
          name,
          email,
          role,
        },
        { new: true }
      );
      if (!employee) {
        return res.status(404).json({ msg: `No employee with id : ${id}` });
      }
      res.status(200).json({ employee });
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
};

// delete the employee by id
const deleteEmployee = async (req, res) => {
    try {
      const { id } = req.params;
      const employee = await employees.findByIdAndDelete(id);
      if (!employee) {
        return res.status(404).json({ msg: `No employee with id : ${id}` });
      }
      res.status(200).send({ message:"employees deleted successfully" });
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
}

// get emplyee by id
const getEmployeeById = async (req, res) => {
    try {
      const { id } = req.params;
      const employee = await employees.findById(id);
      if (!employee) {
        return res.status(404).json({ msg: `No employee with id : ${id}` });
      }
      res.status(200).json({ employee });
    }catch(error){
        res.status(500).json({ msg: error.message });
    }
}

module.exports={
    getAllEmployees,
    createEmployee,
    updateEmployee,
    deleteEmployee,
    getEmployeeById
}