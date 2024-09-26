/** @odoo-module **/

import { _t } from "@web/core/l10n/translation";
import { ProductScreen } from "@point_of_sale/app/screens/product_screen/product_screen";
import { useService } from "@web/core/utils/hooks";
import { NumberPopup } from "@point_of_sale/app/utils/input_popups/number_popup";
import { Component, useState } from "@odoo/owl";
import { usePos } from "@point_of_sale/app/store/pos_hook";
import { OrderWidget } from "@point_of_sale/app/generic_components/order_widget/order_widget";
import { ReceiptHeader } from "@point_of_sale/app/screens/receipt_screen/receipt/receipt_header/receipt_header";
import { omit } from "@web/core/utils/objects";
import { ReceiptScreen } from "@point_of_sale/app/screens/receipt_screen/receipt_screen";


export class TicketCambioButton extends Component {
    static template = "pos_ticket_cambio.TicketCambioButton";

    setup() {
        this.pos = usePos();
        this.popup = useService("popup");
        const order = this.pos.get_order();
        this.state = useState({ cantidad_tickets: order.cantidad_tickets || 0 });
    }
    async onClick() {
        const { confirmed, payload } = await this.popup.add(NumberPopup, {
            title: _t("Cantidad de tickets"),
            startingValue: 0,
        });

        if (confirmed) {
            this.state.cantidad_tickets = parseInt(payload);
            const order = this.pos.get_order();
            order.cantidad_tickets = this.state.cantidad_tickets;
        }
    }
}

ProductScreen.addControlButton({
    component: TicketCambioButton,
    condition: function() {
        return this.pos.config.ticket_cambio;
    },    
});