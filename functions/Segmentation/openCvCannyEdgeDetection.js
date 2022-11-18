export function openCvCannyEdgeDetection({ src, dst, threshold1 = 50, threshold2 = 100 }) {

  cv.Canny(src, dst, threshold1, threshold2, 3, false);


  cv.imshow('canvas2', dst);
}