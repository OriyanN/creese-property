import fs from 'fs/promises';
import path from 'path';
import url from 'url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

// Define the root assets directory
const assetsDirRoot = path.join(__dirname, 'src', 'assets');

async function generateIndexForDir(directory) {
  try {
    const items = await fs.readdir(directory, { withFileTypes: true });

    const files = items.filter(item => !item.isDirectory()).map(item => item.name);
    const directories = items.filter(item => item.isDirectory()).map(item => item.name);

    // Generate import/export lines for files in the current directory
    const importExportLines = files
      .filter(file => /\.(jpg|jpeg|png|gif|svg)$/.test(file))
      .map((file, index) => {
        const variableName = `image${index}_${file.replace(/[\s-.]/g, '_').replace(/\..+$/, '')}`;
        const importLine = `import ${variableName} from './${file}';`;
        return { importLine, variableName };
      });

    // Only write an index.js file if there are image files in the directory
    if (importExportLines.length > 0) {
      const imports = importExportLines.map(item => item.importLine).join('\n');
      const exports = `export {\n  ${importExportLines.map(item => item.variableName).join(',\n  ')}\n};`;

      const outputFile = path.join(directory, 'index.js');
      await fs.writeFile(outputFile, `${imports}\n\n${exports}\n`, 'utf8');
      console.log(`Assets index.js file generated successfully in ${directory}.`);
    }

    // Recursively generate index.js for subdirectories
    for (const dir of directories) {
      const subDirPath = path.join(directory, dir);
      await generateIndexForDir(subDirPath);
    }
  } catch (err) {
    console.error('Error generating assets index file:', err);
  }
}

// Kick off the process with the root assets directory
generateIndexForDir(assetsDirRoot);
