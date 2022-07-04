package stepsDefinitions;

import io.cucumber.core.api.Scenario;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import pageObjetcs.LoginPage;

import static utils.Utils.*;

public class Hooks {

	
		@Before(value = "not @login")
		public void setUp() {
			acessarSistema();
			Na(LoginPage.class).realiizarLogin("Admin", "admin123");
			
		}
			
		@Before(value = "@login")
		public void funcionalidadeLoginV() {
			acessarSistema();
			}	
	
	
	@After()
	public void tearDown(Scenario scenario) {
		capturarTela(scenario);
		driver.quit();
	}
}
