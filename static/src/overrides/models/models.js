/** @odoo-module */

import { patch } from "@web/core/utils/patch";
import { Order } from "@point_of_sale/app/store/models";

patch(Order.prototype, {
    setup(_defaultObj, options) {
        super.setup(...arguments);
        this.cantidad_tickets = 0;
    },
});