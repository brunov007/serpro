export default class StringUtils{
    static dataClean(s: string){
        return s.split(",")
                .map(item => item.replace(new RegExp("\\r\\n", "g"), ""))
                .filter(item => item !== '')
    }
}