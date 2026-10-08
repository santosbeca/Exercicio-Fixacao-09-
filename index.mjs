import Endereco from "./Endereco.mjs";

const endereco = new Endereco("72015565");

await endereco.setCep();

console.log("CEP:", endereco.cep);
console.log("Logradouro:", endereco.logradouro);
console.log("Complemento:", endereco.complemento);
console.log("Bairro:", endereco.bairro);
console.log("Cidade:", endereco.localidade);
console.log("UF:", endereco.uf);
console.log("IBGE:", endereco.ibge);
console.log("GIA:", endereco.gia);
console.log("DDD:", endereco.ddd);
console.log("SIAFI:", endereco.siafi);
