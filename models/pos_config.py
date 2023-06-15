# -*- encoding: utf-8 -*-

from odoo import models, fields, api, _

class PosConfig(models.Model):
    _inherit = 'pos.config'

    ticket_cambio = fields.Boolean('Ticket de Cambio')

class ResConfigSettings(models.TransientModel):
    _inherit = 'res.config.settings'

    # pos.config fields
    pos_ticket_cambio = fields.Boolean(related='pos_config_id.ticket_cambio', readonly=False)
