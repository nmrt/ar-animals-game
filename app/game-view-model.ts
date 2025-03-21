import { Observable } from '@nativescript/core';

export class GameViewModel extends Observable {
    private _statusMessage: string = "Select an animal to learn about it!";
    private _currentAnimalImage: string = "";

    constructor() {
        super();
    }

    get statusMessage(): string {
        return this._statusMessage;
    }

    set statusMessage(value: string) {
        if (this._statusMessage !== value) {
            this._statusMessage = value;
            this.notifyPropertyChange('statusMessage', value);
        }
    }

    get currentAnimalImage(): string {
        return this._currentAnimalImage;
    }

    set currentAnimalImage(value: string) {
        if (this._currentAnimalImage !== value) {
            this._currentAnimalImage = value;
            this.notifyPropertyChange('currentAnimalImage', value);
        }
    }

    showLion() {
        this.currentAnimalImage = "~/images/lion.png";
        this.statusMessage = "Lions are the kings of the jungle! They live in groups called prides.";
    }

    showElephant() {
        this.currentAnimalImage = "~/images/elephant.png";
        this.statusMessage = "Elephants are the largest land animals. They're very smart and have great memory!";
    }

    showGiraffe() {
        this.currentAnimalImage = "~/images/giraffe.png";
        this.statusMessage = "Giraffes are the tallest animals in the world. Their long necks help them eat leaves from tall trees!";
    }
}