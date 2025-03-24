import Tarefa from "./Tarefa";

export interface IRelatorio{

    gerar(tarefa: Tarefa): void;
        
}


export default IRelatorio;