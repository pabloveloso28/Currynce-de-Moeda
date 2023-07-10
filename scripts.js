const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

const convertValues = async () => {
    const inputCurrencyValue = document.querySelector(".inputCurrency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // valor em real
    const currencyValueConvert = document.querySelector(".currency-value") // outros valores

    const data = await fetch(
        "https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL,GBP-BRL"
    ).then((response) => response.json());
    
    const dolarToday = data.USDBRL.high; // Valor atual do dolar em reais
    const euroToday = data.EURBRL.high; // Valor atual do euro em reais
    const libraToday = data.GBPBRL.high; // vALOR ATUAL DA LIBRA EM REAIS
    const bitcoinToday = data.BTCBRL.high; // Valor atual do bitcoin em reais
    
    if (currencySelect.value == "dolar") {

        currencyValueConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelect.value == "euro") {

        currencyValueConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    if (currencySelect.value == "libra") {

        currencyValueConvert.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }


    if (currencySelect.value == "bitcon") {

        currencyValueConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToday)
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

}

function currencyName() {
    const currencyName = document.querySelector(".currency-name")
  

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar Americano"
        
    }
    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
       
    }

    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
     

    }

    if (currencySelect.value == "bitcon") {
        currencyName.innerHTML = "Bitcon"
        

    }
    if (currencySelect.value == "real") {
        currencyName.innerHTML = "Real Brasileiro"
        
    }

    convertValues()

}




currencySelect.addEventListener("change", currencyName)
convertButton.addEventListener("click", convertValues) 





