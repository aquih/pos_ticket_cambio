/** @odoo-module **/

import { Component, useState } from "@odoo/owl";
import { registry } from "@web/core/registry";
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
    static components = {
        ReceiptHeader
    }
    setup() {
        super.setup();
        this.pos = usePos();
        this._cantidad_tickets = this.pos.get_order().cantidad_tickets;
        this._pos = this.pos;
        var company_id  = this.pos.company.partner_id[0];
        this._contact_address = this.pos.db.get_partner_by_id(company_id);

    }

    get contact_address(){
        return this._contact_address.address;
        
    }
    get pos_info(){
        return this._pos;
        
    }    
    get tickets() {
        let tickets = []
        for (let i = 0; i < this._cantidad_tickets; i++) {
            tickets.push(i);
        }
        return tickets;
    }    
}

patch(OrderReceipt, {
    components: { ...OrderReceipt.components, TicketCambio },
});