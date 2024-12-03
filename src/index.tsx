/* eslint-disable no-undef */
import { Frame, VisionCameraProxy } from 'react-native-vision-camera';

const plugin = VisionCameraProxy.initFrameProcessorPlugin('scanOCR')

type BoundingFrame = {
  x: number;
  y: number;
  top: number;
  left: number;
  width: number;
  height: number;
  boundingCenterX: number;
  boundingCenterY: number;
};
type Point = { x: number; y: number };

type TextElement = {
  text: string;
  frame: BoundingFrame;
  cornerPoints: Point[];
};

type TextLine = {
  text: string;
  elements: TextElement[];
  frame: BoundingFrame;
  recognizedLanguages: string[];
  cornerPoints: Point[];
};

type TextBlock = {
  text: string;
  lines: TextLine[];
  frame: BoundingFrame;
  recognizedLanguages: string[];
  cornerPoints: Point[];
};

type Text = {
  text: string;
  blocks: TextBlock[];
};

export type OCRFrame = {
  result: Text;
};

/**
 * Scans OCR.
 */

export function scanOCR(frame: Frame) {
  'worklet';
  if (!plugin) {throw new Error('Failed to load Frame Processor Plugin "scanFaces"!')}
  return plugin.call(frame) 
}
