import { Foundation } from "foundation-sites/js/foundation.core";
import { Drilldown } from "foundation-sites/js/foundation.drilldown";
import { DropdownMenu } from "foundation-sites/js/foundation.dropdownMenu";
import { OffCanvas } from "foundation-sites/js/foundation.offcanvas";
import { ResponsiveMenu } from "foundation-sites/js/foundation.responsiveMenu";
import { ResponsiveToggle } from "foundation-sites/js/foundation.responsiveToggle";
import { Reveal } from "foundation-sites/js/foundation.reveal";
import { Sticky } from "foundation-sites/js/foundation.sticky";

Foundation.addToJquery(jQuery);
Foundation.plugin(Drilldown, "Drilldown");
Foundation.plugin(DropdownMenu, "DropdownMenu");
Foundation.plugin(OffCanvas, "OffCanvas");
Foundation.plugin(ResponsiveMenu, "ResponsiveMenu");
Foundation.plugin(ResponsiveToggle, "ResponsiveToggle");
Foundation.plugin(Reveal, "Reveal");
Foundation.plugin(Sticky, "Sticky");
