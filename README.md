# C.R.U.D Employee
O projeto lida com a construção de um CRUD simples para estudo com Nodejs e banco de dados.

## Fluxo de sistema
- Setor
  - Cadastro
  - Consulta
  - Edição
  - Exclusão (não pode ter cargos associados)
- Cargo
  - Cadastro (depende de setor)
  - Consulta
  - Edição
  - Exclusão (não pode ter funcionários associados)
- Funcionário
  - Cadastro (depende de Cargo)
  - Consulta
  - Edição
  - Exclusão

## Ferramentas
Nesse projeto usaremos as seguintes ferramentas:
- NodeJs
- Express
- Prisma
- Typescript
- Banco de dados MySQL

## Entidades do sistema
- Sector
  - id auto_increment
  - name not null UNIQUE
- Role
  - id auto_increment
  - name not null UNIQUE
  - sector_id FK
- Employee
  - id auto_increment
  - first_name not null
  - last_name not null
  - rg not null UNIQUE
  - cpf not null UNIQUE
  - birth_date not null
  - salary not null
  - email
  - phone not null
  - role_id FK

## Rotas do sistema
- Setores
  - /sectors POST
  - /sectors GET
  - /sectors/:id GET
  - /sectors/:id PUT
  - /sectors/:id DELETE
- Cargos
  - /roles POST
  - /roles GET
  - /roles/:id GET
  - /roles/:id PUT
  - /roles/:id DELETE
- Funcionários
  - /employess POST
  - /employess GET
  - /employess/:id GET
  - /employess/:id PUT
  - /employess/:id DELETE

## Escopo do Projeto
- [x] Criação de projeto
- [x] Instalação de dependências
- [x] Configuração servidor Express
- [x] Configuração Prisma
- [x] Criação de Middleware para validação
- [x] Configuração de rotas Setores
- [ ] Configuração de rotas Cargos
- [ ] Configuração de rotas Funcionários