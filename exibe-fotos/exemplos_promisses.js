//1+2+3+...+(n-2)+(n-1)+n
const somaDemorada = (n) => {
    const p =new Promise((resolve, reject) => {
        if(n >= 1) {
            let ac = 0
            for (let i = 1; i <= n; i++)
                ac += i
            resolve(ac)
        }
        else
            reject('Somente valores positivos')
    })
    return p
}
const res = somaDemorada(-10)
//then
//catch
res
.then((soma) => console.log(`Soma: ${soma}`))
.then((err) => console.log(`Erro: ${err}`))

console.log('outras coisas...')



//const somaDemorada = (n) => {
//    let ac = 0
//    for (let i = 1; i <= n; i++)
//        ac += i
//    return ac
//}
//processamento bloqueante ou sincrono
//const res = somaDemorada(10)
//console.log(res)
//console.log('qualquer outra coisa que não depende do res')