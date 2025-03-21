import { EventData, Page } from '@nativescript/core';
import { GameViewModel } from './game-view-model';
import { requestCameraPermissions } from '@nativescript/camera';

export function onNavigatingTo(args: EventData) {
    const page = <Page>args.object;
    requestCameraPermissions()
        .then(() => {
            page.bindingContext = new GameViewModel();
        })
        .catch(() => {
            console.log('Camera permission denied');
        });
}