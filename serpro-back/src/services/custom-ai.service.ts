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
        const ob = {}
        arr.forEach(item => ob[item] = 1)
        
        return this.network.run(ob)
    }

    trainIA(){

    }
}
