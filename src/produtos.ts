export class produtos{
    private id: number;
    private descricao: string;
    private preco: number;

    constructor(id: number, desc: string, preco: number){
        this.id = id;
        this.descricao = desc;
        this.preco = preco;    
    }
    getdescricao(){
        return this.descricao;
    }

    getpreco(){
        return this.preco;
    }

}

export let lista_objeto = [
    new produtos(1,"tenis nike",100),
    new produtos(2,"camisa nike",99),
    new produtos(3,"bermuda nike",60),
    new produtos(3,"bermuda nike",60),
    new produtos(3,"bermuda nike",60),
    new produtos(3,"bermuda nike",60),
    new produtos(3,"bermuda nike",60),
    new produtos(3,"bermuda nike",60),
    new produtos(3,"bermuda nike",60),
    new produtos(3,"bermuda nike",60),
    new produtos(3,"bermuda nike",60),
    new produtos(3,"bermuda nike",60),
    new produtos(3,"bermuda nike",60),
    new produtos(3,"bermuda nike",60),
    new produtos(3,"bermuda nike",60),
    new produtos(3,"bermuda nike",60),
    new produtos(3,"bermuda nike",60),

]

console.log(lista_objeto);
