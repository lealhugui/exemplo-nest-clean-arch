import { Saudacao } from "src/domain/Saudacao";

export interface SaudacaoRepository {
    buscarSaudacao(): Promise<Saudacao>;
}
