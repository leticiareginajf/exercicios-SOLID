import INotificador from "./INotificador";
import Tarefa from "./Tarefa";

class GerenciadordeTarefas{


    constructor(private notificador:INotificador){}

    concluirTarefa(tarefa: Tarefa):void{
        tarefa.setStatus("concluida");
        this.notificador.notificarConclusao(tarefa);
    }
}


export default GerenciadordeTarefas;