import { Postagem } from "./Postagem"

export class Tema{
    public id: number 
    public descricao: string
    public qtdTema: string
    public postagem: Postagem[]
}