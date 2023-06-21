/* Desenvolva sua lógica aqui */
import { insertedValues } from "./valuesData.js";
import { renderValues } from "./index.js";
import { removeItens } from "./index.js";

function handleModal(){
    const button = document.querySelector('.header__Button');
    const modalController = document.querySelector('.modal__controller');

    button.addEventListener('click', ()=>{
        modalController.showModal();
        closeModal();
    })
}

export function closeModal(){
    const button = document.querySelector('.modal__close');
    const buttonCancel = document.querySelector('.modal__cancel');
    const modalController = document.querySelector('.modal__controller');
    const buttonsubmit = document.querySelector('.submit__button');

    button.addEventListener('click', () => {
        removeItens();
        renderValues(insertedValues);
        modalController.close();
    })

    buttonCancel.addEventListener('click', () => {
        removeItens();
        renderValues(insertedValues);
        modalController.close();
    })

    buttonsubmit.addEventListener('click', () => {
        removeItens();
        renderValues(insertedValues);
        modalController.close();
    })
}

handleModal();