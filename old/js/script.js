// ---------- navbar collapse ----------
const sideNav = document.querySelectorAll('.sidenav');
M.Sidenav.init(sideNav);

// ---------- slider ----------
const sliders = document.querySelectorAll('.slider');
M.Slider.init(sliders, {
  indicators: false,
  height: 530,
  // interval: 4000
});

// ---------- navbar dropdown ----------
const dropDown = document.querySelectorAll('.drop-down');
M.Dropdown.init(dropDown, {
  hover: true,
  coverTrigger: false,
  constrainWidth: false
});

// ---------- portfolio ----------
const materialBox = document.querySelectorAll('.materialboxed');
M.Materialbox.init(materialBox);

// ---------- portfolio ----------
const parallax = document.querySelectorAll('.parallax');
M.Parallax.init(parallax);

// ---------- scroll ----------
const scroll = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(scroll, {
  scrollOffset: 48
});

// ---------- tooltip ----------
const tooltip = document.querySelectorAll('.tooltipped');
M.Tooltip.init(tooltip);

// ---------- collapsible ----------
const collapsible = document.querySelectorAll('.collapsible');
M.Collapsible.init(collapsible);
