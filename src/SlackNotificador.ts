import INotificador from "./INotificador";
import Tarefa from "./Tarefa";

export class SlackNotificador implements INotificador{

    notificacaoConclusao(tarefa: Tarefa): void {
        console.log(`Slack enviado para notificar a conclusao da tarefa -> ${tarefa.titulo}`);
    }

}


export default SlackNotificador;