//package stepsDefinitions;
//
//import java.net.MalformedURLException;
//
//import io.cucumber.java.pt.Dado;
//import io.cucumber.java.pt.E;
//import io.cucumber.java.pt.Entao;
//import io.cucumber.java.pt.Quando;
//import pageObjects.CalculadoraPage;
//
//import static utils.Utils.*;
//
//public class CalculadoraSteps {
//
////	CalculadoraPage calculadora = new CalculadoraPage();
//	CalculadoraPage calculadora = new CalculadoraPage(driver);
//	
//	
////	@DADO("QUE EU ESTEJA ACESSANDO A CALCULADORA")
////	PUBLIC VOID QUEEUESTEJAACESSANDOACALCULADORA() THROWS EXCEPTION {
////		CALCULADORA.DIGITAR2();
////	    
////	}
//
//	@Quando("eu digitar o numero {string}")
//	public void euDigitarONumero(String string) {
//		calculadora.digitar2();
//	}
//
//	@Quando("eu acionar a telca mais")
//	public void euAcionarATelcaMais() {
//	    calculadora.acionarTeclaMais();
//	}
//
//	@Entao("a calculadora apresenta o resultado {string}")
//	public void aCalculadoraApresentaOResultado(String string) {
//	    //assertEquals("4", driver.findElementById("com.android.calculador"))
//	}
//
////	@E("^eu fecho meu teste$")
////	public void euFechoMeuTeste() throws Throwable {
////		calculadora.fecharTest();
//
//	}
//	
//
