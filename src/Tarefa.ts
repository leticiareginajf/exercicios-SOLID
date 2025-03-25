class Tarefa{


    titulo: string;
    status: string;


    constructor(titulo: string, status: string){
        this.titulo = titulo;
        this.status = status;
    }

    setStatus(novoStatus: string){
        this.status = novoStatus;
        return true;
    }

    exibir(){
        console.log(`Titulo: ${this.titulo} , Status: ${this.status}`);
    }

}

export default Tarefa;