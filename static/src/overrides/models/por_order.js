/** @odoo-module */

import { patch } from "@web/core/utils/patch";
import { PosOrder } from "@point_of_sale/app/models/pos_order";

patch(PosOrder.prototype, {
    setup(vals) {
        super.setup(vals);
        this.cantidad_tickets_cambio = vals.cantidad_tickets_cambio || (this.config.ticket_cambio ? 1 : 0);
    },
});