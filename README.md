# Havira Teste

A aplicação Havira Teste permite visualizar usuários de uma API em um mapa fornecido por outra API. A aplicação foi desenvolvida utilizando React, TypeScript, Tailwind CSS e configurada no Docker.

## Tecnologias Utilizadas

- React: Utilizado para construir a interface de usuário da aplicação.
- TypeScript: Utilizado para adicionar tipagem estática ao JavaScript, melhorando a escalabilidade e manutenibilidade do código.
- TailwindCSS: para uma aparência moderna e personalizável.
- Docker: Configuração da aplicação para facilitar o desenvolvimento e implantação.

## Funcionalidades

- Visualização de usuários em um mapa e lista interativos.
- Filtragem por nome dos usuários.
- Página para adicionar um novo usuário.
- Integração com APIs para obter dados de usuários e exibi-los no mapa.
- Utilização de React para criar uma interface de usuário dinâmica e responsiva.

## Instalação

Siga as etapas abaixo para instalar e executar a aplicação:

1. Clone o repositório no seu terminal com o comando: git clone https://github.com/RafaCardinali/havira-test.git.
2. Navegue até o diretório do projeto: `cd havira-test`.
3. Execute `npm install` para instalar todas as dependências necessárias.
4. Execute no terminal o comando `npm start` para rodar a aplicação.
5. A aplicação será aberta automaticamente no seu navegador padrão. Se não abrir, acesse http://localhost:3000 manualmente.

## Instalação pelo Docker

Siga as etapas abaixo para instalar e executar a aplicação:

1. Acesse o link `https://hub.docker.com/r/cardinali/havira-test`.
2. Copie o comando que está na tela ou aqui com `docker pull cardinali/havira-test` e use no seu terminal.
3. Execute o comando `docker run -p 3000:3000 cardinali/havira-test:latest`.
4. Aguarde até que todos os contêineres sejam iniciados e a aplicação esteja pronta para uso.
5. Acesse a aplicação no seu navegador através do endereço http://localhost:3000.