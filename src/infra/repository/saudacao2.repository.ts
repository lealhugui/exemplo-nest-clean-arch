import { Body, Injectable } from '@nestjs/common';
import { SaudacaoRepository } from 'src/aplication/repository/saudacao.repository';
import { Saudacao } from 'src/domain/Saudacao';

const HELLO_DATA_FILE = [
  {mensagem: 'Que seu dia seja muito bom!', destinatario: 'Jose'}
]

@Injectable()
export class SudacaoAPIRepositoryImplementation implements SaudacaoRepository {
  async buscarSaudacao(): Promise<Saudacao> {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const body = await response.json()
    const thisTime = Number(new Date()).toString();

    const lastOne = thisTime[thisTime.length-1]
    console.log(1, response)
    console.log(2, body)
    console.log(3, lastOne)
    
    if (!body)return Saudacao.criar(HELLO_DATA_FILE[0])

    const result = Saudacao.criar({
      mensagem: body[lastOne]['title'],
      destinatario: body[lastOne]['userId']
    })

    console.log(result)
    return result
  }
}
