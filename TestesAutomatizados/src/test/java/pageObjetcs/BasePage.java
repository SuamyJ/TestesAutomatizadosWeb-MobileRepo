//A página da web utilizada para este projeto foi https://opensource-demo.orangehrmlive.com/. Como a página é OpenSource, alguns testes podem dar errados devido a
//pessoas que modificaram algo na página. Pode ser conferido todos as etapas e comentários feitos.
//PROJETO UTILIZADO COM O android-studio-ide-191.5900203-windows / Appium-windows-1.15.0-1 /
//PROJETO UTILIZADO COM eclipse-jee-2019-03-R-win32-x86_64 / jdk-8u221-windows-x64

package pageObjetcs;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class BasePage {

	
	@FindBy(linkText = "Admin")
	public WebElement abaAdmin;
	
	@FindBy(linkText = "PIM")
	public WebElement abaPim;
	
	public void acionarAbaAdmin() {
		abaAdmin.click();
	}
	
	@FindBy(id = "menu_pim_Configuration")
	public WebElement menuConfiguration;
	
	@FindBy(id = "menu_pim_listCustomFields")
	public WebElement menuField;
	
	
	}
