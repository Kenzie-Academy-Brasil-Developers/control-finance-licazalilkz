import { insertedValues } from "./valuesData.js";

export const renderValues = (valuesData) => {
    const valueData = document.querySelector('.main__Values');
    const valuesList = document.createElement('ul');
    
    valuesData.forEach(element => {
        const list = renderValue(element);

        valuesList.appendChild(list);
    });
/**--------------------------------------------------------------- */
    valueData.appendChild(valuesList);
    const summ = valuesData.reduce ((sumation, values) => {
        return sumation += values.value; 
    }, 0)
    
    const divSummation = document.querySelector('.div__Summation');
    divSummation.innerText = summ.toString();
    removeValue(valuesData);
}

const renderValue = (valuesData) => {
    const list = document.createElement('li');
    list.className = 'card__values';
    const value = document.createElement('p');
    const divButtons = document.createElement('div');
    
    divButtons.className = 'buttons__values';
    const buttonCategory = document.createElement('button');
    const buttonDelete = document.createElement('button');
    buttonDelete.className = 'button__delete';
    /** */
    
    /** */
    if(valuesData.categoryID === 1){
        buttonCategory.innerText = 'Entrada';
    }
    else{
        buttonCategory.innerText = 'Saida';
    }
    
    buttonDelete.dataset.valuesDataId = valuesData.id ;
    buttonDelete.innerText = 'Deletar';
    value.innerText = `R$ ${valuesData.value}`;

    divButtons.appendChild(buttonCategory);
    divButtons.appendChild(buttonDelete);

    list.appendChild(value);
    list.appendChild(divButtons);
    return list;
}

export function removeItens(){
    const removeCards = document.querySelector('.main__Values ul');
    removeCards.remove();
}

const filterValues = (valuesData, optionfilter) => {
    const filteredElements = valuesData.filter((value) =>{
        if(value.categoryID === optionfilter){
            return value;
        }
    })
    return filteredElements;
};

const selectValues = (valueData) => {
    const buttonall =  document.querySelector('.filter__all');
    const buttonin  =  document.querySelector('.filter__in');
    const buttonout =  document.querySelector('.filter__out');

    buttonall.addEventListener('click', () => {
        removeItens();
        renderValues(insertedValues);
    })

    buttonin.addEventListener('click',() => {
        removeItens();
        const filteredValue = filterValues(valueData, 1);
        renderValues(filteredValue);
    })

    buttonout.addEventListener('click',() => {
        removeItens();
        const filteredValue = filterValues(valueData, 0);
        renderValues(filteredValue);
    })
}
/**----------------------------------------------------------------------- */
const regvalue = (valuesData) => {
    const inputs = document.querySelector('.informacao');
    const entrada = document.querySelector('#entrada');
    const saida = document.querySelector('#saida');
    const button = document.querySelector('.submit__button');

    
    button.addEventListener('click',()=>{
        // event.preventDefault(); event
        let newValue =  {};
        console.log(inputs);

        newValue.id = valuesData.length + 1;
        newValue.value = Number(inputs.value);
        if(entrada.checked){
            newValue.categoryID = Number(entrada.value);
        }
        else if(saida.checked){
            newValue.categoryID = Number(saida.value);
        }


        // inputs.forEach(input => {
        //     newValue[input.name] = Number(input.value) ;
        // })



        valuesData.push(newValue)
        console.log(valuesData);        
    })
    renderValue(valuesData);
}

const removeValue = (valueData) => {
    const buttonDelete = document.querySelectorAll('.button__delete');

    buttonDelete.forEach(button => {
        button.addEventListener('click', (event) => {
            const valueID = Number(event.target.dataset.valuesDataId);
            // console.log(valueID);

            const index = valueData.findIndex(value => {
                return value.id === valueID ;
            })
            // console.log(index);
            const removeValue = valueData.splice(index, 1); 
            // console.log(removeValue);
            removeItens();
            renderValues(valueData);
        })
    })
}

renderValues(insertedValues);
selectValues(insertedValues);
regvalue(insertedValues);