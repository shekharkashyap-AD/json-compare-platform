import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

export const exportAsJSON = (data: any, filename: string) => {
  const json = JSON.stringify(data, null, 2);
  const element = document.createElement('a');
  element.setAttribute('href', `data:application/json;charset=utf-8,${encodeURIComponent(json)}`);
  element.setAttribute('download', `${filename}.json`);
  element.click();
};

export const exportAsCSV = (data: any[], filename: string) => {
  const csv = [
    Object.keys(data[0] || {}).join(','),
    ...data.map((row) => Object.values(row).join(',')),
  ].join('\n');

  const element = document.createElement('a');
  element.setAttribute('href', `data:text/csv;charset=utf-8,${encodeURIComponent(csv)}`);
  element.setAttribute('download', `${filename}.csv`);
  element.click();
};

export const exportAsHTML = (content: string, filename: string) => {
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>${filename}</title>
        <style>
          body { font-family: monospace; margin: 20px; }
          pre { background: #f4f4f4; padding: 10px; border-radius: 4px; }
        </style>
      </head>
      <body>
        <h1>${filename}</h1>
        <pre>${content}</pre>
      </body>
    </html>
  `;

  const element = document.createElement('a');
  element.setAttribute('href', `data:text/html;charset=utf-8,${encodeURIComponent(html)}`);
  element.setAttribute('download', `${filename}.html`);
  element.click();
};

export const exportAsPDF = async (element: HTMLElement, filename: string) => {
  try {
    const canvas = await html2canvas(element);
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    const imgWidth = 210;
    const pageHeight = 295;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    let heightLeft = imgHeight;

    let position = 0;
    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    while (heightLeft >= 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }

    pdf.save(`${filename}.pdf`);
  } catch (error) {
    console.error('Failed to export as PDF:', error);
  }
};
