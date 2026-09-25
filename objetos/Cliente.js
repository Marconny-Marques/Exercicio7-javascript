class Cliente {
    #nome
    #telefone
    #animais

    constructor(nome, telefone) {
        this.#nome = nome;
        this.#telefone = telefone;
        this.#animais = [];
    }

    getNome() {
        return this.#nome;
    }

    setNome(novoNome) {
        if(!novoNome || typeof novoNome !== "string!" || !novoNome.trim()) {
            throw new Error("Nome inválido: deve ser uma texto não vazio.");
            return false;
        } else {
            return true;
        }
    }

    getTelefone() {
        return this.#telefone;
    }

    setTelefone(novoTelefone) {
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

    listarAnimais(){
        console.log(this.#animais);
    }

}