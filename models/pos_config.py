# -*- encoding: utf-8 -*-

from odoo import models, fields, api, _

class PosConfig(models.Model):
    _inherit = 'pos.config'

    ticket_cambio = fields.Boolean('Ticket de cambio')
