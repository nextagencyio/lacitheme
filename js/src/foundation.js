/**
 * This file is part of LACI.
 *
 * LACI is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License
 * as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
 *
 * LACI is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty
 * of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License along with LACI.
 * If not, see <https://www.gnu.org/licenses/>.
 *
 * Copyright 2023-2026, Lone Star Legal Aid
 */
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
