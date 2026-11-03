
# -*- coding: utf-8 -*-

{
    'name': 'Ticket de Cambio POS',
    'version': '5.0',
    'category': 'Sales/Point of Sale',
    'sequence': 6,
    'summary': 'Ticket de cambio en POS',
    'description': """ Ticket de cambio en POS """,
    'author': 'aquíH',
    'website': 'http://www.aquih.com',
    'depends': ['point_of_sale'],
    'data': [
    ],
    'installable': True,
    'auto_install': False,
    'assets': {
        'point_of_sale._assets_pos': [
            'pos_ticket_cambio/static/src/**/*',
        ],
    },
    'license': 'Other OSI approved licence',
}
