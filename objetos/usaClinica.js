const cliente = new Cliente();

const animal1 = new Animal();
const animal2 = new Animal();

cliente.addAnimal(animal1);
cliente.addAnimal(animal2);
animal1.setCliente(cliente);

const prontuario = new Prontuario();
prontuario.setAnimal(animal1);

const listaAnimais = prontuario.getAnimaisDoCliente();
console.log(listaAnimais); 