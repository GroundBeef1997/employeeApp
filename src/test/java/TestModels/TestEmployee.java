package TestModels;

import static org.junit.Assert.assertNotEquals;
import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ContextConfiguration;
import com.StageProject.MyApp.*;
import com.StageProject.MyApp.model.Car;
import com.StageProject.MyApp.model.Employee;
import com.StageProject.MyApp.service.CarService;
import com.StageProject.MyApp.service.EmployeeService;

@SpringBootTest
@ContextConfiguration(classes = MyAppApplication.class)
public class TestEmployee {
	
	@Autowired
	private EmployeeService employeeService;
	
	@Autowired
	private CarService carService;
	
	@Test
	public void addEmployee() {
		Employee employee = new Employee();
	    employee.setFirstName("julien");
	    
	    employeeService.addEmployee(employee);
	    Employee e = employeeService.getEmployeeById(employee.getId());
	    assertEquals(e.getId(), employee.getId());
	}
	
	@Test
	public void updateEmployee() {
		Employee employeeUpdate = new Employee();
		employeeUpdate.setFirstName("julien2");
	    
	    employeeService.addEmployee(employeeUpdate);
	    
		Employee employeeUpdated = new Employee();
		employeeUpdated.setFirstName("julien");

	    employeeService.update(employeeUpdate.getId(), employeeUpdated);
	    Employee e1 = employeeService.getEmployeeById(employeeUpdate.getId());
	    assertEquals(e1.getFirstName(), employeeUpdated.getFirstName());
	}
	
	@Test
	public void deleteEmployee() {
		Employee employee = new Employee();
		employee.setFirstName("julien3");
	    
	    employeeService.addEmployee(employee);
	 
	    Car car = new Car();
	    car.setIntitule("volvo");
	    carService.addCar(car, employee.getId());
	    
	    Car c2 = carService.getCarById(car.getId());
	    assertEquals(car.getId(), c2.getId());
	    
	    var e2 = employeeService.deleteEmployee(employee.getId());
	    //assertEquals(e2, "{Employé n°1 à été supprimé=true}");
	    
	}
}
