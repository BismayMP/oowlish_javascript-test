import { doctors } from './index'

export const AddOnClickAndInitialStyle = (table) => {
    for (let tr of table) {
        const btn = tr.querySelector('button')
        btn.onclick = (event) => {
            handleOnClick(tr, event)
        }
        (btn.innerText === 'MARK AS UNAVAILABLE') ? tr.setAttribute('class', 'available') : tr.setAttribute('class', 'unavailable')
    }
}

const handleOnClick = (tr, event) => {
    let availableList = doctors.filter(res => res.available).map(item => `${item.upin}`)
    //available
    if (availableList.includes(tr.getAttribute('data-upin'))) {
        //set to unavailable 
        tr.setAttribute('class', 'unavailable')
        doctors.find(doc => `${doc.upin}` === tr.getAttribute('data-upin')).available = false
        event.target.innerText = 'MARK AS AVAILABLE'
    }
    //unavailable
    if (!availableList.includes(tr.getAttribute('data-upin'))) {
        //set to available
        tr.setAttribute('class', 'available')
        doctors.find(doc => `${doc.upin}` === tr.getAttribute('data-upin')).available = true
        event.target.innerText = 'MARK AS UNAVAILABLE'
    }
}
