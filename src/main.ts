function createAndGate(context: CanvasRenderingContext2D) {
  const size = 80;

  context.beginPath();
  context.translate(70, (300 - size * 2) / 2);

  context.moveTo(0, size / 2);
  context.lineTo(-40, size / 2);
  context.moveTo(0, size / 2 * 3);
  context.lineTo(-40, size / 2 * 3);
  context.moveTo(size * 2, size);
  context.lineTo(size * 2 + 40, size);

  context.moveTo(0, 0);
  context.lineTo(size, 0);
  context.arc(size, size, size, -Math.PI / 2, Math.PI / 2, false);
  context.lineTo(0, size * 2);
  context.lineTo(0, 0);
  context.closePath();

  context.lineWidth = 2
  context.strokeStyle = '#333';
  context.font = "48px serif";
  context.fillText(`AND`, size - 48, size + 20  );

  context.stroke();
}
function createNandGate(context: CanvasRenderingContext2D) {
  const size = 80;

  context.beginPath();
  context.translate(70, (300 - size * 2) / 2);

  context.moveTo(0, size / 2);
  context.lineTo(-40, size / 2);
  context.moveTo(0, size / 2 * 3);
  context.lineTo(-40, size / 2 * 3);
  context.moveTo(size * 2 +  size / 5 * 2, size);
  context.lineTo(size * 2 +  size / 5 * 2 + 10, size);

  context.moveTo(0, 0);
  context.lineTo(size, 0);
  context.arc(size, size, size, -Math.PI / 2, Math.PI / 2, false);
  context.moveTo(size * 2 + size / 5 * 2, size);
  context.arc(size * 2 + size / 5, size, size / 5, 0, Math.PI * 2, false);
  context.moveTo(size, size * 2);
  context.lineTo(0, size * 2);
  context.lineTo(0, 0);

  context.lineWidth = 2
  context.strokeStyle = '#333';
  context.font = "48px serif";
  context.fillText(`NAND`, 10, size + 20);

  context.stroke();
}
function createOrGate(context: CanvasRenderingContext2D) {
  const size = 80;

  context.beginPath();
  context.translate(70, (300 - size * 2) / 2);

  context.moveTo(0, size / 2);
  context.lineTo(-40, size / 2);
  context.moveTo(0, size / 2 * 3);
  context.lineTo(-40, size / 2 * 3);
  context.moveTo(size * 2, size);
  context.lineTo(size * 2 + 40, size);

  context.moveTo(0, 0);
  context.lineTo(size, 0);
  context.arc(size, size, size, -Math.PI / 2, Math.PI / 2, false);

  // context.arc(0, 2 * size, size * 2,- Math.PI / 6, 0, false);

  context.lineTo(0, size * 2);
  // context.lineTo(0, 0);
  context.arc(size * -2 + size / 10, size, size * 2, Math.PI / 6, -Math.PI / 6, true);
  context.closePath();
  context.lineWidth = 2
  context.strokeStyle = '#333';
  context.font = "48px serif";
  context.fillText(`OR`, 40, size + 20);

  context.stroke();
}
function createNorGate(context: CanvasRenderingContext2D) {
  const size = 80;

  context.beginPath();
  context.translate(70, (300 - size * 2) / 2);

  context.moveTo(0, size / 2);
  context.lineTo(-40, size / 2);
  context.moveTo(0, size / 2 * 3);
  context.lineTo(-40, size / 2 * 3);
  context.moveTo(size * 2 +  size / 5 * 2, size);
  context.lineTo(size * 2 +  size / 5 * 2 + 10, size);

  context.moveTo(0, 0);
  context.lineTo(size, 0);
  context.arc(size, size, size, -Math.PI / 2, Math.PI / 2, false);
  context.moveTo(size * 2 + size / 5 * 2, size);
  context.arc(size * 2 + size / 5, size, size / 5, 0, Math.PI * 2, false);
  context.moveTo(size, size * 2);
  context.lineTo(0, size * 2);
  context.arc(size * -2 + size / 10, size, size * 2, Math.PI / 6, -Math.PI / 6, true);
  context.lineTo(0, 0);

  context.lineWidth = 2
  context.strokeStyle = '#333';
  context.font = "48px serif";
  context.fillText(`NOR`, 20, size + 20);

  context.stroke();
}
function createXorGate(context: CanvasRenderingContext2D) {
  const size = 80;

  context.beginPath();
  context.translate(70, (300 - size * 2) / 2);

  context.moveTo(0, size / 2);
  context.lineTo(-40, size / 2);
  context.moveTo(0, size / 2 * 3);
  context.lineTo(-40, size / 2 * 3);
  context.moveTo(size * 2, size);
  context.lineTo(size * 2 + 40, size);

  context.moveTo(0, 0);
  context.lineTo(size, 0);
  context.arc(size, size, size, -Math.PI / 2, Math.PI / 2, false);
  context.lineTo(0, size * 2);
  // context.lineTo(0, 0);
  context.arc(size * -2 + size / 10, size, size * 2, Math.PI / 6, -Math.PI / 6, true);
  context.closePath();

  context.lineWidth = 2
  context.strokeStyle = '#333';
  context.font = "48px serif";
  context.fillText(`XOR`, 20, size + 20);

  context.stroke();

  context.beginPath();
  context.arc(size * -2 - size / 5, size, size * 2, Math.PI / 6, -Math.PI / 6, true);
  context.stroke();
}
function switcher(context: CanvasRenderingContext2D) {
  const size = 80;
  context.beginPath();
  context.translate(70, (300 - size * 2) / 2);

  context.moveTo(0, 0);
  context.lineTo(size * 2, 0);
  context.lineTo(size * 2, size * 2);
  context.lineTo(0, size * 2);
  context.closePath();

  context.lineWidth = 2
  context.strokeStyle = '#333';
  context.font = "48px serif";
  context.fillText(`0/1`, 50, size + 20);

  context.stroke();
}
function dot(context: CanvasRenderingContext2D) {
  const size = 12;
  context.beginPath();
  context.translate(150, 150);

  context.moveTo(0, 0);
  context.arc(0, 0, size, 0, Math.PI * 2);
  // context.closePath();

  context.lineWidth = 2
  context.fillStyle = '#333';
  context.fill();
  // context.font = "48px serif";
  // context.fillText(`0/1`, 50, size + 20);

  // context.stroke();
}
function inverter(context: CanvasRenderingContext2D) {
  const size = 80;

  context.beginPath();
  context.translate(70, (300 - size * 2) / 2);

  context.moveTo(0, size);
  context.lineTo(-40, size);
  context.moveTo(size * 2 +  size / 5 * 2, size);
  context.lineTo(size * 2 +  size / 5 * 2 + 10, size);

  context.moveTo(0, size);
  context.lineTo(0, 0);
  context.lineTo(2 * size, size);
  context.arc(11/5 * size, size, 1/5 * size, -Math.PI, Math.PI);
  context.lineTo(0, 2 * size);
  context.closePath();

  context.lineWidth = 2
  context.strokeStyle = '#333';
  context.font = "48px serif";
  // context.fillText(`0/1`, 50, size + 20);

  context.stroke();
}
function light(context: CanvasRenderingContext2D) {
  const size = 80;

  context.beginPath();
  context.translate(70, (300 - size * 2) / 2);

  context.moveTo(0, size);
  context.lineTo(-40, size);
  context.moveTo(size * 2, size)
  context.arc(size, size, size, 0, Math.PI * 2);

  context.lineWidth = 2
  context.strokeStyle = '#333';
  context.font = "48px serif";
  context.fillText(`0/1`, 50, size + 20);

  context.stroke();
}
function onOff(context: CanvasRenderingContext2D) {
  const size = 80;

  context.beginPath();
  context.translate(70, (300 - size * 2) / 2);

  context.moveTo(-10, size);
  context.lineTo(-40, size);

  context.moveTo(size * 2 + 20, size);
  context.lineTo(size * 2 + 40, size);

  context.moveTo(10, size);
  context.arc(0, size, 10, 0, Math.PI * 2); 
  
  context.moveTo(size * 2 + 20, size);
  context.arc(size * 2, size, 10, 0, Math.PI * 2);
  
  context.moveTo(17.3 / 2, (size - 10 / 2));
  context.lineTo(size * 1.73, 0);
  context.lineWidth = 2
  context.strokeStyle = '#333';
  context.font = "48px serif";

  context.stroke();
}

