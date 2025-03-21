import { EventData, Page } from '@nativescript/core';
import { ARGameViewModel } from './ar-game-view-model';

export function onNavigatingTo(args: EventData) {
    const page = <Page>args.object;
    page.bindingContext = new ARGameViewModel(page);
}