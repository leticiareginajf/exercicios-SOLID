// console.log('Primeiro Projeto')


import EmailNotificador from "./EmailNotificador";
import INotificador from "./INotificador";
import Notificador from "./Notificador";
import SlackNotificador from "./SlackNotificador";
import Tarefa from "./Tarefa";
import WhatsAppNotificador from "./WhatsAppNotificador";



const minhaTarefa = new Tarefa("Naruto", "PENDENTE");
const email = new EmailNotificador();
const slack = new SlackNotificador();

minhaTarefa.exibir();


const meuNotificador = new Notificador();


meuNotificador.notificarConclusao(minhaTarefa);


 email.notificarConclusao(minhaTarefa);
 slack.notificarConclusao(minhaTarefa);

 const whatsApp = new WhatsAppNotificador();

 whatsApp.notificarConclusao(minhaTarefa);
