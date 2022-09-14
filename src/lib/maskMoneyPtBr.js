export function maskNumberPtBr(value) {
    if(value.length>2) {
        let formattedValue = [value.slice(0, value.length-2), ",", value.slice(value.length-2)].join("");

        if(formattedValue.length > 4 && formattedValue[0] === "0") {
            formattedValue = formattedValue.slice(1)
        }

        let count = (formattedValue.length-3)-3;

        for(let i = formattedValue.length-3; i>0;i--) {
            if(i === count) {
                formattedValue = [formattedValue.slice(0,count),".",formattedValue.slice(count)].join("");
                count = count - 3;
            }
        }

        return formattedValue;
    }else if (value.length === 1){
        return ['0', `0${value}`]
    }else {
        return ['0', value];
    }
}

export function priceValidation(price) {
    let validPrice = price.replace(/[^'0''1''2''3''4''5''6''7''8''9']/g, '')
    return validPrice
}