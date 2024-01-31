import * as React from 'react';
import { useState, useEffect } from 'react';
import { DialogComponent, AnimationSettingsModel } from '@syncfusion/ej2-react-popups';
import './draggable.css';

const DraggableB = () => {

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
      <div className="control-pane">
        <div id="target1" className="col-lg-12 control-section dialog-draggable">
          <button className="e-control e-btn dlgbtn" onClick={buttonClick} style={{ display: display }} id="dialogBtn">Open Dialog</button>
          {/* Render alert Dialog */}
          <DialogComponent id="dialogDraggable" header="Drag Me!!!" isModal={false} showCloseIcon={true} allowDragging={true} animationSettings={animationSettings} width="300px" target="#target1" visible={status} open={dialogOpen}close={dialogClose}>This is a dialog with draggable support.</DialogComponent>
        </div>
      </div>
    );
}
export default DraggableB;