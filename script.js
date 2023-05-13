const button = document.getElementById('button-convert')
const select = document.getElementById('currency-select')

const dolar = 5.2
const euro = 6.2


const convertValues = () => {
    const inputReal = document.getElementById('input-real').value

    const RealValueText = document.getElementById('real-value-text')

    const CurrencyValueText = document.getElementById('Currency-value-text')

    if (select.value === "US$ Dólar americano") {
        CurrencyValueText.innerHTML = new Intl.NumberFormat("en-EU", {
            style: "currency",
            currency: "USD",
        }).format(inputReal / dolar)
    }

    if (select.value === "€ Euro") {
        CurrencyValueText.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputReal / euro)
    }

    RealValueText.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(inputReal)

}

changeCurrency = () => {

    const currencyName = document.getElementById('currency-name')
    const currencyImg = document.getElementById('currency-img')

    if (select.value === '€ Euro') {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/euroImg.png"
    }

    if (select.value === 'US$ Dólar americano') {
        currencyName.innerHTML = "Dólar americano"
        currencyImg.src = "./assets/estados-unidos (1) 1.svg"

    }

    convertValues()

}

button.addEventListener('click', convertValues)
select.addEventListener('change', changeCurrency)
