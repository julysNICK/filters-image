export function watershedWithOpenCV({ src, dst, threshold = 127 }) {
  cv.cvtColor(src, dst, cv.COLOR_BGR2GRAY);
  cv.threshold(dst, dst, threshold, 255, cv.THRESH_BINARY);
  cv.imshow('canvas2', dst);
}