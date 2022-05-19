package testRead;

import org.junit.jupiter.api.Test;

import testRead.ExcelRead;

public class TestReadExcel {
	
	ExcelRead read;
	
	@Test
	public void testReadExcel () {
		//read.ReadExcelFile("C://Users//Barakat julien//Downloads//MOCK_DATA.xlsx");
		read.ReadExcelFile("C://Users//Barakat julien//Desktop//Stage Docs//Test_Excel.xlsx");
	}
}
