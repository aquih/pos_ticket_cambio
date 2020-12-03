odoo.define('pos_ticket_cambio.pos_ticket_cambio', function (require) {
"use strict";

var screens = require('point_of_sale.screens');
var models = require('point_of_sale.models');
var gui = require('point_of_sale.gui');
var core = require('web.core');
var QWeb = core.qweb;


var TicketCambioButton = screens.ActionButtonWidget.extend({
    template: 'TicketCambioButton',
    init: function(parent, options) {
        this._super(parent, options);
        this.pos.bind('change:selectedOrder',this.renderElement,this);
    },
    button_click: function(){
        var self = this;
        var order = this.pos.get_order();
        this.gui.show_popup('number',{
            'title': 'Cantidad de tickets',
            'value': 0,
            'confirm': function(cantidad) {
                var lista_cantidad = [];
                while (lista_cantidad.length < cantidad) {
                  lista_cantidad.push("")
                }
                this.pos.set_cantidad_tickets(lista_cantidad);
                self.renderElement();
            },
        });
    },
});

screens.define_action_button({
    'name': 'ticket_cambio',
    'widget': TicketCambioButton,
    'condition': function(){
        return this.pos.config.ticket_cambio;
    },
});

models.PosModel = models.PosModel.extend({
    get_cantidad_tickets: function(){
        return this.get('cantidad_tickets') || this.cantidad_tickets || 0;
    },
    set_cantidad_tickets: function(cantidad_tickets){
        this.set('cantidad_tickets', cantidad_tickets);
    }
})
screens.ReceiptScreenWidget.include({
    render_receipt: function() {
        this.$('.pos-receipt-container-ticket').html(QWeb.render('TicketCambio', this.get_receipt_render_env()));
        this._super();
    },
})

var _super_order = models.Order.prototype;
models.Order = models.Order.extend({
    initialize: function() {
        _super_order.initialize.apply(this,arguments);
        this.cantidad_tickets =  this.pos.get_cantidad_tickets();
        this.save_to_db();
        return this
    },

    export_for_printing: function() {
        var json = _super_order.export_for_printing.apply(this,arguments);
        json.cantidad_tickets = this.pos.get_cantidad_tickets() || 0;
        this.pos.set_cantidad_tickets([]);
        return json;
    },
    set_cantidad_tickets: function(cantidad_tickets){
        this.assert_editable();
        this.set('cantidad_tickets',cantidad_tickets);
    },
    get_cantidad_tickets: function(){
        return this.get('cantidad_tickets');
    },

})

});
