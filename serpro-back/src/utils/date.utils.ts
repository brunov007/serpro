export default class DateUtils{
    static nowFormated(): string{
        let data = new Date();
        let dataFormatada = ((data.getDate() )) + "/" + ((data.getMonth() + 1)) + "/" + data.getFullYear(); 
        return dataFormatada
    }
}