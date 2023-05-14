import { Injectable } from '@nestjs/common';
import { NeuralNetwork } from '@nlpjs/neural';
const corpus = require('../../corpus.json');

@Injectable()
export class CustomAiService {

    network: any

    constructor(){
        this.network = new NeuralNetwork({ learningRate: 0.01, log: false });
        this.network.train(corpus);
    }

    getResult(arr: string[]){
        const result = []
        const ob = {}
        arr.forEach(item => ob[item] = 1)
        
        const t = this.network.run(ob)

        Object.keys(ob).forEach(item => {
            const r = {
                "dado": item,
                "confidenciabilidade": 0.0,
                "adequação": 0.0,
                "severidade": 0.0,
                "porcetagem": 0
            }

            if(Object.keys(t).includes(item)){
                r.confidenciabilidade = 0.5
                r.adequação = 0.5
                r.severidade = 0.5
                r.porcetagem = t[item] * 100
            }
            
            result.push(r)
        })

        return result
    }

    trainIA(){

    }
}
