export function thresholdAverageWithOpenCv({ src, dst, threshold = 127 }) {
  cv.threshold(src, dst, threshold, 255, cv.THRESH_BINARY);
  cv.imshow('canvas2', dst);
}