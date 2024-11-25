/** @odoo-module **/

import { Component } from "@odoo/owl";

export class DashboardItem extends Component {
    
    static props = {
        size: {
            type: Number,
            optional: true,
            default: 1,
        },
    };
};   
DashboardItem.template = "ibel_web.dashboarditem";
