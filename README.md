📱 Aplicação Mobile com React Native e API REST

Este repositório apresenta um projeto acadêmico que consiste em uma aplicação mobile desenvolvida em React Native, integrada a uma API REST construída com Node.js e Express.

O objetivo do projeto é demonstrar a integração entre frontend mobile e backend, aplicando conceitos de arquitetura em camadas, consumo de APIs e boas práticas de organização de código.

🧩 Diagrama de Arquitetura (conceitual)

⚠️ Observação:
O diagrama abaixo foi utilizado apenas para fins didáticos e apresentação em slides, conforme solicitado na atividade.
Ele representa a arquitetura conceitual do sistema, e não um diagrama técnico detalhado da implementação.

[ Mobile App ]
(React Native / Expo)
       |
       | HTTP (JSON)
       v
[ API REST ]
(Node.js + Express)
       |
       v
[ Lógica / Rotas ]


Essa arquitetura ilustra a separação entre frontend e backend, onde o aplicativo mobile consome a API por meio de requisições HTTP no formato JSON.

🖥️ Frontend (Aplicação Mobile)

O frontend foi desenvolvido utilizando React Native com Expo, sendo responsável exclusivamente pela interface do usuário e pelas interações com a aplicação.

Principais características:

Interface mobile multiplataforma

Consumo de API REST via HTTP

Comunicação utilizando JSON

Separação clara entre interface e lógica de negócio

⚙️ Backend (API REST)

O backend foi desenvolvido com Node.js e Express, seguindo o padrão de API REST.

Ele é responsável por:

Centralizar a regra de negócio

Definir e gerenciar as rotas da aplicação (ex: /api/login, /api/users)

Processar requisições do frontend

Retornar respostas no formato JSON

Essa separação torna o sistema mais organizado, facilita a manutenção e permite que diferentes frontends (como um site web ou outro aplicativo) utilizem a mesma API no futuro.

🧠 Decisões Técnicas
1️⃣ Uso de API REST

Optou-se por uma API REST por ser um padrão simples, amplamente utilizado e de fácil integração com aplicações mobile.

2️⃣ Node.js + Express

O Express foi escolhido por ser leve, direto e ideal para projetos acadêmicos e APIs de pequeno porte, facilitando o entendimento da estrutura do backend.

3️⃣ React Native com Expo

O Expo foi utilizado para simplificar o desenvolvimento da aplicação mobile, evitando configurações complexas de ambiente, especialmente nas etapas iniciais do projeto.

📚 Lições Aprendidas

Durante o desenvolvimento do projeto, alguns aprendizados importantes foram obtidos:

A importância de instalar corretamente as dependências do projeto, como o Express, para evitar erros de módulo não encontrado.

Melhor compreensão da independência entre frontend e backend, que se comunicam apenas via HTTP.

Necessidade de manter o backend rodando corretamente (por exemplo, na porta 3000) para que o frontend consiga consumir a API.

Aprendizado na interpretação de mensagens de erro, warnings do npm e falhas comuns no desenvolvimento, que fazem parte do dia a dia do programador.

⚖️ Comparação: Flutter vs React Native
React Native

Curva de aprendizado mais suave para quem já conhece JavaScript e React

Ecossistema maduro

Grande comunidade e muitas bibliotecas disponíveis

Flutter

Excelente desempenho

Interface visual consistente, pois controla toda a renderização

Curva de aprendizado maior devido ao uso da linguagem Dart

Conclusão:
Enquanto o Flutter se destaca pelo desempenho e controle visual, o React Native se destacou neste projeto pela familiaridade com JavaScript, maturidade do ecossistema e adequação ao tempo disponível para a atividade.

🔗 Repositório

O código-fonte do projeto está disponível neste repositório para fins de avaliação acadêmica.