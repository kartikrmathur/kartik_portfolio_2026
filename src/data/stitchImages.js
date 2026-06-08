/**
 * Design placeholder images from Stitch Obsidian Digital (dual_theme).
 * Served from public/images/design/ — no external CDN at runtime.
 */

const publicUrl = process.env.PUBLIC_URL || '';

const local = (filename) => `${publicUrl}/images/design/${filename}`;

export const stitchImages = {
  portrait: local('portrait.png'),

  projects: [
    local('project-1.jpg'),
    local('project-2.jpg'),
    local('project-3.jpg'),
  ],
};

export const getProjectImage = (index) =>
  stitchImages.projects[index % stitchImages.projects.length];

export default stitchImages;
