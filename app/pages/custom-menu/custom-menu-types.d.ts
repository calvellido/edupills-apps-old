import { Animation } from '../../animations/animation';
/**
 * @private
 * Menu Type
 * Base class which is extended by the various types. Each
 * type will provide their own animations for open and close
 * and registers itself with Menu.
 */
export declare class MenuType {
    ani: Animation;
    isOpening: boolean;
    setOpen(shouldOpen: boolean, animated: boolean, done: Function): void;
    setProgressStart(isOpen: boolean): void;
    setProgessStep(stepValue: number): void;
    setProgressEnd(shouldComplete: boolean, currentStepValue: number, done: Function): void;
    destroy(): void;
}
