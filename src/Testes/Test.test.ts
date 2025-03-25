import INotificador from "../INotificador";
import Tarefa from "../Tarefa";
import GerenciadordeTarefas from "../GerenciadordeTarefas";

class MockNotificador implements INotificador{
    public notificado = false;
    public ultimaTarefa: Tarefa | null = null;

    notificarConclusao(tarefa: Tarefa): void {
        this.notificado = true;
        this.ultimaTarefa = tarefa;
    }
}


test('Deve concluir a tarefa e notificar', ()=>{
    const tarefa = new Tarefa("101", "Pendente");
    const mockNotificador = new MockNotificador();

    const gerenciador = new GerenciadordeTarefas(mockNotificador);
    gerenciador.concluirTarefa(tarefa);

    tarefa.setStatus("Concluida");


    expect(tarefa.setStatus("Concluida")).toBe(true);
    expect(mockNotificador.notificado).toBe(true);
    expect(mockNotificador.ultimaTarefa).toBe(tarefa);
})


export default MockNotificador;