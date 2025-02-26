import { Inject, Injectable } from "@nestjs/common";
import { SaudacaoRepository } from "../repository/saudacao.repository";


@Injectable()
export class SaudarUseCase {

    constructor(@Inject('SaudacaoRepository') private saudacaoRepo: SaudacaoRepository) { }

    public async execute() {
        try {
            const saudacao = await this.saudacaoRepo.buscarSaudacao()
            return saudacao.obterSaudacaoCompleta()
        } catch (e) {
            throw new Error(e)
        }
    }

}