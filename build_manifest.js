const fs = require('fs');
const path = require('path');

const papersDirectory = 'papers';
const manifestFile = 'manifest.json';

const siteData = {};

try {
    const sections = fs.readdirSync(papersDirectory, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name);

    console.log(`Found sections: ${sections.join(', ')}`);

    sections.forEach(section => {
        const sectionPath = path.join(papersDirectory, section);
        siteData[section] = [];

        const files = fs.readdirSync(sectionPath)
            .filter(file => path.extname(file).toLowerCase() === '.pdf');

        console.log(`  Section '${section}': Found PDF files: ${files.join(', ') || 'None'}`);

        files.forEach(file => {
            const filePath = path.join(sectionPath, file);
            const stats = fs.statSync(filePath);
            const fileSizeInKB = Math.round(stats.size / 1024);
            const title = path.basename(file, '.pdf').replace(/_/g, ' ');

            siteData[section].push({
                id: `${section.toLowerCase()}-${file.toLowerCase().replace('.pdf', '').replace(/[^a-z0-9]/gi, '')}`,
                name: file,
                title: title,
                path: `./${papersDirectory}/${section}/${file}`,
                size: `${fileSizeInKB}KB`
            });
        });
    });

    fs.writeFileSync(manifestFile, JSON.stringify(siteData, null, 2));
    console.log(`\nFile ${manifestFile} generated successfully!`);

} catch (error) {
    console.error(`Error generating manifest: ${error.message}`);
    if (error.code === 'ENOENT' && error.path === papersDirectory) {
        console.error(`Ensure the directory '${papersDirectory}' exists in the project root.`);
    }
    process.exit(1);
}
