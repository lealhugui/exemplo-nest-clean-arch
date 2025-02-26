import { Injectable } from '@nestjs/common';
import { SaudacaoRepository } from 'src/aplication/repository/saudacao.repository';
import { Saudacao } from 'src/domain/Saudacao';

const HELLO_DATA_FILE = [
  {mensagem: 'Que seu dia seja muito bom!', destinatario: 'Mario'}
]

@Injectable()
export class SudacaoRepositoryImplementation implements SaudacaoRepository {
  async buscarSaudacao(): Promise<Saudacao> {
    const result = Saudacao.criar(HELLO_DATA_FILE[0])
    console.log(result)
    return result
  }
}
