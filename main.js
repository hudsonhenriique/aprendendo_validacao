const formulario = document.getElementById('meuFormulario');
const mensagemDiv = document.getElementById('mensagem');

formulario.addEventListener('submit',function(e){
  e.preventDefault(); //Impede que o formulário seja enviado

  const nome = formulario.nome.value
  const email = formulario.email.value

  const mensagem = `Obrigado, ${nome}! Seu email (${email}) foi enviado com sucesso`;
  mensagemDiv.textContent = mensagem;

  formulario.reset(); // Limpa os campos do formulário
});