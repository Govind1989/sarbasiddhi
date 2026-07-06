const fs = require('fs');
try {
  const pdfParse = require('pdf-parse');
  const buffer = fs.readFileSync('E:\\Nextjs\\SarvasiddhiWebsite\\website\\Design Sarvasiddhi Consultants Company Profile.pdf');
  pdfParse(buffer).then(data => {
    fs.writeFileSync('E:\\Nextjs\\SarvasiddhiWebsite\\website\\pdf_text.txt', data.text);
    console.log('DONE - text length:', data.text.length);
  }).catch(e => console.error(e));
} catch(e) {
  console.error('Error:', e.message);
}