function main () {
  const width = document.getElementById('width') as HTMLInputElement;
  const height = document.getElementById('height') as HTMLInputElement;
  const reset = document.getElementById('reset') as HTMLInputElement;
  const exportBtn = document.getElementById('export') as HTMLInputElement;
  const canvas = document.getElementById('flash') as HTMLCanvasElement;
  const context  = canvas.getContext('2d') as CanvasRenderingContext2D;
  function draw() {
    const widthVal = width.value;
    const heightVal = height.value;
    console.log(widthVal, heightVal)
    canvas.setAttribute('width', widthVal);
    canvas.setAttribute('height', heightVal);
    // context.fillStyle = '#000000';
    // context.fillRect(0, 0, Number(widthVal), Number(heightVal));
    // context.fillStyle = '#FFFFFF';
    // context.font = "48px serif";
    // context.fillText(`${widthVal}x${heightVal}`, 10, 50);
    // createAndGate(context);
    // createNandGate(context);
    createOrGate(context);
    // createNorGate(context);
    // createXorGate(context);
    // switcher(context);
    // dot(context);
    // inverter(context);
    // light(context);
    // onOff(context);
  }
  draw()
  reset.addEventListener('click', () => {
    draw();
  })
  exportBtn.addEventListener('click', () => {
    const widthVal = width.value;
    const heightVal = height.value;
    canvas.toBlob((export_blob) => {
      const urlObject = URL;
      const save_link = document.createElement('a');
      save_link.target = '_blank';
      if (export_blob) {
        save_link.href = urlObject.createObjectURL(export_blob);
        save_link.download = `${widthVal}x${heightVal}.png`;
        save_link.click();
      }
    });
  });
}

window.onload = () => {
  main();
}

export default main;