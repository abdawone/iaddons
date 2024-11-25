/** @odoo-module */

import { Component, useState } from "@odoo/owl";

export class IbelDashboard extends Component {
    setup(){
        this.state = useState({
            period:"",
        })

   }
   static props = {
        titre: String,
    };
}

IbelDashboard.template = "ibel_web.ibel_dashboard"

