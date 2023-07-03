let string = 'ofjuveeipuaqaifooiiowqeueouaekavoiuiedaoeolxyqfgaijgzsfikguzebqeoauoeoubivbomiaaavwoiooioufmuaaooynwlhjijuoayamavovoaeiooiuoeiiukuuyievaeoiomaauuaooueyoilieoaesabooajjjbhjiaojodbioevtruszyuoeerwjtcoqeaeeoiaaiicehoiyatxojreauhwlkeyeuuduesniakueouqgebuwaquafiejeauiaieuwovnzlauarkuduaqeueaeseooeoesgptekqmeeeeeauouzeuakisiuogtqmuyaambauoikloauoazgbboaiuinrzojiihosiijyxefbazaokriuabiuaadpmcsoizhiueniuoveetavleavualoucuaqiuoupoieuhqaieieurusvuezauetyqotueekeiadiebewuohoofyohuiiwgiiarooouseoierioielaeedeikuuueuuuseoseexpdeueuuuiuojeruuitfkhnauaelibtsuohuwgnovmoiotoiarjnisgriuvhaiknmatximgyluemxoaokudaowzzajstqgzaoszueowijubhbuuiaueaeodaooeyiakysdaeajtileoauvheienkuuiovxiouieeagefojoaazolajiudooapeicawudceuxoreemqiiiugoehxiopebwiikfmueaeeiiixuuiblydevtiaikjjoowuifla'

let letters = ['-', '-', 'b', 'c', 'd', '-', 'f', 'g', 'h', '-', 'j', 'k', 'l', 'm', 'n', '-', 'p', 'q', 'r', 's', 't', '-', 'v', 'w', 'x', 'y', 'z']

let vowels = ['a', 'e', 'i', 'o', 'u']

let tmpString = ''

tmpSum = 0

for (i = 0; i < string.length; i++) {
    // console.log(string[i])

    if (vowels.includes(string[i])) {
        tmpString += '---' + string[i]
        console.log(tmpString, tmpSum)
        tmpSum = 0
        tmpString = ''
    } else {
        tmpString += string[i]
        tmpSum += letters.indexOf(string[i])
    }
}