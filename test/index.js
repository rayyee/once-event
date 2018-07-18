import test from 'ava';
import EventEmitter from 'events';
import once from '../lib';

test( 'custom event', async t => {
    const event = new EventEmitter();
    setTimeout( () => {
        event.emit( 'foo', 'bar' );
    }, 200 );

    t.is( await once( event, 'foo' ), 'bar' );
} );

test( 'emit multi argument', async t => {
    const event = new EventEmitter();
    setTimeout( () => {
        event.emit( 'foo', 'bar', 'biz' );
    }, 200 );

    t.deepEqual( await once( event, 'foo' ), [ 'bar', 'biz' ] );
} );
