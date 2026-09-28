class Veterinario{
    #nome
    #crmv

    constructor(nome,crmv) {
        this.#nome = nome;
        this.#crmv = crmv; 
    }

    getNome() {
        return this.#nome;
    }

    setNome(novoNome) {
        if (typeof novoNome === 'string') {
            const nomeLimpo = novoNome.trim();
            if (nomeLimpo === '' || nomeLimpo === 'null') {
                return false;
            }
            this.#nome = nome;
            return true;
        }
    }

    getCrmv() {
        return this.#crmv;
    }

    setCrmv(novoCrmv) {
        if(novoTelefone <= 0 || novoTelefone.trim()) {
            return false;
        } else {
            this.#telefone = novoTelefone;
            return true;
        }
    }

    addAnimal(animal) {
        this.#animais.push(animal);
        return true;
    }

    getAnimais(){
        return this.#animais;
    }
}