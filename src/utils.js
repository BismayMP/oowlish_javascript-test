import {doctors} from './index'

export const AddOnClick = (table) => {
    let availableList = doctors.filter(res => res.available).map(item => `${item.upin}`)
    for (let tr of table){
        tr.querySelector('button').onclick = (event) => {
            handleOnClick(tr, event)
        }
    }
}

const handleOnClick = (tr, event) => {
    let availableList = doctors.filter(res => res.available).map(item => `${item.upin}`)
    //available
    if (availableList.includes(tr.getAttribute('data-upin'))) {
        //set to unavailable 
        doctors.find(doc => `${doc.upin}` === tr.getAttribute('data-upin')).available = false
        event.target.innerText = 'Mark as Available'
    } 
    //unavailable
    if (!availableList.includes(tr.getAttribute('data-upin'))) {
         //set to available
         doctors.find(doc => `${doc.upin}` === tr.getAttribute('data-upin')).available = true
         event.target.innerText = 'Mark as Unavailable'
    }
}
