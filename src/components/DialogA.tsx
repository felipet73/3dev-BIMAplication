import * as React from 'react';
import { useState, useEffect } from 'react';
import { DialogComponent, AnimationSettingsModel } from '@syncfusion/ej2-react-popups';
import './draggable.css';

const Draggable = () => {

    let animationSettings: AnimationSettingsModel;
    let buttonEle: HTMLButtonElement;
    const [status, setStatus] = useState<boolean>(true);
    const [display, setDisplay] = useState<string>('none');
    animationSettings = { effect: 'None' };
  
    const buttonClick = (): void => {
      setStatus(true);
    }
    const dialogClose = (): void => {
      setStatus(false);
      setDisplay('inline-block');
    }
    const dialogOpen = (): void => {
      setStatus(true);
      setDisplay('none');
    }
  
    return (
        <>
          <DialogComponent id="dialogDraggable" header="Drag Me!!!" isModal={false} showCloseIcon={true} allowDragging={true} animationSettings={animationSettings} width="300px" target="#target_dash" visible={status} open={dialogOpen}close={dialogClose}>This is a dialog with draggable support.</DialogComponent>
          <DialogComponent id="dialogDraggable1" header="Drag Me!!!" isModal={false} showCloseIcon={true} allowDragging={true} animationSettings={animationSettings} width="300px" target="#target_dash" visible={status} open={dialogOpen}close={dialogClose}>This is a dialog with draggable support.</DialogComponent>
        </>
    );
}
export default Draggable;