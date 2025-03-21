import { Observable, Page } from '@nativescript/core';
import {
  AR,
  ARLoadedEventData,
  ARNodeInteraction,
  ARNode,
} from 'nativescript-ar';

export class ARGameViewModel extends Observable {
  private arView: AR;
  private _statusMessage: string = 'Looking for a flat surface...';

  constructor(page: Page) {
    super();
    // this.arView = page.getViewById('arView');
    // this.setupARView();
  }

  arLoaded(args: ARLoadedEventData) {
    this.arView = args.object;
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

  // private setupARView() {
  //     this.arView.on('planeTapped', (args: ARNodeInteraction) => {
  //         this.statusMessage = "Surface detected! Tap an animal button to place it.";
  //     });
  // }

  planeTapped(args) {
    this.statusMessage = 'Surface detected! Tap an animal button to place it.';
  }

  placeLion() {
    const node = this.arView.addModel({
      name: 'lion',
      //   modelPath: '~/models/lion.scn',
      position: { x: 0, y: 0, z: -0.5 },
      scale: { x: 0.2, y: 0.2, z: 0.2 },
      rotation: { x: 0, y: 0, z: 0 },
    });
    // this.arView.addNode(node);
    this.statusMessage = 'Roar! A lion appears! 🦁';
  }

  placeElephant() {
    const node = this.arView.addModel({
      name: 'elephant',
      //   modelPath: '~/models/elephant.scn',
      position: { x: 0, y: 0, z: -0.5 },
      scale: { x: 0.2, y: 0.2, z: 0.2 },
      rotation: { x: 0, y: 0, z: 0 },
    });
    // this.arView.addNode(node);
    this.statusMessage = 'An elephant stomps into view! 🐘';
  }

  placeGiraffe() {
    const node = this.arView.addModel({
      name: 'giraffe',
      //   modelPath: '~/models/giraffe.scn',
      position: { x: 0, y: 0, z: -0.5 },
      scale: { x: 0.2, y: 0.2, z: 0.2 },
      rotation: { x: 0, y: 0, z: 0 },
    });
    // this.arView.addNode(node);
    this.statusMessage = 'A tall giraffe stretches up! 🦒';
  }
}
