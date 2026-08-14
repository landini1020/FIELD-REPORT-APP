/* @ds-bundle: {"format":4,"namespace":"ChamplinStudiosDesignSystem_a8f946","components":[{"name":"Badge","sourcePath":"components/data-display/Badge.jsx"},{"name":"Card","sourcePath":"components/data-display/Card.jsx"},{"name":"Tag","sourcePath":"components/data-display/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"IconButton","sourcePath":"components/forms/IconButton.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/data-display/Badge.jsx":"7ea9b63ac829","components/data-display/Card.jsx":"91f650506f2c","components/data-display/Tag.jsx":"94313a3736b8","components/feedback/Dialog.jsx":"4394ee34ace1","components/feedback/Toast.jsx":"6a52dd0ebca2","components/feedback/Tooltip.jsx":"8805d49956ea","components/forms/Button.jsx":"d2aa98b9197f","components/forms/Checkbox.jsx":"c2c03bc89472","components/forms/IconButton.jsx":"9190c113bacd","components/forms/Input.jsx":"4f7ab1d86f46","components/forms/Radio.jsx":"2b92db99a149","components/forms/Select.jsx":"49dd04255f09","components/forms/Switch.jsx":"ae01c3ecb49b","components/navigation/Tabs.jsx":"9c0179b12a5a"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ChamplinStudiosDesignSystem_a8f946 = window.ChamplinStudiosDesignSystem_a8f946 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/data-display/Badge.jsx
try { (() => {
function Badge({
  children,
  tone = "neutral"
}) {
  const tones = {
    neutral: {
      background: "var(--gray-100)",
      color: "var(--gray-700)"
    },
    brand: {
      background: "var(--blue-50)",
      color: "var(--blue-600)"
    },
    success: {
      background: "oklch(94% .05 152)",
      color: "var(--success)"
    },
    warning: {
      background: "oklch(94% .06 75)",
      color: "oklch(45% .13 75)"
    },
    danger: {
      background: "oklch(94% .05 25)",
      color: "var(--danger)"
    }
  };
  const style = {
    display: "inline-flex",
    alignItems: "center",
    padding: "3px 10px",
    borderRadius: "var(--radius-full)",
    fontFamily: "var(--font-label)",
    fontSize: "var(--label-sm)",
    fontWeight: 600,
    letterSpacing: "var(--tracking-normal)",
    ...tones[tone]
  };
  return React.createElement("span", {
    style
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Card.jsx
try { (() => {
function Card({
  image,
  eyebrow,
  title,
  description,
  footer,
  onClick,
  padding = "md"
}) {
  const [hover, setHover] = React.useState(false);
  const pad = {
    sm: 16,
    md: 24,
    lg: 32
  };
  const style = {
    background: "var(--surface-card)",
    border: "1px solid var(--surface-card-border)",
    borderRadius: "var(--radius-md)",
    overflow: "hidden",
    cursor: onClick ? "pointer" : "default",
    transition: "box-shadow var(--duration-med) var(--ease-standard),transform var(--duration-med) var(--ease-standard)",
    boxShadow: hover && onClick ? "var(--shadow-md)" : "var(--shadow-sm)",
    transform: hover && onClick ? "translateY(-2px)" : "none"
  };
  return React.createElement("div", {
    style,
    onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, image ? React.createElement("div", {
    style: {
      width: "100%",
      aspectRatio: "16/10",
      background: "var(--gray-100)"
    }
  }, image) : null, React.createElement("div", {
    style: {
      padding: pad[padding],
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, eyebrow ? React.createElement("span", {
    style: {
      fontFamily: "var(--font-eyebrow)",
      fontSize: "var(--eyebrow-md)",
      letterSpacing: "var(--tracking-wider)",
      textTransform: "uppercase",
      color: "var(--color-brand)",
      fontWeight: 600
    }
  }, eyebrow) : null, title ? React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--heading-md)",
      fontWeight: 700,
      margin: 0,
      color: "var(--text-primary)",
      lineHeight: "var(--lh-heading)"
    }
  }, title) : null, description ? React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--body-sm)",
      color: "var(--text-secondary)",
      margin: 0,
      lineHeight: "var(--lh-body)"
    }
  }, description) : null, footer ? React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, footer) : null));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Card.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Tag.jsx
try { (() => {
function Tag({
  children,
  onRemove,
  selected = false,
  onClick
}) {
  const style = {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    padding: "6px 12px",
    borderRadius: "var(--radius-full)",
    border: `1px solid ${selected ? "var(--color-brand)" : "var(--border-default)"}`,
    background: selected ? "var(--blue-50)" : "var(--white)",
    color: selected ? "var(--blue-600)" : "var(--text-primary)",
    fontFamily: "var(--font-label)",
    fontSize: "var(--label-md)",
    fontWeight: 500,
    cursor: onClick ? "pointer" : "default",
    transition: "all var(--duration-fast) var(--ease-standard)"
  };
  return React.createElement("span", {
    style,
    onClick
  }, children, onRemove ? React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      onRemove();
    },
    style: {
      border: "none",
      background: "none",
      cursor: "pointer",
      padding: 0,
      display: "flex",
      color: "inherit"
    }
  }, React.createElement("svg", {
    width: 10,
    height: 10,
    viewBox: "0 0 10 10"
  }, React.createElement("path", {
    d: "M1 1l8 8M9 1L1 9",
    stroke: "currentColor",
    strokeWidth: 1.4
  }))) : null);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog({
  open,
  title,
  children,
  onClose,
  actions
}) {
  if (!open) return null;
  return React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "oklch(15% 0 0 / .45)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 100
    },
    onClick: onClose
  }, React.createElement("div", {
    style: {
      background: "var(--white)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-lg)",
      width: 400,
      maxWidth: "90%",
      padding: "var(--space-8)"
    },
    onClick: e => e.stopPropagation()
  }, React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--heading-lg)",
      fontWeight: 700,
      margin: "0 0 12px",
      color: "var(--text-primary)"
    }
  }, title), React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--body-md)",
      color: "var(--text-secondary)",
      lineHeight: "var(--lh-body)",
      marginBottom: 24
    }
  }, children), actions ? React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      justifyContent: "flex-end"
    }
  }, actions) : null));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function Toast({
  tone = "neutral",
  children,
  onDismiss
}) {
  const tones = {
    neutral: {
      border: "var(--border-default)",
      dot: "var(--gray-500)"
    },
    success: {
      border: "var(--success)",
      dot: "var(--success)"
    },
    danger: {
      border: "var(--danger)",
      dot: "var(--danger)"
    }
  };
  const t = tones[tone];
  return React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      background: "var(--white)",
      border: `1px solid var(--border-subtle)`,
      borderLeft: `3px solid ${t.border}`,
      borderRadius: "var(--radius-md)",
      boxShadow: "var(--shadow-md)",
      padding: "14px 16px",
      fontFamily: "var(--font-body)",
      fontSize: "var(--body-sm)",
      color: "var(--text-primary)",
      minWidth: 260
    }
  }, React.createElement("span", {
    style: {
      flex: 1
    }
  }, children), onDismiss ? React.createElement("button", {
    onClick: onDismiss,
    style: {
      border: "none",
      background: "none",
      cursor: "pointer",
      color: "var(--text-tertiary)",
      fontSize: 16,
      lineHeight: 1
    }
  }, "×") : null);
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function Tooltip({
  label,
  children,
  side = "top"
}) {
  const [show, setShow] = React.useState(false);
  const pos = {
    top: {
      bottom: "calc(100% + 8px)",
      left: "50%",
      transform: "translateX(-50%)"
    },
    bottom: {
      top: "calc(100% + 8px)",
      left: "50%",
      transform: "translateX(-50%)"
    }
  }[side] || {};
  return React.createElement("span", {
    style: {
      position: "relative",
      display: "inline-flex"
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false)
  }, children, show ? React.createElement("span", {
    style: {
      position: "absolute",
      ...pos,
      background: "var(--ink-black)",
      color: "var(--white)",
      fontFamily: "var(--font-body)",
      fontSize: "var(--label-sm)",
      padding: "6px 10px",
      borderRadius: "var(--radius-sm)",
      whiteSpace: "nowrap",
      zIndex: 50,
      pointerEvents: "none"
    }
  }, label) : null);
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function Button({
  variant = "primary",
  size = "md",
  children,
  icon,
  iconPosition = "left",
  disabled = false,
  onClick,
  type = "button"
}) {
  const sizes = {
    sm: {
      padding: "8px 14px",
      fontSize: 14,
      gap: 6
    },
    md: {
      padding: "11px 20px",
      fontSize: 15,
      gap: 8
    },
    lg: {
      padding: "14px 26px",
      fontSize: 16,
      gap: 10
    }
  };
  const base = {
    fontFamily: "var(--font-body)",
    fontWeight: 600,
    borderRadius: "var(--radius-sm)",
    border: "1px solid transparent",
    cursor: disabled ? "not-allowed" : "pointer",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    whiteSpace: "nowrap",
    transition: "background var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard),border-color var(--duration-fast) var(--ease-standard)",
    opacity: disabled ? 0.45 : 1,
    ...sizes[size]
  };
  const variants = {
    primary: {
      background: "var(--ink-black)",
      color: "var(--white)",
      borderColor: "var(--ink-black)"
    },
    brand: {
      background: "var(--color-brand)",
      color: "var(--white)",
      borderColor: "var(--color-brand)"
    },
    secondary: {
      background: "var(--white)",
      color: "var(--text-primary)",
      borderColor: "var(--border-default)"
    },
    ghost: {
      background: "transparent",
      color: "var(--text-primary)",
      borderColor: "transparent"
    },
    danger: {
      background: "var(--danger)",
      color: "var(--white)",
      borderColor: "var(--danger)"
    }
  };
  const hovers = {
    primary: {
      background: "var(--gray-800)"
    },
    brand: {
      background: "var(--blue-600)"
    },
    secondary: {
      background: "var(--surface-hover)"
    },
    ghost: {
      background: "var(--surface-hover)"
    },
    danger: {
      background: "oklch(48% .21 25)"
    }
  };
  const [hover, setHover] = React.useState(false);
  const style = {
    ...base,
    ...variants[variant],
    ...(hover && !disabled ? hovers[variant] : {})
  };
  return React.createElement("button", {
    type,
    style,
    disabled,
    onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, icon && iconPosition === "left" ? React.createElement("span", {
    style: {
      display: "flex",
      marginRight: sizes[size].gap
    }
  }, icon) : null, children, icon && iconPosition === "right" ? React.createElement("span", {
    style: {
      display: "flex",
      marginLeft: sizes[size].gap
    }
  }, icon) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked = false,
  onChange,
  disabled = false
}) {
  const boxStyle = {
    width: 20,
    height: 20,
    borderRadius: "var(--radius-sm)",
    border: `1.5px solid ${checked ? "var(--color-brand)" : "var(--border-strong)"}`,
    background: checked ? "var(--color-brand)" : "var(--white)",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    transition: "all var(--duration-fast) var(--ease-standard)"
  };
  return React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      fontFamily: "var(--font-body)",
      fontSize: "var(--body-md)",
      color: "var(--text-primary)"
    }
  }, React.createElement("input", {
    type: "checkbox",
    checked,
    onChange,
    disabled,
    style: {
      display: "none"
    }
  }), React.createElement("span", {
    style: boxStyle
  }, checked ? React.createElement("svg", {
    width: 12,
    height: 10,
    viewBox: "0 0 12 10"
  }, React.createElement("path", {
    d: "M1 5l3.5 3.5L11 1",
    stroke: "white",
    strokeWidth: 2,
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })) : null), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/IconButton.jsx
try { (() => {
function IconButton({
  icon,
  variant = "secondary",
  size = "md",
  disabled = false,
  onClick,
  "aria-label": ariaLabel
}) {
  const dims = {
    sm: 32,
    md: 40,
    lg: 48
  };
  const d = dims[size];
  const variants = {
    primary: {
      background: "var(--ink-black)",
      color: "var(--white)",
      borderColor: "var(--ink-black)"
    },
    secondary: {
      background: "var(--white)",
      color: "var(--text-primary)",
      borderColor: "var(--border-default)"
    },
    ghost: {
      background: "transparent",
      color: "var(--text-primary)",
      borderColor: "transparent"
    }
  };
  const hovers = {
    primary: {
      background: "var(--gray-800)"
    },
    secondary: {
      background: "var(--surface-hover)"
    },
    ghost: {
      background: "var(--surface-hover)"
    }
  };
  const [hover, setHover] = React.useState(false);
  const style = {
    width: d,
    height: d,
    borderRadius: "var(--radius-sm)",
    border: "1px solid transparent",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.45 : 1,
    transition: "background var(--duration-fast) var(--ease-standard)",
    ...variants[variant],
    ...(hover && !disabled ? hovers[variant] : {})
  };
  return React.createElement("button", {
    style,
    disabled,
    onClick,
    "aria-label": ariaLabel,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, icon);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function Input({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
  error,
  helpText,
  disabled = false,
  size = "md"
}) {
  const [focus, setFocus] = React.useState(false);
  const heights = {
    sm: 36,
    md: 44,
    lg: 52
  };
  const wrap = {
    display: "flex",
    flexDirection: "column",
    gap: 6,
    fontFamily: "var(--font-body)",
    width: "100%"
  };
  const labelStyle = {
    fontSize: "var(--label-md)",
    fontWeight: 600,
    color: "var(--text-primary)"
  };
  const inputStyle = {
    height: heights[size],
    padding: "0 14px",
    fontSize: "var(--body-md)",
    fontFamily: "var(--font-body)",
    color: "var(--text-primary)",
    background: disabled ? "var(--gray-50)" : "var(--white)",
    border: `1px solid ${error ? "var(--danger)" : focus ? "var(--border-brand)" : "var(--border-default)"}`,
    borderRadius: "var(--radius-sm)",
    outline: "none",
    boxShadow: focus ? "0 0 0 3px var(--blue-100)" : "none",
    transition: "border-color var(--duration-fast) var(--ease-standard),box-shadow var(--duration-fast) var(--ease-standard)",
    width: "100%"
  };
  const helpStyle = {
    fontSize: "var(--label-sm)",
    color: error ? "var(--danger)" : "var(--text-tertiary)"
  };
  return React.createElement("label", {
    style: wrap
  }, label ? React.createElement("span", {
    style: labelStyle
  }, label) : null, React.createElement("input", {
    type,
    placeholder,
    value,
    onChange,
    disabled,
    style: inputStyle,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false)
  }), error || helpText ? React.createElement("span", {
    style: helpStyle
  }, error || helpText) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  label,
  checked = false,
  onChange,
  name,
  disabled = false
}) {
  const outer = {
    width: 20,
    height: 20,
    borderRadius: "50%",
    border: `1.5px solid ${checked ? "var(--color-brand)" : "var(--border-strong)"}`,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    transition: "all var(--duration-fast) var(--ease-standard)"
  };
  return React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      fontFamily: "var(--font-body)",
      fontSize: "var(--body-md)",
      color: "var(--text-primary)"
    }
  }, React.createElement("input", {
    type: "radio",
    name,
    checked,
    onChange,
    disabled,
    style: {
      display: "none"
    }
  }), React.createElement("span", {
    style: outer
  }, checked ? React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: "50%",
      background: "var(--color-brand)"
    }
  }) : null), label);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function Select({
  label,
  options = [],
  value,
  onChange,
  placeholder = "Select…",
  disabled = false
}) {
  const [focus, setFocus] = React.useState(false);
  const wrap = {
    display: "flex",
    flexDirection: "column",
    gap: 6,
    fontFamily: "var(--font-body)",
    width: "100%"
  };
  const labelStyle = {
    fontSize: "var(--label-md)",
    fontWeight: 600,
    color: "var(--text-primary)"
  };
  const selectStyle = {
    height: 44,
    padding: "0 36px 0 14px",
    fontSize: "var(--body-md)",
    fontFamily: "var(--font-body)",
    color: value ? "var(--text-primary)" : "var(--text-tertiary)",
    background: `var(--white) url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23545a63' stroke-width='1.6' fill='none' stroke-linecap='round'/%3E%3C/svg%3E") no-repeat right 14px center`,
    border: `1px solid ${focus ? "var(--border-brand)" : "var(--border-default)"}`,
    borderRadius: "var(--radius-sm)",
    outline: "none",
    boxShadow: focus ? "0 0 0 3px var(--blue-100)" : "none",
    appearance: "none",
    width: "100%",
    cursor: disabled ? "not-allowed" : "pointer"
  };
  return React.createElement("label", {
    style: wrap
  }, label ? React.createElement("span", {
    style: labelStyle
  }, label) : null, React.createElement("select", {
    value: value || "",
    onChange,
    disabled,
    style: selectStyle,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false)
  }, React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder), options.map(o => React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  label,
  checked = false,
  onChange,
  disabled = false
}) {
  const track = {
    width: 40,
    height: 24,
    borderRadius: "var(--radius-full)",
    background: checked ? "var(--color-brand)" : "var(--gray-300)",
    position: "relative",
    transition: "background var(--duration-fast) var(--ease-standard)",
    flexShrink: 0
  };
  const thumb = {
    width: 18,
    height: 18,
    borderRadius: "50%",
    background: "var(--white)",
    position: "absolute",
    top: 3,
    left: checked ? 19 : 3,
    transition: "left var(--duration-fast) var(--ease-standard)",
    boxShadow: "var(--shadow-sm)"
  };
  return React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      fontFamily: "var(--font-body)",
      fontSize: "var(--body-md)",
      color: "var(--text-primary)"
    }
  }, React.createElement("input", {
    type: "checkbox",
    checked,
    onChange,
    disabled,
    style: {
      display: "none"
    }
  }), React.createElement("span", {
    style: track
  }, React.createElement("span", {
    style: thumb
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  tabs = [],
  active,
  onChange
}) {
  return React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-6)",
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, tabs.map(t => {
    const isActive = t.value === active;
    return React.createElement("button", {
      key: t.value,
      onClick: () => onChange && onChange(t.value),
      style: {
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: "12px 2px",
        fontFamily: "var(--font-label)",
        fontSize: "var(--body-md)",
        fontWeight: 600,
        color: isActive ? "var(--text-primary)" : "var(--text-tertiary)",
        borderBottom: `2px solid ${isActive ? "var(--color-brand)" : "transparent"}`,
        marginBottom: -1,
        transition: "color var(--duration-fast) var(--ease-standard),border-color var(--duration-fast) var(--ease-standard)"
      }
    }, t.label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
