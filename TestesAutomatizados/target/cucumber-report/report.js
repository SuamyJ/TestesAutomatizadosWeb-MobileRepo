$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/CadastrarUsuario.feature");
formatter.feature({
  "name": "Cadastrar usuario",
  "description": "",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "name": "@CadastrarUsuario"
    }
  ]
});
formatter.scenario({
  "name": "cadastrar usuario",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@CadastrarUsuario"
    },
    {
      "name": "@cadastro"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "eu acionar a aba admin",
  "keyword": "Quando "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.euAcionarAbaAdmin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "acionar o botao add",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.acionarOBotaoAdd()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar no campo employer name\"Fiona Grace\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.informarNoCampoEmployerName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar no campo username \"Pedro\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.informarNoCampoUsername(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar no cmapo password \"12345678\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.informarNoCmapoPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar no campo confirmar password \"12345678\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.informarNoCampoConfirmarPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "acionar o botao salvar",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.acionarBotaoSalvar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o sistema cadastra o usuario \"Pedro\"",
  "keyword": "Entao "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.oSistemaCadastraOUsuario(String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/Login.feature");
formatter.feature({
  "name": "Login",
  "description": "",
  "keyword": "Funcionalidade"
});
formatter.scenario({
  "name": "usuario invalido",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "eu informar o usuario \"Ad\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "LoginSteps.euInformarOUsuario(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar a senha \"asd\"",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.informarASenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao login",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.clicarNoBotaoLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o sistema exibe a mensagem de usuario invalido",
  "keyword": "Entao "
});
formatter.match({
  "location": "LoginSteps.oSistemaExibeAMensagemDeUsuarioInvalido()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Realizar login",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@loginSucesso"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "eu informar o usuario \"Admin\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "LoginSteps.euInformarOUsuario(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#txtUsername\"}\n  (Session info: chrome\u003d103.0.5060.53)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027DESKTOP-U9O3NVA\u0027, ip: \u002710.0.0.108\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_291\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 103.0.5060.53, chrome: {chromedriverVersion: 102.0.5005.61 (0e59bcc00cc4..., userDataDir: C:\\Users\\suamy\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:51158}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: da6d7a494194d0e9c4a9af367d62c8a6\n*** Element info: {Using\u003did, value\u003dtxtUsername}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:368)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.sendKeys(Unknown Source)\r\n\tat pageObjetcs.LoginPage.informarCampoUsuario(LoginPage.java:33)\r\n\tat stepsDefinitions.LoginSteps.euInformarOUsuario(LoginSteps.java:21)\r\n\tat ✽.eu informar o usuario \"Admin\"(file:src/test/resources/features/Login.feature:15)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "informar a senha \"admin123\"",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.informarASenha(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "clicar no botao login",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.clicarNoBotaoLogin()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "o sistema exibe usuario logado",
  "keyword": "Entao "
});
formatter.match({
  "location": "LoginSteps.oSistemaExibeUsuarioLogado()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded2.png", null);
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/TestandoActions.feature");
formatter.feature({
  "name": "Testar Actions",
  "description": "",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "name": "@dropdown"
    }
  ]
});
formatter.scenario({
  "name": "verificar dropDown de aba",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@dropdown"
    },
    {
      "name": "@cadastro"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "acionar o submenu customField",
  "keyword": "Quando "
});
formatter.match({
  "location": "TestandoActionsSteps.acionarOSubmenuCustomField()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o sistema apresenta a tela customField",
  "keyword": "Entao "
});
formatter.match({
  "location": "TestandoActionsSteps.oSistemaApresentaATelaCustomField()"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Add Custom Field]\u003e but was:\u003c[]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat stepsDefinitions.TestandoActionsSteps.oSistemaApresentaATelaCustomField(TestandoActionsSteps.java:21)\r\n\tat ✽.o sistema apresenta a tela customField(file:src/test/resources/features/TestandoActions.feature:10)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded3.png", null);
formatter.after({
  "status": "passed"
});
});