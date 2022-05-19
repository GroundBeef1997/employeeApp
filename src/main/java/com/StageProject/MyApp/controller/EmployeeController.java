package com.StageProject.MyApp.controller;

import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.StageProject.MyApp.model.Employee;
import com.StageProject.MyApp.service.EmployeeService;

//@CrossOrigin(origins = "https://myapp-angular-heroku.herokuapp.com/") 
@CrossOrigin(origins = "http://localhost:4200/")
@RestController
@RequestMapping("/api/V1/")
public class EmployeeController {
	
	@Autowired
	private EmployeeService employeeService;
	
	//Permet de retrouver tout les employées
	@GetMapping("/employees")
	public List<Employee> getAllEmployees() {
		return employeeService.getAllEmployees();
	}
	
	//Permet d'ajouter un employé
	@PostMapping("/employees")
	public Employee addEmployee(@RequestBody Employee employee) {
		return employeeService.addEmployee(employee);
	}
	
	//Permet de retrouver un employee selon son identifiant
	@GetMapping("/employees/{id}")
	public ResponseEntity<Employee> getEmployeeById(@PathVariable Long id) {
		Employee employee = employeeService.getEmployeeById(id);
		return ResponseEntity.ok(employee);
	}
	
	//Permet de mettre à jour un employé
	@PutMapping("/employees/{id}")
	public ResponseEntity<Employee> updateEmployee(@PathVariable Long id, @RequestBody Employee employeeDetails) {
		Employee UpdatedEmployee = employeeService.update(id, employeeDetails);
		return ResponseEntity.ok(UpdatedEmployee);
	}
	
	//Permet de supprimer un employé
	@DeleteMapping("/employees/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteEmployee(@PathVariable Long id) {	
		Map<String, Boolean> response = employeeService.deleteEmployee(id);
		return ResponseEntity.ok(response);
	}
}
