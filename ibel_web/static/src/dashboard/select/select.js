/** @odoo-module */

const { Component, useState } = owl

export class IbelSelect extends Component {
    static props = {
        options: Array,
        selected: String,
        onSelect: Function,
    };
    setup() {
        this.state = useState({ selected: this.props.selected });
    }

    onChange(event) {
        const selectedValue = event.target.value;
        this.state.selected = selectedValue; // Met à jour l'état local
        if (this.props.onSelect) {
            this.props.onSelect(selectedValue); // Appelle la fonction de callback
        }
    }
}

IbelSelect.template = "ibel_web.ibelselect"


