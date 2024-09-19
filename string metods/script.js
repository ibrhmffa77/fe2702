// Saitləri Say: Bir string götürün və string-də olan saitlərin (a, e, i, o, u) sayını qaytaran funksiya yazın.

let vowel = "aeiou";
console.log(vowel.length)


// Bir string götürün və onu tərsinə çevirən funksiya yazın.


    const revStr=str=> str.split('').reverse().join(''); 
    console.log(revStr("hello world"))

// Verilmiş string-in palindrom olub-olmadığını (ön tərəfdən və tərsinə oxuduqda eyni olub-olmadığını) yoxlayan funksiya yazın




// String-dəki hər sözün ilk hərfini böyük yazan funksiya yazın.(chat help)

    function bigWords(str){
        return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ')
} 
       console.log(bigWords('hello front'))



// String-də təkrarlanan simvolları silən funksiya yazın. Məsələn, "salam" stringi "salm" olmalıdır.




// Bir cümlə və bir söz götürən və həmin sözün cümlədə neçə dəfə təkrarlanmasını qaytaran funksiya yazın.




// Bir string və iki simvol götürən, string-də birinci simvolu ikinci simvolla əvəzləyən funksiya yazın.

function replaceStr(str, simvol1, simvol2){
    return str.split(simvol1).join(simvol2)
}

console.log(replaceStr("Reqsane", "Reqs", "an"))

// String-dəki ən uzun sözü tapan funksiya yazın.




// Verilmiş string-dən bütün rəqəmləri çıxaran funksiya yazın.(Chat)


function removeNumbers(str) {
    return str.replace(/\d+/g, '');
  }

  console.log(removeNumbers("Ibrahimova.2003"));