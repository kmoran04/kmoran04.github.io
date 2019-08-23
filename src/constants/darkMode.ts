//DARK MODE
const midnight = '#011638';
const twilight = '#0F2A54';
const dusk = '#123772';
const storm = '#314A72';
const moonset = '#9C97C1';

const midnight_transparent = 'rgb(1, 22, 56, .5)';
const moonset_transparent = 'rgb(156,151,193. .5)';


export default {
    colors: {
        //Scroll Bar colors
        TRACK: midnight,
        THUMB: moonset,

        //NavBar colors
        NAV_BAR_HOVER: moonset,
        NAV_BAR_HEADER: storm,
        NAV_BAR_ACTIVE: moonset,
        NAV_BAR_SHADOW_SAFARI: storm,
        NAV_BAR_SHADOW: storm,
        NAV_BAR_BACKGROUND: midnight,

        //Contact page colors
        CONTACT_MEDIUM: moonset,
        CONTACT_MEDIUM_HOVER: storm,
        CONTACT_HEADER: moonset,
        LINKEDIN: moonset,
        EMAIL: twilight,
        EMAIL_BACKGROUND: moonset,

        //Logo colors
        LOGO_BACKGROUND_HOVER: midnight,
        LOGO_BACKGROUND: midnight,
        LOGO_TEXT: storm,
        LOGO_TEXT_HOVER: moonset,
        LOGO_EMPHASIS: moonset,
        LOGO_EMPHASIS_HOVER: storm,
        LOGO_BACKGROUND_SAFARI: midnight,


        //Page backgrounds
        TITLE_BACKGROUND: storm,
        SUBTITLE_BACKGROUND: dusk,
        ACCENT_BACKGROUND: twilight,
        PAGE_BACKGROUND: midnight,
        CONTACT_BACKGROUND: dusk,
        FOOTER_BACKGROUND: twilight,

        //Text
        HEADER_TEXT: moonset,
        TITLE_TEXT: moonset,
        FOOTER_TEXT: moonset,
        PARAGRAPH_TEXT: moonset,

        //TOGGLE
        TOGGLE: storm,
        TOGGLE_HOVER: moonset,

        //ABOUT
        RESUME_ITEM_TITLE: moonset,
        RESUME_ITEM_SUBTITLE: storm,
        SIDEBAR: dusk,
        PHOTO_SHADOW: storm,

        //PROJECTS
        PROJECT_PREVIEW_OVERLAY: midnight,
        PROJECT_PREVIEW_OVERLAY_TEXT: moonset,
        PROJECT_PREVIEW_TEXT_SHADOW: midnight,
        PROJECT_PREVIEW_BORDER: dusk,
    }
}