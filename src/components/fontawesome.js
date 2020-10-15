import { config, library } from '@fortawesome/fontawesome-svg-core';
import { 
    faStar as fasStar,
    faStarHalfAlt
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

config.autoAddCss = false;

library.add(
    fasStar,
    farStar,
    faStarHalfAlt,
);