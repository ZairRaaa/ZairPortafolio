// Prefijo propio y sin Preflight para convivir con Bootstrap Reboot.
if (window.tailwind) {
  window.tailwind.config = { prefix: "tw-", corePlugins: { preflight: false } };
}
