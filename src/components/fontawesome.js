import { config, library } from '@fortawesome/fontawesome-svg-core';
import {
    faCarSide,
    faGlassCheers,
    faHiking,
    faHotel,
    faPlane,
    faShoppingCart,
    faStar as fasStar,
    faStarHalfAlt,
    faTag,
    faTicketAlt,
    faUtensils
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

config.autoAddCss = false;

library.add(
    faCarSide,
    faGlassCheers,
    faHiking,
    faHotel,
    faPlane,
    faShoppingCart,
    fasStar,
    farStar,
    faStarHalfAlt,
    faTag,
    faTicketAlt,
    faUtensils,
);