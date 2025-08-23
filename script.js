class CssPropControl {
    constructor(element) {
        this.element = element;
    }

    get(varName) {
        return getComputedStyle(this.element).getPropertyValue(varName);
        /*gets selected element and get property val. assosiated with varName */
    }

    set(varName, value) {
        return this.element.style.setProperty(varName, value);
        /* assign varName to given value) */
    }
}

const bodyCssProps = new CssPropControl(document.body);

let toggle = document.querySelector('#dark-mode-toggle')
toggle.addEventListener('click', () => {
    let mode = toggle.checked ? 'dark' : 'light' /* get current mode depending on toggle state */
    bodyCssProps.set('--background-color', bodyCssProps.get(`--${mode}-background-color`)) 
    bodyCssProps.set('--primary', bodyCssProps.get(`--${mode}-primary`)) 
    // bodyCssProps.set('--link', bodyCssProps.get(`--${mode}-link`))   
    /* set background color depending on mode */

})