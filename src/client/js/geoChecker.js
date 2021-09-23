function geoURLChecker(inputText) {
    console.log("::: Running geoURLChecker :::", inputText);
    
    const reg = new RegExp(/^(http|https):\/\/[^ "]+$/);
    return reg.test(inputText);
}

export { geoURLChecker }
