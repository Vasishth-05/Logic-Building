// function reverse(str){
//     let foot = "";
//     for(let i = str.length - 1 ; i >= 0 ; i--){
//         foot = foot + str[i];
//     }
//     return foot;
// }

// const stri = "Vasishth";
// const reversedString = reverse(stri);

// console.log(reversedString);

function reverse(str){
    return str.split("").reverse().join("");
}

const reversedString = reverse("Vasishth");

console.log(reversedString);
