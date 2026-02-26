import { lazy, type ComponentType } from "react"

export interface ComponentEntry {
  id: string
  name: string
  description: string
  category: Category
  component: React.LazyExoticComponent<ComponentType>
}

export type Category =
  | "Layout"
  | "Navigation"
  | "Forms"
  | "Data Display"
  | "Overlays"
  | "Feedback"

export const categories: Category[] = [
  "Layout",
  "Navigation",
  "Forms",
  "Data Display",
  "Overlays",
  "Feedback",
]

export const registry: ComponentEntry[] = [
  // Layout
  {
    id: "aspect-ratio",
    name: "Aspect Ratio",
    description: "Displays content within a desired ratio.",
    category: "Layout",
    component: lazy(() => import("@/components/demos/aspect-ratio-demo")),
  },
  {
    id: "card",
    name: "Card",
    description: "Displays a card with header, content, and footer.",
    category: "Layout",
    component: lazy(() => import("@/components/demos/card-demo")),
  },
  {
    id: "resizable",
    name: "Resizable",
    description: "Accessible resizable panel groups and layouts.",
    category: "Layout",
    component: lazy(() => import("@/components/demos/resizable-demo")),
  },
  {
    id: "scroll-area",
    name: "Scroll Area",
    description: "Augments native scroll with custom styling.",
    category: "Layout",
    component: lazy(() => import("@/components/demos/scroll-area-demo")),
  },
  {
    id: "separator",
    name: "Separator",
    description: "Visually separates content.",
    category: "Layout",
    component: lazy(() => import("@/components/demos/separator-demo")),
  },

  // Navigation
  {
    id: "breadcrumb",
    name: "Breadcrumb",
    description: "Displays the path to the current page.",
    category: "Navigation",
    component: lazy(() => import("@/components/demos/breadcrumb-demo")),
  },
  {
    id: "menubar",
    name: "Menubar",
    description: "A visually persistent menu common in desktop apps.",
    category: "Navigation",
    component: lazy(() => import("@/components/demos/menubar-demo")),
  },
  {
    id: "navigation-menu",
    name: "Navigation Menu",
    description: "A collection of links for navigating websites.",
    category: "Navigation",
    component: lazy(() => import("@/components/demos/navigation-menu-demo")),
  },
  {
    id: "pagination",
    name: "Pagination",
    description: "Navigation for paged content.",
    category: "Navigation",
    component: lazy(() => import("@/components/demos/pagination-demo")),
  },
  {
    id: "tabs",
    name: "Tabs",
    description: "A set of layered sections of content.",
    category: "Navigation",
    component: lazy(() => import("@/components/demos/tabs-demo")),
  },

  // Forms
  {
    id: "button",
    name: "Button",
    description: "Displays a button or a component that looks like a button.",
    category: "Forms",
    component: lazy(() => import("@/components/demos/button-demo")),
  },
  {
    id: "button-group",
    name: "Button Group",
    description: "Groups related buttons together.",
    category: "Forms",
    component: lazy(() => import("@/components/demos/button-group-demo")),
  },
  {
    id: "calendar",
    name: "Calendar",
    description: "A date field component for picking dates.",
    category: "Forms",
    component: lazy(() => import("@/components/demos/calendar-demo")),
  },
  {
    id: "checkbox",
    name: "Checkbox",
    description: "A control that allows toggling between checked and not checked.",
    category: "Forms",
    component: lazy(() => import("@/components/demos/checkbox-demo")),
  },
  {
    id: "combobox",
    name: "Combobox",
    description: "Autocomplete input with a filterable list.",
    category: "Forms",
    component: lazy(() => import("@/components/demos/combobox-demo")),
  },
  {
    id: "command",
    name: "Command",
    description: "A command menu for searching and selecting.",
    category: "Forms",
    component: lazy(() => import("@/components/demos/command-demo")),
  },
  {
    id: "field",
    name: "Field",
    description: "A form field with label, input, and description.",
    category: "Forms",
    component: lazy(() => import("@/components/demos/field-demo")),
  },
  {
    id: "input",
    name: "Input",
    description: "Displays a form input field.",
    category: "Forms",
    component: lazy(() => import("@/components/demos/input-demo")),
  },
  {
    id: "input-group",
    name: "Input Group",
    description: "Combines inputs with addons and buttons.",
    category: "Forms",
    component: lazy(() => import("@/components/demos/input-group-demo")),
  },
  {
    id: "input-otp",
    name: "Input OTP",
    description: "A one-time password input component.",
    category: "Forms",
    component: lazy(() => import("@/components/demos/input-otp-demo")),
  },
  {
    id: "label",
    name: "Label",
    description: "Renders an accessible label for form controls.",
    category: "Forms",
    component: lazy(() => import("@/components/demos/label-demo")),
  },
  {
    id: "native-select",
    name: "Native Select",
    description: "A native HTML select element with styling.",
    category: "Forms",
    component: lazy(() => import("@/components/demos/native-select-demo")),
  },
  {
    id: "radio-group",
    name: "Radio Group",
    description: "A set of checkable buttons where only one can be checked.",
    category: "Forms",
    component: lazy(() => import("@/components/demos/radio-group-demo")),
  },
  {
    id: "select",
    name: "Select",
    description: "Displays a list of options for the user to pick from.",
    category: "Forms",
    component: lazy(() => import("@/components/demos/select-demo")),
  },
  {
    id: "slider",
    name: "Slider",
    description: "An input where the user selects a value from a range.",
    category: "Forms",
    component: lazy(() => import("@/components/demos/slider-demo")),
  },
  {
    id: "switch",
    name: "Switch",
    description: "A control that allows toggling between on and off.",
    category: "Forms",
    component: lazy(() => import("@/components/demos/switch-demo")),
  },
  {
    id: "textarea",
    name: "Textarea",
    description: "Displays a form textarea.",
    category: "Forms",
    component: lazy(() => import("@/components/demos/textarea-demo")),
  },
  {
    id: "toggle",
    name: "Toggle",
    description: "A two-state button that can be on or off.",
    category: "Forms",
    component: lazy(() => import("@/components/demos/toggle-demo")),
  },
  {
    id: "toggle-group",
    name: "Toggle Group",
    description: "A group of toggle buttons.",
    category: "Forms",
    component: lazy(() => import("@/components/demos/toggle-group-demo")),
  },

  // Data Display
  {
    id: "accordion",
    name: "Accordion",
    description: "A vertically stacked set of expandable items.",
    category: "Data Display",
    component: lazy(() => import("@/components/demos/accordion-demo")),
  },
  {
    id: "alert",
    name: "Alert",
    description: "Displays a callout for important messages.",
    category: "Data Display",
    component: lazy(() => import("@/components/demos/alert-demo")),
  },
  {
    id: "avatar",
    name: "Avatar",
    description: "An image element with a fallback for representing the user.",
    category: "Data Display",
    component: lazy(() => import("@/components/demos/avatar-demo")),
  },
  {
    id: "badge",
    name: "Badge",
    description: "Displays a badge or a component that looks like a badge.",
    category: "Data Display",
    component: lazy(() => import("@/components/demos/badge-demo")),
  },
  {
    id: "carousel",
    name: "Carousel",
    description: "A carousel with motion and swipe gestures.",
    category: "Data Display",
    component: lazy(() => import("@/components/demos/carousel-demo")),
  },
  {
    id: "chart",
    name: "Chart",
    description: "Beautiful charts built with Recharts.",
    category: "Data Display",
    component: lazy(() => import("@/components/demos/chart-demo")),
  },
  {
    id: "collapsible",
    name: "Collapsible",
    description: "An interactive component which expands/collapses a panel.",
    category: "Data Display",
    component: lazy(() => import("@/components/demos/collapsible-demo")),
  },
  {
    id: "empty",
    name: "Empty",
    description: "Displays an empty state placeholder.",
    category: "Data Display",
    component: lazy(() => import("@/components/demos/empty-demo")),
  },
  {
    id: "item",
    name: "Item",
    description: "A flexible list item component.",
    category: "Data Display",
    component: lazy(() => import("@/components/demos/item-demo")),
  },
  {
    id: "kbd",
    name: "Kbd",
    description: "Displays keyboard shortcut indicators.",
    category: "Data Display",
    component: lazy(() => import("@/components/demos/kbd-demo")),
  },
  {
    id: "progress",
    name: "Progress",
    description: "Displays an indicator showing completion progress.",
    category: "Data Display",
    component: lazy(() => import("@/components/demos/progress-demo")),
  },
  {
    id: "skeleton",
    name: "Skeleton",
    description: "Used to show a placeholder while content is loading.",
    category: "Data Display",
    component: lazy(() => import("@/components/demos/skeleton-demo")),
  },
  {
    id: "spinner",
    name: "Spinner",
    description: "A loading spinner indicator.",
    category: "Data Display",
    component: lazy(() => import("@/components/demos/spinner-demo")),
  },
  {
    id: "table",
    name: "Table",
    description: "A responsive table component.",
    category: "Data Display",
    component: lazy(() => import("@/components/demos/table-demo")),
  },
  {
    id: "tooltip",
    name: "Tooltip",
    description: "A popup that displays information on hover.",
    category: "Data Display",
    component: lazy(() => import("@/components/demos/tooltip-demo")),
  },

  // Overlays
  {
    id: "alert-dialog",
    name: "Alert Dialog",
    description: "A modal dialog that interrupts with important content.",
    category: "Overlays",
    component: lazy(() => import("@/components/demos/alert-dialog-demo")),
  },
  {
    id: "context-menu",
    name: "Context Menu",
    description: "Displays a menu on right-click.",
    category: "Overlays",
    component: lazy(() => import("@/components/demos/context-menu-demo")),
  },
  {
    id: "dialog",
    name: "Dialog",
    description: "A window overlaid on the primary window.",
    category: "Overlays",
    component: lazy(() => import("@/components/demos/dialog-demo")),
  },
  {
    id: "drawer",
    name: "Drawer",
    description: "A panel that slides in from the edge of the screen.",
    category: "Overlays",
    component: lazy(() => import("@/components/demos/drawer-demo")),
  },
  {
    id: "dropdown-menu",
    name: "Dropdown Menu",
    description: "Displays a menu triggered by a button.",
    category: "Overlays",
    component: lazy(() => import("@/components/demos/dropdown-menu-demo")),
  },
  {
    id: "hover-card",
    name: "Hover Card",
    description: "For sighted users to preview content behind a link.",
    category: "Overlays",
    component: lazy(() => import("@/components/demos/hover-card-demo")),
  },
  {
    id: "popover",
    name: "Popover",
    description: "Displays rich content in a portal on trigger.",
    category: "Overlays",
    component: lazy(() => import("@/components/demos/popover-demo")),
  },
  {
    id: "sheet",
    name: "Sheet",
    description: "Extends the Dialog component to display a side panel.",
    category: "Overlays",
    component: lazy(() => import("@/components/demos/sheet-demo")),
  },

  // Feedback
  {
    id: "sonner",
    name: "Sonner",
    description: "An opinionated toast component.",
    category: "Feedback",
    component: lazy(() => import("@/components/demos/sonner-demo")),
  },
]

export function getComponentsByCategory(category: Category): ComponentEntry[] {
  return registry.filter((c) => c.category === category)
}
