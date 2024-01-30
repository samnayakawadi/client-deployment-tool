'use strict';

import Jasypt from 'jasypt';

export const encryptText = (text) => {
    const jasypt = new Jasypt();
    jasypt.setPassword(process.env.jasypt_secret);
    return jasypt.encrypt(text);
}

export const decryptText = (encodedText) => {
    const jasypt = new Jasypt();
    jasypt.setPassword(process.env.jasypt_secret);
    jasypt.decrypt(encodedText);
}