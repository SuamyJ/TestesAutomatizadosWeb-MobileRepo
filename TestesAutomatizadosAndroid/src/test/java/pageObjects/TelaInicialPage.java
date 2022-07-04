package pageObjects;

import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.PageFactory;

import io.appium.java_client.AppiumDriver;
import io.appium.java_client.MobileElement;
import io.appium.java_client.pagefactory.AndroidFindBy;
import io.appium.java_client.pagefactory.AppiumFieldDecorator;
import static utils.Utils.*;

import java.util.List;

public class TelaInicialPage {
	
	

	public TelaInicialPage (AppiumDriver<?> driver) {
		PageFactory.initElements(new AppiumFieldDecorator(driver), this);
	}

	@AndroidFindBy(id= "com.google.android.keep:id/image")
	private MobileElement botaoGetStarted;
	
	
	@AndroidFindBy(id= "com.google.android.keep:id/new_note_button")
	private MobileElement botaoTakeANote;
	
	@AndroidFindBy(id = "com.google.android.keep:id/editable_title")
	private MobileElement campoTitle;
	
	//@AndroidFindBy(id = "com.google.android.keep:id/backdrop")
	//private MobileElement campoTitle;
	
	@AndroidFindBy(id = "com.google.android.keep:id/edit_note_text")
	private MobileElement campoNote;
	
	//@AndroidFindBy(id = "com.google.android.keep:id/edit_note_text")
	//private MobileElement campoNote;
	
	@AndroidFindBy(accessibility = "Open navigation drawer")
	private MobileElement botaoVoltar;
	
	@AndroidFindBy(accessibility = "Open navigation drawer")
	private MobileElement botaoMenu;
	
	@AndroidFindBy(xpath = "//android.widget.ListView//android.widget.LinearLayout")
	private List<MobileElement> menus; 
	
	@AndroidFindBy(id = "com.google.android.keep:id/settings_add_new_items_to_bottom")
	private MobileElement switchAddNewItems; 
	
	@AndroidFindBy(xpath = "//android.widget.TextView[@text='Nota1']")
	private MobileElement notaCriada;
	
	@AndroidFindBy(xpath = "//android.widget.TextView[@text='Scroll teste']")
	private MobileElement scrollTeste;
	
	@AndroidFindBy(accessibility = "More options")
	private MobileElement opcoes;
	
	@AndroidFindBy(xpath = "//android.widget.TextView[@text='Delete']")
	private MobileElement opcaoDeletar;
	
	//@AndroidFindBy(xpath = "//android.widget.TextView[@text='NotaTeste']")
	//private MobileElement notaTeste;
	
	//@AndroidFindBy(id = "com.google.android.keep:id/snackbar_text")
	//private MobileElement msgLixeira; 
	
	
	public void acionarBotaoGetStarted() throws InterruptedException {
		botaoGetStarted.click();
		Thread.sleep(15000);
	}
	
	public void acionarBotaoTakeANote() {
		botaoTakeANote.click();
}
	
	public void informarCampoTitle(String title) {
		//campoNote.clear(); apaga o que estiver escrito
		campoTitle.sendKeys(title);
}
	public void informarCampoNote(String note) {
		campoNote.sendKeys(note);
	}
	public void acionarBotaoVoltar() {
		botaoVoltar.click();
	}
	public void acionarBotaoMenu() {
		botaoMenu.click();
	}
	
	public void clicarSettings() {
		//System.out.println("Imprimiu isso aqui: " + menus.size());
		menus.get(4).click();
	}
	
	public void clicarSwitch() {
		switchAddNewItems.click();
}
	public void clicarNotaCriada() {
		notaCriada.click();
}
	public void acionarOpcoes() {
		opcoes.click();
	}
	public void acionarDelete() {
		opcaoDeletar.click();
}
	public void cliqueLongo() {
		Actions acao = new Actions(driver);
		acao.clickAndHold(notaCriada).perform();
	}
	
	public void clicarScrollTeste() throws InterruptedException {
		scrollTeste.click();
		Thread.sleep(4000);
	}
	
	public void arrastarNotaDireita() throws InterruptedException  {
		Thread.sleep(2000);
		swipeDireita();
		Thread.sleep(2000);
	}
}
//	//w3school mostra todos os xpath, tem tutorial, axes e etc...
//	//android.widget.EditText[@text-'Title')]
//	//no mobile vem class primeiro - android.widget.EditText[@text-'valor')]
//
