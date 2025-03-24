import IRelatorio from "./IRelatorio";
import Tarefa from "./Tarefa";

class RelatorioSimples implements IRelatorio{

   gerar(tarefa: Tarefa){
    console.log(`Relatorio Simples: ${tarefa.titulo}`)
   }
}


export default RelatorioSimples;