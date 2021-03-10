## Sumário

- [Requisitos](#requisitos)
- [Instalação](#instalação)
- [Comandos](#comandos)

## Requisitos

- Node v12.18.2 +
- Yarn v1.22.0 +

## Instalação

Execute o comando `yarn`.

## Rodando a aplicação

### MacOS, Linux e \*nix

Execute `yarn view`

### Windows

1. Execute `yarn server` para executar a API;
1. Execute `yarn start` para rodar a aplicação React.

## Comandos

Para conhecer melhor os comandos disponíveis, visite o `package.json`, mas seguem alguns comandos abaixo:

- `yarn start`: executa o projeto
- `yarn build`: cria o build para produção
- `yarn test`: executa os testes
- `yarn lint`: executa as validações de lint na pasta `src`
- `yarn server`: executa a api para usar com o projeto

### Critérios

#### Layout

O projeto apresentado deve seguir fielmente o [layout (clique para visualizar)](https://www.figma.com/file/FItXYIvEqflFS4hVbf3xHs/Desafio-Frontend?node-id=0%3A1)

#### Regras de negócio

- Listagem de transações
  - Ao abrir o app, deverá ser feita uma requisição para a API (GET) solicitando os dados. Não poderão ser feitas novas requisições GET enquanto o app estiver aberto. Quando forem cadastradas novas transações usando a API (POST) os dados devolvidos deverão ser inseridos no estado da aplicação, para serem mostrados na listagem.
  - Uma nova requisição para a API só ocorrerá quando o usuário fechar e reabrir o app.
- As requisições devem lidar tanto com sucesso quanto falha (ex: timeout, conexão lenta, usuário está offline...).
- O projeto deve consumir somente a API disposta para o mesmo (do comando `yarn server`), respeitando suas interfaces e as regras do que é esperado da [API](#post-httplocalhost3000transactions)
- Após criar uma transação, pessoa deve ser redirecionada para tela principal

#### Organização & Mantenabilidade do projeto

Queremos produtos funcionais mas que sejam fáceis de escalar e de serem mantidos por outras pessoas.

- Os commits de git são diretos e bem formatados
- As versões utilizadas no package.json representam a realidade

#### Qualidade & Complexidade

- O código é eficiente tanto em performance quanto em facilidade de compreensão
- As estruturas são claras, sem valores mágicos, com nomes descritivos, reduzindo mutabilidade e efeitos colaterais o máximo possível
- As soluções usam o mínimo de código necessário e não existem dependências supérfluas
- As funções tem baixa complexidade ciclomática, os estilos evitam repetições desnecessárias, os componentes tem seus domínios bem delimitados

#### Testes

- O projeto valida tanto as unidades menores como as integrações entre elas.
- Há um alto grau de confiança de que o produto entregue funciona corretamente

## Referência de Endpoints da API

#### GET `http://localhost:3000/transactions/`

Payload de retorno:

```json
[
  {
    "amount": 10000,
    "buyer_document": "12345678912",
    "credit_card_cvv": "123",
    "credit_card_expiration_date": "0121",
    "credit_card_holder_name": "JOAO S SAURO",
    "credit_card_number": "4111111111111111",
    "date": "2020-11-10T19:43:56.451Z",
    "id": 1,
    "status": "paid"
  }
]
```

#### GET `http://localhost:3000/transactions/1`

Payload de retorno:

```json
{
  "amount": 10000,
  "buyer_document": "12345678912",
  "credit_card_cvv": "123",
  "credit_card_expiration_date": "0121",
  "credit_card_holder_name": "JOAO S SAURO",
  "credit_card_number": "4111111111111111",
  "date": "2020-11-10T19:43:56.451Z",
  "id": 1,
  "status": "paid"
}
```

#### POST `http://localhost:3000/transactions/`

Payload de input:

| Parâmetro                     |  Tipo  |                                      Condição |
| :---------------------------- | :----: | --------------------------------------------: |
| `buyer_document`              | String |       CPF sem pontos nem hífen, 11 caracteres |
| `credit_card_holder_name`     | String | Nome completo da pessoa, 2 ou mais caracteres |
| `credit_card_number`          | String |   Número do cartão sem espaços, 16 caracteres |
| `credit_card_expiration_date` | String |        Data de expiração válida, 4 caracteres |
| `credit_card_cvv`             | String |                             3 ou 4 caracteres |
| `amount`                      | Number |                  Inteiro positivo de centavos |

**Todos os parâmetros são obrigatórios.**

Esta rota retorna os dados informados adicionando um timestamp com chave `date` e o campo `status`, que para critérios de testes pode retornar `paid` ou `refused`:

```json
{
  "amount": 10000,
  "buyer_document": "12345678912",
  "credit_card_cvv": "123",
  "credit_card_expiration_date": "0121",
  "credit_card_holder_name": "JOAO S SAURO",
  "credit_card_number": "4111111111111111",
  "date": "2020-11-10T19:43:56.451Z",
  "id": 2,
  "status": "paid"
}
```

#### Exemplos & Ferramentas

Na branch do pull request em aberto você encontrará as collections para o postman e insomnia.

Na collection do Postman `frontend-challenge.postman_collection.json` você encontra exemplos de requisições para as rotas apresentadas acima.

Se preferir usar Insomnia, temos a collection `frontend-challenge.insomnia_collection.json`

Para gerar CPFs, cartões e afins para testar o projeto, recomendamos o uso do site [4Devs](https://www.4devs.com.br/). Lembre-se de **nunca** utilizar dados sensíveis no projeto.
