export default class Endereco {
    #cep;
    #logradouro;
    #complemento;
    #bairro;
    #localidade;
    #uf;
    #ibge;
    #gia;
    #ddd;
    #siafi;

    constructor(cep) {
        this.#cep = cep;
    }

    async setCep() {
        try {
            const resposta = await fetch(
                `https://viacep.com.br/ws/${this.#cep}/json/`
            );

            if (!resposta.ok) {
                throw new Error("Erro ao consultar a API ViaCEP.");
            }

            const dados = await resposta.json();

            if (dados.erro) {
                throw new Error("CEP não encontrado.");
            }

            this.#cep = dados.cep;
            this.#logradouro = dados.logradouro;
            this.#complemento = dados.complemento;
            this.#bairro = dados.bairro;
            this.#localidade = dados.localidade;
            this.#uf = dados.uf;
            this.#ibge = dados.ibge;
            this.#gia = dados.gia;
            this.#ddd = dados.ddd;
            this.#siafi = dados.siafi;

        } catch (erro) {
            console.error("Erro:", erro.message);
        }
    }

    get cep() {
        return this.#cep;
    }

    get logradouro() {
        return this.#logradouro;
    }

    get complemento() {
        return this.#complemento;
    }

    get bairro() {
        return this.#bairro;
    }

    get localidade() {
        return this.#localidade;
    }

    get uf() {
        return this.#uf;
    }

    get ibge() {
        return this.#ibge;
    }

    get gia() {
        return this.#gia;
    }

    get ddd() {
        return this.#ddd;
    }

    get siafi() {
        return this.#siafi;
    }
}
