class prontuario{
    #numero
    #observacoes
    #animal

    constructor(numero, observacoes) {
        this.#numero = numero;
        this.#observacoes = observacoes;
    }

    getNumero() {
        return this.#numero;
    }

    setNumero(novoNumero) {
        if (typeof novoNumero === 'number' && !Number.isNaN(novoNumero) && novoNumero > 0) {
            this.#numero = novoNumero;
            return true;
        } else {
            return false;
        }
    }

    getObservacoes() {
        return this.#observacoes;
    }

    setObservacoes(novasObservacoes) {
        if (typeof novaObservacao === 'string') {
            const observacaoLimpa = novasObservacoes.trim();
            if (observacaoLimpa === '' || observacaoLimpa === 'null') {
                return false;
            }
            this.#observacoes = observacoes;
            return true;
        }
    }

    setAnimal(animal) {
        if (animal) {
            this.#animal = animal;
            return true;
        }
        return false;
    }

    getAnimal() {
        return this.#animal;
    }

    getAnimaisDoCliente() {
        const animal = this.getAnimal();
        if (!animal) {
            return [];            
        } 
        const cliente = animal.getCliente();
        if (!cliente) {
            return [];
        } else {
            return cliente.getAnimais();
        }
    }

}
