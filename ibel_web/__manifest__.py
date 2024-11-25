# -*- coding: utf-8 -*-
{
    'name': "ibel_web",

    'summary': """
        Customize Ibel backend
        """,
    'description': """
        Customize Ibel backend
    """,

    'author': "Ibel technology",
    'website': "https://ibeltechnology.com.com",
    'license': 'LGPL-3',

    'category': 'Uncategorized',
    'version': '18.0',
    'depends': ['base','web',],

 
    "assets": {
        "web.assets_backend": [
            "ibel_web/static/src/**/*",
        ],
    },
   'data': [
        'views/views.xml',
        'views/webclient_templates.xml',
    ],
    "auto_install": True,
}
