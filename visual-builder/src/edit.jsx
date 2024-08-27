import React from "react";
const {
  // Renderer - HTML
  ModuleContainer,

  // Renderer - Styles
  StyleContainer,

  // Renderer - Classnames
  elementClassnames,
} = window?.divi?.module;

/**
 * React function component for rendering module style.
 */
const ModuleStyles = ({
  attrs,
  elements,
  settings,
  orderClass,
  mode,
  state,
  noStyleTag,
}) => (
  <StyleContainer mode={mode} state={state} noStyleTag={noStyleTag}>
    {/* Element: Module */}
    {elements.style({
      attrName: "module",
      styleProps: {
        disabledOn: {
          disabledModuleVisibility: settings?.disabledModuleVisibility,
        },
      },
    })}

    {/* Element: Title */}
    {elements.style({
      attrName: "title",
    })}

    {/* Element: Content */}
    {elements.style({
      attrName: "content",
    })}
  </StyleContainer>
);

/**
 * React function component for registering module script data.
 */
const ModuleScriptData = ({ elements }) => (
  <React.Fragment>
    {elements.scriptData({
      attrName: "module",
    })}
  </React.Fragment>
);

/**
 * Function for registering module classnames.
 */
const moduleClassnames = ({ classnamesInstance, attrs }) => {
  // Add element classnames.
  classnamesInstance.add(
    elementClassnames({
      attrs: attrs?.module?.decoration ?? {},
    })
  );
};

export const ModuleEdit = ({ attrs, id, name, elements }) => {
  // Get image attributes.
  const imageSrc = attrs?.image?.innerContent?.desktop?.value?.src ?? "";
  const imageAlt = attrs?.image?.innerContent?.desktop?.value?.alt ?? "";

  console.log(imageSrc);

  return (
    <ModuleContainer
      attrs={attrs}
      elements={elements}
      id={id}
      moduleClassName="d5_tut_simple_quick_module"
      name={name}
      scriptDataComponent={ModuleScriptData}
      stylesComponent={ModuleStyles}
      classnamesFunction={moduleClassnames}
    >
      {elements.styleComponents({
        attrName: "module",
      })}

      <div className="et_pb_module_inner">
        <div className="divi5_simple_quick_module_image">
          <img src={imageSrc} alt={imageAlt} />
        </div>

        {elements.render({
          attrName: "title",
        })}
        {elements.render({
          attrName: "content",
        })}
      </div>
    </ModuleContainer>
  );
};
