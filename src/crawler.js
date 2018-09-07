/*jslint esversion:6 */

import EventEmitter from 'events';
import superagent from 'superagent';

import c from 'validate.io';

/**
 * 爬虫负责下载资源
 */
export default class Crawler extends EventEmitter {

    constructor() {
        super()
        this.overlord = null;
    }

    request() {
        let a = arguments;
        if (1 == a.length && c.isURI(a[0])) {
            superagent.get(a[0])
                .then(res => {
                    this.emit('response', null, res);
                })
                .catch(err => {
                    this.emit('error', err);
                });
        } else {
            throw new Error(`invalid arguments: ${arguments}`);
        }


    }

}
