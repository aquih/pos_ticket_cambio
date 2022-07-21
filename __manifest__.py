
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
    ],
    'qweb': [
        'static/src/xml/pos_ticket_cambio.xml',
    ],
    'installable': True,
    'auto_install': False,
    'assets': {
        'point_of_sale.assets': [
            'pos_ticket_cambio/static/src/js/pos_ticket_cambio.js',
            ('after', 'point_of_sale/static/src/css/pos.css', 'pos_ticket_cambio/static/src/css/pos_ticket_cambio.css'),
        ],
        'web.assets_qweb': [
            'pos_ticket_cambio/static/src/xml/**/*',
        ]
    }
}

# vim:expandtab:smartindent:tabstop=4:softtabstop=4:shiftwidth=4:
