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


test('Deveria retornar o nome de Tarefa', ()=>{

    const tarefas = new Tarefa("Tarefa", "Concluida");

    const tarefasSpy = jest.spyOn(console, 'log');

    tarefas.exibir();

    expect(tarefas).toEqual({status: "Concluida", titulo: "Tarefa"});
})


test('Deveria concluir a Tarefa com sucesso', ()=>{
    const tarefa = new Tarefa("101", "Pendente");
    const mockNotificador = new MockNotificador();

    const gerenciador = new GerenciadordeTarefas(mockNotificador);
    gerenciador.concluirTarefa(tarefa);

    expect(tarefa.setStatus("Concluida")).toBe(true);
    expect(mockNotificador.notificado).toBe(true);
    expect(mockNotificador.ultimaTarefa).toEqual(tarefa);
})

test ('Deveria retornar o aviso de Email', ()=>{
    const tarefa = new Tarefa("Tarefa", "Status");
   
    const tarefaEmail = new EmailNotificador();

    const emailSpy = jest.spyOn(console, 'log');

    tarefaEmail.notificarConclusao(tarefa);

    expect(emailSpy).toHaveBeenCalledWith("Email enviado para notificar a conclusao da Email -> Tarefa");

    emailSpy.mockRestore();

})


test('Deveria retornar o Relatório Simples', ()=>{

    const tarefaRelatorio = new Tarefa("Relatorio", "Concluida");

    const relatorioSimples = new RelatorioSimples();

    const relatorioSpy = jest.spyOn(console,'log');

    relatorioSimples.gerar(tarefaRelatorio);

    expect(relatorioSpy).toHaveBeenCalledWith("Relatorio Simples: Relatorio");

    relatorioSpy.mockRestore();

})


test ('Deveria retornar a Notificação', ()=>{

    const tarefaNotificador = new Tarefa("Notificação", "Concluída");

    const notificador = new Notificador();

    const notificarSpy = jest.spyOn(console, 'log');

    notificador.notificarConclusao(tarefaNotificador);

    expect(notificarSpy).toHaveBeenCalledWith("Tarefa Notificação está concluida");

    notificarSpy.mockRestore();
})


test('Deveria retornar o Slack', ()=>{
    const tarefaSlack = new Tarefa("Slack", "Concluida");

    const Slack = new SlackNotificador();

    const slackSpy = jest.spyOn(console, 'log');

    Slack.notificarConclusao(tarefaSlack);

    expect(slackSpy).toHaveBeenCalledWith("Slack enviado para notificar a conclusao da tarefa -> Slack");

    slackSpy.mockRestore();

})

test('Deveria retornar a notificacao do Whatsapp', ()=>{
    const tarefaWhatsApp = new Tarefa("Whatsapp", "Concluida");

    const whats = new WhatsAppNotificador();

    const whatsSpy = jest.spyOn(console, 'log');

    whats.notificarConclusao(tarefaWhatsApp);

    expect(whatsSpy).toHaveBeenCalledWith("Mensagem de Notificação: Whatsapp");

    whatsSpy.mockRestore();

})

export default MockNotificador;