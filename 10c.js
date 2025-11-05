const fs = require('fs');

const content = 'HTML,CSS,JAVASCRIPT,TYPESCRIPT,MONGODB,EXPRESS.JS,REACT.JS,NODE.JS';

fs.writeFile('src.txt', content, (err) => {
  if (err) {
    console.error('Error writing to file:', err);
  } else {
    console.log('src.txt created and content added successfully!');
}
});