const currencySelect = document.querySelector('#currency');
const values = document.querySelector('#summ-currency');
const exchange = document.querySelector('#exchange');


const rates ={
    BYN: {
        USD: 0.39,
        EUR: 0.34,
        CNY: 2.46,
        RUB: 0.035,
        },
    USD: {
        BYN: 2.57,
        EUR: 0.88,
        CNY: 6.32,
        RUB: 75.99,
        },
    EUR: {
        BYN: 2.92,
        USD: 1.14,
        CNY: 7.17,
        RUB: 86.31,
        },
    CNY: {
        BYN: 0.41,
        USD: 0.16,
        EUR: 0.14,
        RUB: 12.06,
        },
    RUB: {
        BYN: 0.03,
        USD: 0.01,
        EUR: 0.01,
        CNY: 0.08,
        },    

}
const currencies = [
    {
        code: 1,
        name: 'BYN',
    },

    {
        code: 2,
        name: 'USD',
    },

    {
        code: 3,
        name: 'EUR',
    },

    {
        code: 4,
        name: 'CNY',
    },

    {
        code: 5,
        name: 'RUB',
    },
];


const currencyValues = ((name, value) => {
    const tr = document.createElement('tr');
    const tdName = document.createElement('td');
    const tdValue = document.createElement('td');

    tdName.innerHTML = name;
    tdValue.innerHTML = value;
    tr.append(tdName, tdValue);
    return tr
});

currencySelect.innerHTML = currencies.map(({name}) => (`<option values='${name}'>${name}</option>`));
exchange.append(...currencies.slice(1).map(({name}) => currencyValues(name, 0)));

const caclRate = () => {
    const curentCurrency = currencySelect.value;
    const curentValue = Number(values.value) ;
    const fitlterCurrencies = currencies.filter(el => el.name !== curentCurrency);

    while (exchange.firstChild) {
        exchange.firstChild.remove()
    }
    exchange.append(...fitlterCurrencies.map(({name}) => {
        const multiValue = rates[curentCurrency][name] * curentValue;

        return currencyValues(name, multiValue.toFixed(3));
    }));
}

currencySelect.addEventListener('change', caclRate);
values.addEventListener('change', caclRate);






