import Employee from '../models/employee.js';
//create employee
exports.createEmployee=async(req,res)=>{
    try{
        const{name,email,mobile,designation,gender,course}=req.body;
        const newEmployee=new Employee({
            name,
            email,
            mobile,
            designation,
            gender,
            course,
            image:req.file?req.file.path:''

        });
        const savedEmployee=await newEmployee.save();
        res.status(201).json(savedEmployee);

    }
    catch(err){
        res.status(500).json({message:"Error creating employee",error:err});
    }
};
//get employee list
exports.getEmployees = async (req, res) => {
    try {
        const employees = await Employee.find();
        res.json(employees);
    } catch (err) {
        res.status(500).json({ message: "Error fetching employees", error: err });
    }
};

// Get Employee by ID
exports.getEmployeeById = async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.id);
        res.json(employee);
    } catch (err) {
        res.status(500).json({ message: "Error fetching employee", error: err });
    }
};

// Update Employee
exports.updateEmployee = async (req, res) => {
    try {
        const { name, email, mobile, designation, gender, course } = req.body;
        const updatedEmployee = await Employee.findByIdAndUpdate(
            req.params.id,
            { name, email, mobile, designation, gender, course, image: req.file ? req.file.path : '' },
            { new: true }
        );
        res.json(updatedEmployee);
    } catch (err) {
        res.status(500).json({ message: "Error updating employee", error: err });
    }
};

// Delete Employee
exports.deleteEmployee = async (req, res) => {
    try {
        await Employee.findByIdAndDelete(req.params.id);
        res.json({ message: "Employee deleted" });
    } catch (err) {
        res.status(500).json({ message: "Error deleting employee", error: err });
    }
};
