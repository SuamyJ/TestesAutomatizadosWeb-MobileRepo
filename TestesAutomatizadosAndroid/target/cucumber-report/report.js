$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/CriarNota.feature");
formatter.feature({
  "name": "Google keep",
  "description": "",
  "keyword": "Funcionalidade"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que eu aciono o get started",
  "keyword": "Dado "
});
formatter.match({
  "location": "CriarNotaSteps.queEuAcionoOGetStarted()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Criar uma nota",
  "description": "",
  "keyword": "Cenario"
});
formatter.step({
  "name": "eu acionar o botao take a note",
  "keyword": "Quando "
});
formatter.match({
  "location": "CriarNotaSteps.euAcionarOBotaoTakeANote()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu informar no campo title \"Nota1\"",
  "keyword": "E "
});
formatter.match({
  "location": "CriarNotaSteps.euInformarNoCampoTitle(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu informar no campo note \"Nota\"",
  "keyword": "E "
});
formatter.match({
  "location": "CriarNotaSteps.euInformarNoCampoNote(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu aciionar o botao voltar",
  "keyword": "E "
});
formatter.match({
  "location": "CriarNotaSteps.euAciionarOBotaoVoltar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o aplicativo cadastra a nota com o titulo \"Nota1\"",
  "keyword": "Entao "
});
formatter.match({
  "location": "CriarNotaSteps.oAplicativoCadastraANotaComOTitulo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que eu aciono o get started",
  "keyword": "Dado "
});
formatter.match({
  "location": "CriarNotaSteps.queEuAcionoOGetStarted()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "interagir com o switch das configuracoes",
  "description": "",
  "keyword": "Cenario"
});
formatter.step({
  "name": "eu acionar o menu",
  "keyword": "Quando "
});
formatter.match({
  "location": "CriarNotaSteps.euAcionarOMenu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu acionar a aba setting",
  "keyword": "E "
});
formatter.match({
  "location": "CriarNotaSteps.euAcionarAAbaSetting()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu tocar no switch",
  "keyword": "E "
});
formatter.match({
  "location": "CriarNotaSteps.euTocarNoSwitch()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu aciionar o botao voltar",
  "keyword": "E "
});
formatter.match({
  "location": "CriarNotaSteps.euAciionarOBotaoVoltar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o switch fica desabilitado",
  "keyword": "Entao "
});
formatter.match({
  "location": "CriarNotaSteps.oSwitchFicaDesabilitado()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: An element could not be located on the page using the given search parameters.\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-U9O3NVA\u0027, ip: \u002710.0.0.108\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_291\u0027\nDriver info: io.appium.java_client.AppiumDriver\nCapabilities {appActivity: com.google.android.apps.kee..., appPackage: com.google.android.keep, automationName: uiautomator2, databaseEnabled: false, desired: {appActivity: com.google.android.apps.kee..., appPackage: com.google.android.keep, automationName: uiautomator2, deviceName: emulator-5554, platformName: android}, deviceApiLevel: 24, deviceManufacturer: Google, deviceModel: Android SDK built for x86, deviceName: emulator-5554, deviceScreenDensity: 420, deviceScreenSize: 1080x1920, deviceUDID: emulator-5554, javascriptEnabled: true, locationContextEnabled: false, networkConnectionEnabled: true, pixelRatio: 2.625, platform: LINUX, platformName: Android, platformVersion: 7.0, statBarHeight: 63, takesScreenshot: true, viewportRect: {height: 1731, left: 0, top: 63, width: 1080}, warnings: {}, webStorageEnabled: false}\nSession ID: e5453ac8-5dcb-4d71-8c64-617b3daa31da\n*** Element info: {Using\u003did, value\u003dcom.google.android.keep:id/settings_add_new_items_to_bottom}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:239)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:41)\r\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:61)\r\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElementById(DefaultGenericMobileDriver.java:69)\r\n\tat io.appium.java_client.AppiumDriver.findElementById(AppiumDriver.java:1)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:57)\r\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\r\n\tat stepsDefinitions.CriarNotaSteps.oSwitchFicaDesabilitado(CriarNotaSteps.java:74)\r\n\tat ✽.o switch fica desabilitado(file:src/test/resources/features/CriarNota.feature:25)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded1.png", null);
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que eu aciono o get started",
  "keyword": "Dado "
});
formatter.match({
  "location": "CriarNotaSteps.queEuAcionoOGetStarted()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "editar nota",
  "description": "",
  "keyword": "Cenario"
});
formatter.step({
  "name": "eu acionar a nota",
  "keyword": "Quando "
});
formatter.match({
  "location": "CriarNotaSteps.euAcionarANota()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu informar no campo title \"NotaEditada\"",
  "keyword": "E "
});
formatter.match({
  "location": "CriarNotaSteps.euInformarNoCampoTitle(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu informar no campo note \"NotaeditadaNota\"",
  "keyword": "E "
});
formatter.match({
  "location": "CriarNotaSteps.euInformarNoCampoNote(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o aplicativo cadastra a nota com o titulo \"NotaEditada\"",
  "keyword": "Entao "
});
formatter.match({
  "location": "CriarNotaSteps.oAplicativoCadastraANotaComOTitulo(String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003cNota[Editada]\u003e but was:\u003cNota[1]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat stepsDefinitions.CriarNotaSteps.oAplicativoCadastraANotaComOTitulo(CriarNotaSteps.java:53)\r\n\tat ✽.o aplicativo cadastra a nota com o titulo \"NotaEditada\"(file:src/test/resources/features/CriarNota.feature:32)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded2.png", null);
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que eu aciono o get started",
  "keyword": "Dado "
});
formatter.match({
  "location": "CriarNotaSteps.queEuAcionoOGetStarted()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "excluir nota",
  "description": "",
  "keyword": "Cenario"
});
formatter.step({
  "name": "eu tocar e segurar a nota",
  "keyword": "Quando "
});
formatter.match({
  "location": "CriarNotaSteps.euTocarESegurarANota()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu tocas nas opcoes",
  "keyword": "E "
});
formatter.match({
  "location": "CriarNotaSteps.euTocasNasOpcoes()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu tocar em deletar",
  "keyword": "E "
});
formatter.match({
  "location": "CriarNotaSteps.euTocarEmDeletar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o sistema adiciona a nota na lixeira",
  "keyword": "Entao "
});
formatter.match({
  "location": "CriarNotaSteps.oSistemaAdicionaANotaNaLixeira()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded3.png", null);
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que eu aciono o get started",
  "keyword": "Dado "
});
formatter.match({
  "location": "CriarNotaSteps.queEuAcionoOGetStarted()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "clicar na scroll teste",
  "description": "",
  "keyword": "Cenario"
});
formatter.step({
  "name": "eu clicar na nota scroll teste",
  "keyword": "Quando "
});
formatter.match({
  "location": "CriarNotaSteps.euClicarNaNotaScrollTeste()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded4.png", null);
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que eu aciono o get started",
  "keyword": "Dado "
});
formatter.match({
  "location": "CriarNotaSteps.queEuAcionoOGetStarted()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "arquivar nota",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@cenario"
    }
  ]
});
formatter.step({
  "name": "eu clicar arrastar a nota pra direita",
  "keyword": "Quando "
});
formatter.match({
  "location": "CriarNotaSteps.euClicarArrastarANotaPraDireita()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded5.png", null);
formatter.after({
  "status": "passed"
});
});