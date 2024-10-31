( function( wp ) {

    var registerBlockType = wp.blocks.registerBlockType;

    var el = wp.element.createElement;

    var __ = wp.i18n.__;

    registerBlockType( 'my-company-files-login/mcf-login-form', {

        title: __( 'MyCompanyFiles login form' ),
        category: 'widgets',
        supports: {
            // Removes support for an HTML mode.
            html: false,
        },
        edit: function( props ) {
            return el(
                'div',
                {},
                '[mcf-login]'
            );
        },
        save: function() {
            return el(
                'div',
                {},
                '[mcf-login]'
            );
        }
    } );
} )(
    window.wp
);
