# Exercício de Fixação 09 – Explorando a API ViaCEP

## Objetivo

Evoluir a classe `Endereco` para utilizar novos dados fornecidos pela API ViaCEP.

## API utilizada

ViaCEP:

https://viacep.com.br/

## Novos atributos adicionados

Foram identificados e adicionados os seguintes atributos retornados pela API:

| Atributo da API | Atributo privado na classe | Getter        |
| --------------- | -------------------------- | ------------- |
| `complemento`   | `#complemento`             | `complemento` |
| `ibge`          | `#ibge`                    | `ibge`        |
| `gia`           | `#gia`                     | `gia`         |
| `ddd`           | `#ddd`                     | `ddd`         |
| `siafi`         | `#siafi`                   | `siafi`       |

## Conceitos utilizados

* JavaScript
* Classes
* Atributos privados
* Encapsulamento
* Getters
* `async`
* `await`
* `fetch()`
* API externa
* JSON
* Tratamento de exceções
* `try/catch`

## Arquivos

* `Endereco.mjs` — classe responsável pela consulta à API ViaCEP.
* `index.mjs` — programa utilizado para testar a classe.
* `README.md` — documentação do exercício.

## Execução

Para executar o projeto, utilize:

```bash
node index.mjs
```

O programa consulta a API ViaCEP utilizando o CEP informado e apresenta os dados retornados.

---

# Questões Teóricas

## 1. Qual a vantagem de consultar diretamente a API antes de modificar a classe?

Consultar a API primeiro permite verificar quais informações ela realmente retorna. Assim, podemos identificar os novos campos disponíveis e escolher quais deles serão utilizados na classe `Endereco`.

## 2. Por que os novos dados devem ser armazenados em atributos privados?

Os atributos devem ser privados para manter o encapsulamento da classe. Dessa forma, os dados não podem ser alterados diretamente de fora da classe, proporcionando maior segurança e controle sobre as informações.

## 3. Qual a finalidade dos métodos `get` adicionados à classe?

Os métodos `get` permitem acessar os valores dos atributos privados de forma controlada. Assim, outras partes do programa podem consultar os dados sem acessar diretamente os atributos internos da classe.

## 4. Por que não devemos acessar diretamente os atributos retornados pela API fora de `setCep()`?

Porque o método `setCep()` é responsável por consultar a API, receber os dados e armazená-los corretamente nos atributos privados da classe. Dessa maneira, a lógica de comunicação com a API fica centralizada e organizada dentro da classe.

## 5. Qual a diferença entre o nome de uma propriedade da API e o nome de um atributo da classe?

A propriedade da API é o nome utilizado pelo ViaCEP no objeto JSON retornado. Já o atributo da classe é o nome utilizado internamente pelo programa para armazenar aquela informação.

Por exemplo:

```text
API: localidade
Classe: #localidade
```

Os nomes podem ser iguais, mas não precisam obrigatoriamente ser.

## 6. Por que a classe não precisa utilizar obrigatoriamente os mesmos nomes adotados pelo ViaCEP?

Porque a classe possui sua própria estrutura e pode escolher nomes que sejam mais adequados ao projeto. O importante é fazer a associação correta entre o dado recebido pela API e o atributo utilizado pela classe.

Por exemplo:

```javascript
this.#cidade = dados.localidade;
```

Nesse caso, a API utiliza `localidade`, enquanto a classe utiliza `#cidade`.

## 7. O que aconteceria se a API adicionasse novos campos no futuro?

A classe continuaria funcionando normalmente para os campos que já utiliza. Os novos campos simplesmente não seriam utilizados até que o programador decidisse adicioná-los à classe.

Para utilizar os novos campos, seria necessário criar novos atributos privados, atribuir os valores recebidos pela API e, se necessário, criar novos métodos `get`.

## 8. Por que o tratamento com `try/catch` deve continuar funcionando mesmo após a inclusão de novos atributos?

Porque a consulta à API pode apresentar erros, como problemas de conexão, CEP inválido ou indisponibilidade do serviço. O `try/catch` permite tratar essas situações sem interromper inesperadamente a execução do programa.

Mesmo com a inclusão de novos atributos, é importante manter o tratamento de exceções para tornar a aplicação mais segura e confiável.

