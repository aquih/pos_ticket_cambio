
# -*- coding: utf-8 -*-

{
    'name': 'Ticket cambio POS',
    'version': '1.0',
    'category': 'Point of Sale',
    'sequence': 6,
    'summary': 'Ticket de cambio en POS',
    'description': """ Ticket de cambio en POS """,
    'author': 'Aquih',
    'website': 'http://aquih.com',
    'depends': ['point_of_sale'],
    'data': [
        'views/pos_config_view.xml',
        'views/templates.xml',
    ],
    'qweb': [
        'static/src/xml/pos_ticket_cambio.xml',
    ],
    'installable': True,
    'auto_install': False,
}

# vim:expandtab:smartindent:tabstop=4:softtabstop=4:shiftwidth=4:
