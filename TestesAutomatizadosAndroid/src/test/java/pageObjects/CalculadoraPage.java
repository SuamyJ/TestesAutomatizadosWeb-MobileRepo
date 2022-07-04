//PROJETO UTILIZADO COM O android-studio-ide-191.5900203-windows / Appium-windows-1.15.0-1 /
//PROJETO UTILIZADO COM eclipse-jee-2019-03-R-win32-x86_64 / jdk-8u221-windows-x64
// PROJETO UTILIZADO COM NEXUS 5X.

//package pageObjects;
//
//import org.openqa.selenium.support.PageFactory;
//
//import io.appium.java_client.AppiumDriver;
//import io.appium.java_client.MobileElement;
//import io.appium.java_client.pagefactory.AndroidFindBy;
//import io.appium.java_client.pagefactory.AppiumFieldDecorator;
//
//public class CalculadoraPage {
//
//	
//	public CalculadoraPage (AppiumDriver<?> driver) {
//		PageFactory.initElements(new AppiumFieldDecorator(driver), this);
//	}
//	
//	
//	
//	@AndroidFindBy(id= "com.android.calculator2:id/digit_6")
//	private MobileElement tecla6;
//	
//	@AndroidFindBy(accessibility= "plus")
//	private MobileElement teclaMais;
//	
//	
//	public void digitar2() {
//		tecla6.click();
//	}
//		//MobileElement el1 = (MobileElement) driver.findElementById("com.android.calculator2:id/digit_2");
//		//el1.click();
//		// MobileElement el2 = (MobileElement)
//		// driver.findElementByAccessibilityId("plus");
//		// el2.click();
//		// MobileElement el4 = (MobileElement)
//		// driver.findElementById("com.android.calculator2:id/result");
//		// el4.click();
//	
//
//	public void acionarTeclaMais() {
//		teclaMais.click();
//		
//		
////		MobileElement el2 = (MobileElement) driver.findElementByAccessibilityId("plus");
////		el2.click();
//
//	}
//
////	public void fecharTest() {
////		driver.quit();
////	}
//
//}