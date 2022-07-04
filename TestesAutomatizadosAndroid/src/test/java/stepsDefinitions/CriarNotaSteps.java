package stepsDefinitions;

import static org.junit.Assert.assertEquals;
import static utils.Utils.*;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;

import io.appium.java_client.MobileBy;
import io.cucumber.java.pt.Dado;
import io.cucumber.java.pt.Entao;
import io.cucumber.java.pt.Quando;
import pageObjects.TelaInicialPage;

public class CriarNotaSteps {
	
	TelaInicialPage telaInicial = new TelaInicialPage(driver);
	
	@Dado("que eu aciono o get started")
	public void queEuAcionoOGetStarted() throws InterruptedException {
	   telaInicial.acionarBotaoGetStarted();
	   //driver.manage().timeouts().implicitlyWait(17, TimeUnit.SECONDS);
	}
	
	@Quando("^eu acionar o botao take a note$")
	public void euAcionarOBotaoTakeANote() {
		telaInicial.acionarBotaoTakeANote();
		//driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
	}
	

	@Quando("eu informar no campo title {string}")
	public void euInformarNoCampoTitle(String title) {
	    telaInicial.informarCampoTitle(title);
	    //driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	}

	@Quando("eu informar no campo note {string}")
	public void euInformarNoCampoNote(String note) {
	   telaInicial.informarCampoNote(note);
	   //driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	}


	@Quando("eu aciionar o botao voltar")
	public void euAciionarOBotaoVoltar() {
	    telaInicial.acionarBotaoVoltar();
	}

	@Entao("o aplicativo cadastra a nota com o titulo {string}")
	public void oAplicativoCadastraANotaComOTitulo(String title) {
	    assertEquals(title, driver.findElement(By.id("com.google.android.keep:id/index_note_title")).getText());
	}

	
	@Quando("eu acionar o menu")
	public void euAcionarOMenu() {
	  telaInicial.acionarBotaoMenu();
	}

	@Quando("eu acionar a aba setting")
	public void euAcionarAAbaSetting() {
	    telaInicial.clicarSettings();
	}

	@Quando("eu tocar no switch")
	public void euTocarNoSwitch() {
	  telaInicial.clicarSwitch();  
	}

	@Entao("o switch fica desabilitado")
	public void oSwitchFicaDesabilitado() {
		assertEquals("false", driver.findElement(By.id("com.google.android.keep:id/settings_add_new_items_to_bottom")).getAttribute("checked"));
	    // metodo para checar se deu certo System.out.println("Imprimiu isso aqui: "+ driver.findElement(By.id("com.google.android.keep:id/settings_add_new_items_to_bottom")).getAttribute("checked"));
	}

	@Quando("^eu acionar a nota$")
	public void euAcionarANota() {
		telaInicial.clicarNotaCriada();
	}


@Quando("eu tocar e segurar a nota")
public void euTocarESegurarANota() {
    telaInicial.cliqueLongo();
}

@Quando("eu tocas nas opcoes")
public void euTocasNasOpcoes() {
	telaInicial.acionarOpcoes();
}

@Quando("eu tocar em deletar")
public void euTocarEmDeletar() {
    telaInicial.acionarDelete();
}

@Entao("o sistema adiciona a nota na lixeira")
public void oSistemaAdicionaANotaNaLixeira() {
    assertEquals("Note moved to trash", driver.findElement(By.id("com.google.android.keep:id/snackbar_text")).getText());
}

@Quando("^eu clicar na nota scroll teste$")
public void euClicarNaNotaScrollTeste() throws Throwable {
	driver.findElement(MobileBy.AndroidUIAutomator("new UiScrollable(new UiSelector().scrollable(true).instance(0)).scrollIntoView(new UiSelector().textContains(\"Scroll test\").instance(0))"));
	telaInicial.clicarScrollTeste();
}

@Quando("^eu clicar arrastar a nota pra direita$")
public void euClicarArrastarANotaPraDireita() throws Throwable {
	telaInicial.arrastarNotaDireita();
}

	
}
