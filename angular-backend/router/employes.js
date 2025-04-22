const express = require('express')
const router = express.Router()

const{
    getAllEmployees,
    createEmployee,
    updateEmployee,
    deleteEmployee,
    getEmployeeById
}=require('../controller/employee')

router.route('/')
.get(getAllEmployees)
.post(createEmployee)

router.route('/:id')
.get(getEmployeeById)
.put(updateEmployee)
.delete(deleteEmployee)

module.exports=router;