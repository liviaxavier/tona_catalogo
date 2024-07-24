import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export function printDocument(inputId: string, docName: string) {
    const input = document.getElementById(inputId) as HTMLElement;
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'JPEG', 0, 0, 0, 0);
        // pdf.output('dataurlnewwindow');
        pdf.save(`${docName}.pdf`);
      })
    ;
  }