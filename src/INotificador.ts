import Tarefa from "./Tarefa";

export interface INotificador{

    notificarConclusao(tarefa: Tarefa) : void;

}



export default INotificador;