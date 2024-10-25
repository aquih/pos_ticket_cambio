
# -*- coding: utf-8 -*-

{
    'name': 'Ticket cambio POS',
    'version': '2.0',
    'category': 'Sales/Point of Sale',
    'sequence': 6,
    'summary': 'Ticket de cambio en POS',
    'description': """ Ticket de cambio en POS """,
    'author': 'Aquih',
    'website': 'http://aquih.com',
    'depends': ['point_of_sale', 'pos_fel'],
    'data': [
        'views/pos_config_view.xml',
    ],
    'installable': True,
    'auto_install': False,
    'assets': {
        'point_of_sale._assets_pos': [
            'pos_ticket_cambio/static/src/**/*',
            'pos_ticket_cambio/static/src/css/**/*',
        ],
    },
    'license': 'Other OSI approved licence',
}
