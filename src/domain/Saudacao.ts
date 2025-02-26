
export interface SaudacaoProps {
    mensagem: string;
    destinatario: string;
    data?: Date
}


export class Saudacao {

    private mensagem: string;
    private destinatario: string;
    private data?: Date;
    
    private constructor(props: SaudacaoProps) {
        Object.assign(this, props)
    }

    public static criar(props: SaudacaoProps) {
        if (!props.mensagem) {
            throw new Error('Mensagem Invalida')
        }
        
        if (!props.destinatario) {
            throw new Error('Destinatário Invalido')
        }

        const result = new Saudacao({
            mensagem: props.mensagem,
            destinatario: props.destinatario,
            data: props.data
        })

        return result
    }

    public getMensagem(): string {
        return this.mensagem;
    }
    public setMensagem(msg: string) {
        this.mensagem = msg
    }
    public getDestinatario(): string {
        return this.destinatario;
    }
    public setDestinatario(dest: string) {
        this.destinatario = dest
    }
    public getData() {
        return this.data;
    }
    private setData(dt: Date | undefined) {
        this.data = dt
    }

    public obterSaudacaoCompleta() {
        let result = `Olá ${this.destinatario}! ${this.mensagem}...`;

        if (this.data) {
            result += ` Mensagem gerada em ${this.data?.toString()}...`
        }

        return result;
    }
}