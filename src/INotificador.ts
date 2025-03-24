import Tarefa from "./Tarefa";

interface INotificador{

    notificacaoConclusao(tarefa: Tarefa) : void;

}



export default INotificador;