#language: pt
#encoding: UTF-8



Funcionalidade: Google keep

Contexto:

Dado que eu aciono o get started

Cenario: Criar uma nota
Quando eu acionar o botao take a note
	E eu informar no campo title "Nota1"
	E eu informar no campo note "Nota"
	E eu aciionar o botao voltar
	Entao o aplicativo cadastra a nota com o titulo "Nota1"


	Cenario: interagir com o switch das configuracoes
	Quando eu acionar o menu
	E eu acionar a aba setting
	E eu tocar no switch
	E eu aciionar o botao voltar
	Entao o switch fica desabilitado
	
	
	Cenario: editar nota
	Quando eu acionar a nota
	E eu informar no campo title "NotaEditada"
	E eu informar no campo note "NotaeditadaNota"
	Entao o aplicativo cadastra a nota com o titulo "NotaEditada"
	

	Cenario: excluir nota
	Quando eu tocar e segurar a nota
	E eu tocas nas opcoes
	E eu tocar em deletar
	Entao o sistema adiciona a nota na lixeira
	
	Cenario: clicar na scroll teste
	Quando eu clicar na nota scroll teste
	
	@cenario
	Cenario: arquivar nota
	Quando eu clicar arrastar a nota pra direita
	