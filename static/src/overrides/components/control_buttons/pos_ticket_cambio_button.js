/** @odoo-module **/

import { ControlButtons } from "@point_of_sale/app/screens/product_screen/control_buttons/control_buttons";
import { NumberPopup } from "@point_of_sale/app/utils/input_popups/number_popup";
import { patch } from "@web/core/utils/patch";

patch(ControlButtons.prototype, {
    async clickTicketsCambio() {
        this.dialog.add(NumberPopup, {
            title: "Cantidad de Tickets",
            placeholder: "1",
            getPayload: async (cantidad) => {
                const order = this.pos.get_order();
                order.cantidad_tickets_cambio = cantidad;
            },
        });
    }
});