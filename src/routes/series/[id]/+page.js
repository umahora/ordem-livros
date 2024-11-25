import { error } from '@sveltejs/kit';
import series from '../../../constants/series.js';

export function load(dados){
    const seriaId = dados.params.id

    for(let serie of series){
        if(serie.id == seriaId){
            return {serie}
        }
    }
    error(404,"Série não encontrado.");
}