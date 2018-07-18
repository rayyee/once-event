module.exports = function once( oncer, name, untilTheEnd = [ 'error' ] ) {
    const is_oncer = typeof oncer.once === 'function';
    if ( is_oncer ) {
        return new Promise( ( resovle, reject ) => {
            const clashed = untilTheEnd.indexOf( name );
            if ( clashed > -1 ) {
                untilTheEnd.split( clashed, 1 );
            }
            untilTheEnd.forEach( x => oncer.once( x, reject ) );
            oncer.once( name, function() {
                arguments.length > 1 ?
                    resovle( Array.prototype.slice.call( arguments ) ) :
                    resovle.apply( null, arguments );
            } );
        } );
    } else {
        throw new Error(
            'once-event arguments error'
        );
    }
}
