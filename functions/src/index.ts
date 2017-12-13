import * as functions from 'firebase-functions';

export const testSendOnNew = functions.crashlytics.issue().onNewDetected(event => {
    return Promise.resolve({});
});

export const testSendOnRegressed = functions.crashlytics.issue().onRegressed(event => {
    return Promise.resolve({});
});

export const testSendOnVelocityAlert = functions.crashlytics.issue().onVelocityAlert(event => {
    return Promise.resolve({});
});
