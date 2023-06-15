odoo.define('pos_ticket_cambio.pos_ticket_cambio', function (require) {
    "use strict";
    
    const ProductScreen = require('point_of_sale.ProductScreen');
    const PosComponent = require('point_of_sale.PosComponent');
    const Registries = require('point_of_sale.Registries');

    const { useListener } = require("@web/core/utils/hooks");
    const { useState } = owl;

    class TicketCambioButton extends PosComponent {
        setup() {
            super.setup();
            useListener('click', this.onClick);
            const order = this.env.pos.get_order();
            this.state = useState({ cantidad_tickets: order.cantidad_tickets || 0 });
        }
        async onClick() {
            const { confirmed, payload } = await this.showPopup('NumberPopup',{
                'title': 'Cantidad de tickets',
                'startingValue': 0,
            });
            if (confirmed) {
                this.state.cantidad_tickets = parseInt(payload);
                const order = this.env.pos.get_order();
                order.cantidad_tickets = this.state.cantidad_tickets;
            }
        }
    }
    TicketCambioButton.template = 'TicketCambioButton';
    
    ProductScreen.addControlButton({
        component: TicketCambioButton,
        condition: function() {
            return this.env.pos.config.ticket_cambio;
        },
    });
    Registries.Component.add(TicketCambioButton);
    
    class TicketCambio extends PosComponent {
        setup() {
            super.setup();
            this._receiptEnv = this.props.order.getOrderReceiptEnv();
            this._cantidad_tickets = this.props.order.cantidad_tickets;
        }
        willUpdateProps(nextProps) {
            this._receiptEnv = nextProps.order.getOrderReceiptEnv();
            this._cantidad_tickets = nextProps.order.cantidad_tickets;
        }
        get receipt() {
            return this.receiptEnv.receipt;
        }
        get receiptEnv() {
            return this._receiptEnv;
        }
        get tickets() {
            let tickets = []
            for (let i = 0; i < this._cantidad_tickets; i++) {
                tickets.push(i);
            }
            return tickets;
        }
    }
    TicketCambio.template = 'TicketCambio';

    Registries.Component.add(TicketCambio);

});
