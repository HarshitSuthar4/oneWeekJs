const arr = [1, 2, 3, 4, 5, 6, 7, 8]

for (const element of arr) {
    // console.log(element);
}

const welcomeMessage = "Hello World"

for (const element of welcomeMessage) {
    // console.log(element);  
}

const programmingLang = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
}

for (const key in programmingLang) {
    // console.log(`${key} shourts is for ${programmingLang[key]}` );
} // for in loop

const lang = ["js", "cpp", "java", "python"]
for (const key in lang) {
    console.log(lang[key]);
} // for in with arry