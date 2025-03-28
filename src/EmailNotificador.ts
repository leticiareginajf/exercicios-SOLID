import INotificador from "./INotificador";
import Tarefa from "./Tarefa";

export class EmailNotificador implements INotificador{

    notificarConclusao(tarefa: Tarefa): void {
        console.log(`Email enviado para notificar a conclusao da Email -> ${tarefa.titulo}`);
    }

}


export default EmailNotificador;