/** @odoo-module **/

import { Component, useState } from "@odoo/owl";
import { usePos } from "@point_of_sale/app/store/pos_hook";
import { OrderReceipt } from "@point_of_sale/app/screens/receipt_screen/receipt/order_receipt";
import { patch } from "@web/core/utils/patch";
import { ReceiptHeader } from "@point_of_sale/app/screens/receipt_screen/receipt/receipt_header/receipt_header";

export class TicketCambio extends Component {
    static template = "pos_ticket_cambio.TicketCambio";
    static props = {
        data: Object,
        formatCurrency: Function,
    };
    setup() {
        super.setup();
        this.pos = usePos();
    }
    static components = {
        ReceiptHeader
    };
    cantidad_tickets_cambio() {
        return this.pos.get_order().cantidad_tickets_cambio;
    }
}

patch(OrderReceipt, {
    components: { ...OrderReceipt.components, TicketCambio },
});