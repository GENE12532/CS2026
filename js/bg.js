var bg = jQuery(".site-background");
jQuery(window).resize(resizeBackground);
function resizeBackground() {
  if(navigator.userAgent.match(/(Android|iPod|iPhone|iPad|BlackBerry)/)) {
    bg.height(screen.height);
  }
}
resizeBackground();