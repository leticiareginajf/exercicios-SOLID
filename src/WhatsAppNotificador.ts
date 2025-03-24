import INotificador from "./INotificador"
import Tarefa from "./Tarefa";

export class WhatsAppNotificador implements  INotificador{

    notificarConclusao(tarefa: Tarefa): void{
        console.log(`Mensagem de Notificação: ${tarefa.titulo}`);
        
    }

}



export default WhatsAppNotificador;