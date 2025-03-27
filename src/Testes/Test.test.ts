import INotificador from "../INotificador";
import Tarefa from "../Tarefa";
import GerenciadordeTarefas from "../GerenciadordeTarefas";
import EmailNotificador from "../EmailNotificador";
import RelatorioSimples from "../RelatorioSimples";
import { mock } from "node:test";
import Notificador from "../Notificador";
import SlackNotificador from "../SlackNotificador";
import WhatsAppNotificador from "../WhatsAppNotificador";

class MockNotificador implements INotificador{
    public notificado = false;
    public ultimaTarefa: Tarefa | null = null;

    notificarConclusao(tarefa: Tarefa): void {
        this.notificado = true;
        this.ultimaTarefa = tarefa;
    }
}


test('Tarefas', ()=>{
    const tarefas = new Tarefa("Tarefa", "Concluida");

    const tarefasSpy = jest.spyOn(console, 'log');

    tarefas.exibir();

    expect(tarefas.exibir).toBe;
    
})


test('Gerenciador de Tarefas', ()=>{
    const tarefa = new Tarefa("101", "Pendente");
    const mockNotificador = new MockNotificador();

    const gerenciador = new GerenciadordeTarefas(mockNotificador);
    gerenciador.concluirTarefa(tarefa);

    tarefa.setStatus("Concluida");


    expect(tarefa.setStatus("Concluida")).toBe(true);
    expect(mockNotificador.notificado).toBe(true);
    expect(mockNotificador.ultimaTarefa).toBe(tarefa);
})

test ('Email Notificador - Teste', ()=>{
   
    const tarefaEmail = new Tarefa('Email','Revisar email');

    const email = new EmailNotificador();

    const emailSpy = jest.spyOn(console, 'log');

    email.notificarConclusao(tarefaEmail);

    expect(emailSpy).toBe;

})


test('Relatorio Simples - Teste', ()=>{

    const tarefaRelatorio = new Tarefa("Relatorio", "Concluida");

    const relatorioSimples = new RelatorioSimples();

    const relatorioSpy = jest.spyOn(console,'log');

    relatorioSimples.gerar(tarefaRelatorio);

    expect(relatorioSpy).toBe;

})


test ('Notificador - Teste', ()=>{

    const tarefaNotificador = new Tarefa("Notificação", "Concluída");

    const notificador = new Notificador();

    const notificarSpy = jest.spyOn(console, 'log');

    notificador.notificarConclusao(tarefaNotificador);

    expect(notificarSpy).toBe;

})


test('Slack Notificador - Teste', ()=>{
    const tarefaSlack = new Tarefa("Slack", "Concluida");

    const Slack = new SlackNotificador();

    const slackSpy = jest.spyOn(console, 'log');

    Slack.notificarConclusao(tarefaSlack);

    expect(slackSpy).toBe;

})

test('Whatsapp Notificador - Teste', ()=>{
    const tarefaWhatsApp = new Tarefa("Slack", "Concluida");

    const whats = new WhatsAppNotificador();

    const whatsSpy = jest.spyOn(console, 'log');

    whats.notificarConclusao(tarefaWhatsApp);

    expect(whatsSpy).toBe;

})

export default MockNotificador;