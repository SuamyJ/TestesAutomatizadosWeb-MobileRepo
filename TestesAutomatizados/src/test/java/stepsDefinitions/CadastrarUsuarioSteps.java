package stepsDefinitions;

import io.cucumber.java.pt.E;
import io.cucumber.java.pt.Entao;
import io.cucumber.java.pt.Quando;
import pageObjetcs.CadastrarUsuarioPage;
import pageObjetcs.TelaInicialPage;

import static org.junit.Assert.assertTrue;
import static utils.Utils.*;

import org.openqa.selenium.By;
import org.openqa.selenium.By.ByXPath;

public class CadastrarUsuarioSteps {

	
	@Quando("eu acionar a aba admin")
	public void euAcionarAbaAdmin() {
	    Na(TelaInicialPage.class).acionarAbaAdmin();
	}

	@Quando("acionar o botao add")
	public void acionarOBotaoAdd() {
		Na(TelaInicialPage.class).acionarBotaoAdd();
	}

	//@Quando("informar no campo emplyer name{string}")
	//public void informarNoCampoEmployerName(String employername) {
		//Na(CadastrarUsuarioPage.class).informarCampoEmployerName(employername);
	@E("^informar no campo employer name\"([^\"]*)\"$")
		public void informarNoCampoEmployerName(String employername) throws Throwable {
		Na(CadastrarUsuarioPage.class).informarCampoEmployerName(employername);
}

	@Quando("informar no campo username {string}")
	public void informarNoCampoUsername(String username) {
		Na(CadastrarUsuarioPage.class).informarCampoUsername(username);
	}

//	//@Quando("informar no campo password {string}")
//	public void informarNoCampoPassword(String senha) {
//		Na(CadastrarUsuarioPage.class).informarCampoPassword(senha);
		
		@E("^informar no cmapo password \"([^\"]*)\"$")
		public void informarNoCmapoPassword(String senha) throws Throwable {
			Na(CadastrarUsuarioPage.class).informarCampoPassword(senha);
	
	
	}

	@Quando("informar no campo confirmar password {string}")
	public void informarNoCampoConfirmarPassword(String senha) {
		Na(CadastrarUsuarioPage.class).informarCampoConfirmarPassword(senha);
	    
	}
	@E("^acionar o botao salvar$")
	public void acionarBotaoSalvar() throws Throwable {
		Na(CadastrarUsuarioPage.class).acionarBotaoSalvar();
	
	}

	@Entao("^o sistema cadastra o usuario \"([^\"]*)\"$")
	public void oSistemaCadastraOUsuario(String userName) throws Throwable {
		assertTrue(driver.findElement(By.xpath("//a[text()='" +userName+"']")).isDisplayed());
	}

	
	}



	//private void assertTrue(boolean displayed) {
		// TODO Auto-generated method stub
		

