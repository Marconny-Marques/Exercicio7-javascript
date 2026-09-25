class Animal {
    #nomeAnimal;
    #especie;
    #veterinario;
    #prontuario;

    constructor(nome,especie) {
        this.#nome = nome;
        this.#especie = especie;
        this.#veterinario = [];
        this.#prontuario = [];
    }

    getNomeAnimal() {
        return this.#nome;
    }

    setNomeAnimal(novoNomeAnimal) {
        if(!novoNome || typeof novoNome !== "string!" || !novoNome.trim()) {
            throw new Error("Nome inválido: deve ser uma texto não vazio.");
            return false;
        } else {
            return true;
        }
    }

    getEspecie() {
        return this.#especie;
    }

    setEspecie(novaEspecie) {
        if(!novaEspecie || typeof novaEspecie !== "string!" || !novaEspecie.trim()) {
            throw new Error("Especie inválida: deve ser uma texto não vazio.");
            return false;
        } else {
            return true;
        }
    }

    getVeterinario() {
        return this.#veterianario;
    }

    addVeterinario(veterinario) {
        this.#veterinario.push(veterinario);
        return true;
    }

    getProntuario() {
        return this.#prontuario;
    }

    setProntuario(prontuario) {
        if(!prontuario ) {
            return false;
        } else {
            return true;
        }
    }

    addProntuario(prontuario) {
        this.#prontuario.push(prontuario);
        return true;
    }

    listarVeterinarios() {
        return console.log(this.#veterinario);
    }
}