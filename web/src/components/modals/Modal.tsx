import { ChangeEvent, memo, VFC } from 'react';
import { SOverlay, SModal } from '../../constant/BaseCss';
import { useUpdateThreshold } from '../../hooks/useUpdateThreshold';
import { PrimaryButton } from '../buttons/PrimaryButton';
import { RangeSlider } from '../Inputs/RangeSlider';

type Props = {
  show: boolean;
  chipId: string;
  percent: string;
  onClick: () => void;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const Modal: VFC<Props> = memo((props) => {
  const { show, chipId, percent, onClick, onChange } = props;
  const { updateThreshold } = useUpdateThreshold();
  const onClickUpdateThreshold = () => updateThreshold(chipId, percent);

  return (
    <>
      {show ? (
        <>
          <SOverlay onClick={onClick}>
            <SModal onClick={(event) => event.stopPropagation()}>
              <header>
                <h1>設定</h1>
                <div className="svgContainer">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    onClick={onClick}
                  >
                    <rect width="30" height="30" fill="url(#pattern7)" />
                    <defs>
                      <pattern id="pattern7" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use xlinkHref="#image7" transform="scale(0.0333333)" />
                      </pattern>
                      <image
                        id="image7"
                        width="30"
                        height="30"
                        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABZUlEQVRIie2WTU7DMBCFn4f0CLGcG7AoZ0C0dAGIyyIBEqJInIEucgOPkiM02CxIRUgcZ5KCKlV9m0h2xl8m82fgpGOXCi0ys1bOPQGAJ7o1xhRjDt3Ze8CD6C5k3wFba1Pl/RrARb2Un81mizRNrQQqtae2IXn/3DACgPPP7faFmfUQlJm18v4tYP/Q4Ui8ADCHc+sYnJk1nFsDmEsO7ICdUjcAPnrg72VZZu0Na20K5157oDklyX17MZhcgTj9OqgZs6F3KUmutNYsAkvhVVVVU6BRMDAYt039DO8RLWNlGAUDg56HFPVUDB4JF0HFYCFcDAXkdSySUkrsyJ//aml7/ZfkksAPVk69MRa0wZVXaoGR7XWnSS2zmb1j2msUPKX3ToFL5vFOGxBdhuo0y7ISRNf4iXtTe83jwWQxxhQgWvbAO5LM45ySZCW5dxljikDCyedxXUaP358WvqzFtK/9ScehL8TV/cnRhdr2AAAAAElFTkSuQmCC"
                      />
                    </defs>
                  </svg>
                </div>
              </header>
              <div className="container">
                <h2>水をやるタイミングを設定できます</h2>
                <div className="waterContainer">
                  <label>水分量</label>
                  <RangeSlider percent={percent} onChange={onChange} />
                </div>
                <div className="buttonContainer">
                  <PrimaryButton children="設定する" position="after" onClick={onClickUpdateThreshold} />
                </div>
              </div>
            </SModal>
          </SOverlay>
        </>
      ) : (
        <></>
      )}
    </>
  );
});
