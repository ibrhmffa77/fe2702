// Rest operatorundan (...) istifadə edərək istənilən sayda arqument qəbul edən və onların cəmini qaytaran sumAll funksiyasını yazın

function sumAll(...numbers){
    let total = 0;
    for(let num of numbers){
        total += num
    }
    return total
}
console.log(sumAll(6, 7, 5, 2));


// [1, 2, 3, 4, 5] array-i verildikdə, array destructuring və rest operatoru istifadə edərək ilk iki elementi dəyişənlərə təyin edin, qalanları isə üçüncü bir dəyişənə yığın.

const array = [1, 2, 3, 4, 5];

const [first, second, ...rest] = array;

 console.log(first);
 console.log(second);
 console.log(...rest);


//  { name: 'John', age: 30, city: 'New York', profession: 'Engineer' } obyektini nəzərə alaraq, rest operatorundan istifadə edərək name və age məlumatlarını çıxarın, qalan xassələri isə başqa bir obyektə yığın

const people ={
    name: 'John', 
    age: 30,
    city: 'New York',
    profession: 'Engineer'
};

const { name, age, ...set } = people;

console.log(name);
console.log(age);
console.log(set); 


// İki array qəbul edən və spread operatorundan istifadə edərək onları birləşdirən yeni bir array qaytaran combineArrays funksiyasını yazın

function combineArrays(array1, array2){
    return [...array1, ...array2]
}

console.log(combineArrays([3, 5, 7], [4, 6, 8]))


// name və age xassələri olan person adlı bir obyekt yaradın. Spread operatorundan istifadə edərək bu obyekti klonlayan və city adlı yeni bir xassə əlavə edən bir funksiyanı yazın

const person = {
    name: 'Ragsana',
    age: 21,
};

function clone(obj, city){
    return {...obj, city};
};

const newPerson = clone(person, 'Azerbaijan');

console.log(newPerson)

// İki obyekt verilmişdir: { name: 'Alice' } və { age: 25 }. Onları spread operatorundan istifadə edərək tək bir obyektə birləşdirin

const Name = {
    name: 'Alice',
};
const Age = {
    age: 25,
}
const newObj = {...Name, ...Age};

console.log(newObj)


// İstənilən sayda array qəbul edən və onları spread və rest operatorları ilə bir array-ə birləşdirən mergeAndMultiply funksiyasını yazın. Sonra həmin birləşdirilmiş array-dəki bütün ədədlərin hasilini qaytarın.




// name və age xassələri olan obyektlərdən ibarət bir array qəbul edən funksiyanı yazın. Rest və spread operatorları ilə hər bir obyektə əlavə sahə əlavə edin və dəyişdirilmiş array-i qaytarın. (chatgpt help)

function addFieldToObjects(objects, newField, value) {
    return objects.map(obj => ({ ...obj, [newField]: value }));
}

const persons = [
    { name: 'Ragsana', age: 21 },
    { name: 'Shafag', age: 21 },
];
console.log(addFieldToObjects(persons, 'city', 'New York'));


// Birinci arqument olaraq vurğu qəbul edən və istənilən sayda əlavə arqument qəbul edən multiplyBy funksiyasını yazın. Spread və rest operatorları istifadə edərək, hər bir arqumenti (vurğudan sonra) vurğu ilə vurub array qaytarın

function multiplyBy (multiply, ...numbers){
    return numbers.map(num => num * multiply)
}
console.log(multiplyBy(3, 3, 6, 7, 8))
