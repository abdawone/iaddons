/** @odoo-module */

const { Component, } = owl

export class KpiCard extends Component {
    static props = {
    size: { type: String, optional: true, default: 3}, // Marquer `size` comme optionnel et de type String
};

}

KpiCard.template = "ibel.KpiCard"

