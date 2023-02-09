var canvas = document.querySelectorAll('.w-full.pointer-events-none.w-full')[0];
var anchor = document.createElement("a");
anchor.href = canvas.toDataURL("image/png");
anchor.download = "IMAGE.PNG";
anchor.click();
