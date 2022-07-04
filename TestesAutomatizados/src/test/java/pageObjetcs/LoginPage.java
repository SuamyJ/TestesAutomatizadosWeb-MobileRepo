package pageObjetcs;

//import org.openqa.selenium.By;
//import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

	
 
public class LoginPage {
	
	@FindBy(id = "txtUsername")
	private WebElement campoUsuario;
	
	@FindBy(name = "txtPassword")
	private WebElement campoSenha;
	
	@FindBy(name = "Submit")
	private WebElement botaoLogin;
	
	//@FindBy(xpath = "link;<input name=\"txtPassword\" id=\"txtPassword\" autocomplete=\"off\" type=\"password\">")
	//private WebElement link;
	
	//@FindBy(css = "[id=txtUsername]")
	//private WebElement as;
	
	//@FindBy (linkText = "Submit")
	//private WebElement //botaoLogin;
	
	 
	
	public void informarCampoUsuario (String usuario) {
		campoUsuario.sendKeys(usuario);
		
		//WebElement campoUsuario = driver.findElement(By.name("txtUsername")); 	
	
		//driver.findElement(By.name("txtUsername")).sendKeys(usuario);
		
		
	}

	public void informarCampoSenha (String senha) {
		//driver.findElement(By.name("txtPassword")).sendKeys(senha);
		campoSenha.sendKeys(senha);
		
		
		
	}
	public void acionarBotaoLogin () {
		//driver.findElement(By.name("Submit")).click();
		botaoLogin.click();
			}
	
	//porque separado e porque junto, metodos separados precisa validar campo por campo
	//metodo separado para ficar mais junto, é recomendável fazer os 2 tipos;

	public void realiizarLogin(String usuario, String senha) {
		informarCampoUsuario(usuario);
		informarCampoSenha(senha);
		acionarBotaoLogin();
	}


}
