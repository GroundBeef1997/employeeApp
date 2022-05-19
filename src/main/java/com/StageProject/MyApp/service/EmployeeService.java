package com.StageProject.MyApp.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.StageProject.MyApp.exception.ResourceNotFoundException;
import com.StageProject.MyApp.model.Employee;
import com.StageProject.MyApp.repository.EmployeeRepository;

@Service
public class EmployeeService {
	
	@Autowired
	private EmployeeRepository employeeRepository;
	
	//Permet de retrouver tout les employées
	public List<Employee> getAllEmployees() {
		return employeeRepository.findAll();
	}
	
	//Permet d'ajouter un employé
	public Employee addEmployee(Employee employee) {
		return employeeRepository.save(employee);
	}
	
	//Permet de retrouver un employee selon son identifiant
	public Employee getEmployeeById(Long id) {
		Employee employee = employeeRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("l'employé que vous recherchez n'existe pas"));
		return employee;
	}
	
	//Permet de mettre à jour un employé
	public Employee update(Long id, Employee employeeDetails) {
		Employee employee = employeeRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("l'employé que vous recherchez n'existe pas"));
		
		employee.setFirstName(employeeDetails.getFirstName());
		employee.setLastName(employeeDetails.getLastName());
		employee.setEmail(employeeDetails.getEmail());
		Employee UpdatedEmployee = employeeRepository.save(employee);
		
		return UpdatedEmployee;
	}
	
	//Permet de supprimer un employé
	public Map<String, Boolean> deleteEmployee(Long id) {
		Employee employee = employeeRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("l'employé que vous recherchez n'existe pas"));
		
		employeeRepository.delete(employee);
		
		Map<String, Boolean> response = new HashMap<>();
		response.put("Employé n°" + id + " à été supprimé", Boolean.TRUE);
		return response;
	}
}
