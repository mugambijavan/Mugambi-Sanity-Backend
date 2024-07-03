import { concat } from 'lodash'; // Import lodash.concat for efficient array concatenation

import works from './works';
import testimonials from './testimonials';
import brands from './brands';
import abouts from './abouts';
import experiences from './experiences';
import skills from './skills';
import workExperience from './workExperience';
import contact from './contact';

export const schemaTypes = concat(works, testimonials, brands, abouts, experiences, skills, workExperience, contact);

// Alternative (using spread operator for modern syntax):
// export const schemaTypes = [...works, ...testimonials, ...brands, ...abouts, ...experiences, ...skills, ...workExperience, ...contact];
