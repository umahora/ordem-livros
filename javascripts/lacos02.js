import series from './mudulo/dados/series.js'

// series.forEach(elemento => {
//     console.log('\n',elemento.titulo)
    
//     for (let livro of elemento.livros){
//         console.log('\t-',livro.titulo)
//     }
// })


for(let serie of series){
    console.log('\n',serie.titulo)
    
    for (let livro of serie.livros){
        console.log('\t-',livro.titulo)
    }
}

                                             