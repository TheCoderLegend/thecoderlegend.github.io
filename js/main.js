import { renderNavbar } from './components/navbar.js';
import { renderHero } from './sections/heroSection.js';
import { renderSkills } from './sections/skillsSection.js';
import { renderProjects } from './sections/projectsSection.js';
import { renderSpringBoot } from './sections/springBootSection.js';
import { renderExperience } from './sections/experienceSection.js';
import { renderCertifications } from './sections/certificationsSection.js';
import { renderContact } from './sections/contactSection.js';

document.getElementById("navbar").innerHTML = renderNavbar();

document.getElementById("app").innerHTML = `
  ${renderHero()}
  ${renderSkills()}
  ${renderProjects()}
  ${renderSpringBoot()}
  ${renderExperience()}
  ${renderCertifications()}
  ${renderContact()}
`;