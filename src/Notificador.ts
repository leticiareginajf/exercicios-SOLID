import Tarefa from "./Tarefa";

class Notificador{


    notificarConclusao(tarefa: Tarefa){
        console.log(`Tarefa ${tarefa.titulo} está concluida`);
    }
}


export default Notificador;