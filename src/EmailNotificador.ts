import INotificador from "./INotificador";
import Tarefa from "./Tarefa";

export class EmailNotificador implements INotificador{

    notificacaoConclusao(tarefa: Tarefa): void {
        console.log(`Email enviado para notificar a conclusao da tarefa -> ${tarefa.titulo}`);
    }

}


export default EmailNotificador;