Funcionalidade: Cadastro no site Adopet
Cenário: Realizar um cadastro no site com sucesso


Passos:

O usuário acessa a página de cadastro.
O usuário preenche o campo "Nome".
O usuário preenche o campo "E-mail" com um endereço de e-mail válido.
O usuário preenche o campo "Senha" com uma senha válida.
O usuário preenche o campo "Confirmação de Senha" com a mesma senha inserida no passo anterior.
O usuário clica no botão "Cadastrar".

Resultados Esperados:
O sistema processa as informações fornecidas.

Regra de Negócio:

E-mail e senha são campos obrigatórios para o cadastro.

------------------------------------------------------------------------------------

Funcionalidade: Cadastro no site Adopet
Cenário: Falha na tentativa de cadastro

Passos:
O usuário acessa a pagina de cadastro,
O usuário deixa os campos obrigatórios(nome, email e confirmação de senha) em branco.
O usuário clica no botão 'Cadastrar'.

Resultados esperados:

O sistema valida os campos obrigatórios em branco.
O sistema exibe as mensagens de erro indicando que os campos obrigatórios devem ser preenchidos.

------------------------------------------------------------------------------------

Funcionalidade: Login no site AdoPet
Cenario: Login no sistema com sucesso

Passos:
O usuário acessa a página de login.
O usuário insere seu email 'felipe@gmail.com' e senha 'Senha123' nos campos correspondentes.
O usuário clica no botão 'Entrar'.

Resultados Esperados:

O sistema autentica as credenciais fornecidas.
O sistema redireciona o usuário para a página '/home'.

------------------------------------------------------------------------------------

