import { Observable } from '@nativescript/core';
import { AR, ARNode, ARPlaneTappedEventData } from 'nativescript-ar';

export class ARGameModel extends Observable {
  private _statusMessage: string = 'Looking for surface...';
  private currentAnimal: string = '';

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

  addLion() {
    this.currentAnimal = 'lion';
    this.statusMessage = 'Tap on a surface to place the lion!';
  }

  addElephant() {
    this.currentAnimal = 'elephant';
    this.statusMessage = 'Tap on a surface to place the elephant!';
  }

  addGiraffe() {
    this.currentAnimal = 'giraffe';
    this.statusMessage = 'Tap on a surface to place the giraffe!';
  }

  onPlaneTapped(args: ARPlaneTappedEventData, arView: AR) {
    if (!this.currentAnimal) {
      this.statusMessage = 'Select an animal first!';
      return;
    }

    const node = arView.addModel({
      name: this.currentAnimal,
      // modelPath: `~/models/${this.currentAnimal}.scn`,
      scale: 0.2,
      position: args.position,
      rotation: { x: 0, y: 0, z: 0 },
    });

    // arView.addNode(node);
    this.statusMessage = `${
      this.currentAnimal.charAt(0).toUpperCase() + this.currentAnimal.slice(1)
    } placed!`;
    this.currentAnimal = '';
  }
}
