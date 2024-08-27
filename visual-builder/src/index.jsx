// External library dependencies.
import React from "react";

// WordPress package dependencies.

const { addAction } = window?.vendor?.wp?.hooks;

// Divi package dependencies.
const { RichTextContainer, TextContainer, Upload, UploadContainer } =
  window?.divi?.fieldLibrary;

const { GroupContainer } = window?.divi?.modal;

const {
  // Settings - Content
  AdminLabelGroup,
  BackgroundGroup,
  FieldContainer,

  // Settings - Design
  AnimationGroup,
  BorderGroup,
  BoxShadowGroup,
  FiltersGroup,
  FontGroup,
  FontBodyGroup,
  SizingGroup,
  SpacingGroup,
  TransformGroup,

  // Settings - Advanced
  PositionSettingsGroup,
  ScrollSettingsGroup,
  TransitionGroup,
  VisibilitySettingsGroup,
} = window?.divi?.module;
const { registerModule } = window?.divi?.moduleLibrary;

const { placeholderContent } = window?.divi?.module;

// Module metadata that is used in both Frontend and Visual Builder.
import metadata from "./module.json";
import { ModuleEdit } from "./edit";

/**
 * Simple Quick Module.
 */
const simpleQuickModule = {
  // Metadata that is used on Visual Builder and Frontend
  metadata,

  // Layout renderer components.
  renderers: {
    // React Function Component for rendering module's output on layout area.
    edit: ModuleEdit,
  },

  // Settings component.
  settings: {
    // React function component that renders module settings' content panel.
    content: ({ defaultSettingsAttrs }) => (
      <React.Fragment>
        <GroupContainer id="mainContent" title="Main Content">
          <FieldContainer
            attrName="title.innerContent"
            label="Title"
            description="Title"
          >
            <TextContainer />
          </FieldContainer>

          <FieldContainer attrName="content.innerContent" label="Content">
            <RichTextContainer />
          </FieldContainer>

          <FieldContainer
            attrName="image.innerContent"
            subName="src"
            label="Image"
            description="Upload an Image"
            features={{
              sticky: false,
            }}
          >
            <UploadContainer />
          </FieldContainer>

          <FieldContainer
            attrName="button.innerContent"
            label="Button Text"
            description="Button Text"
          >
            <TextContainer />
          </FieldContainer>
          <FieldContainer
            attrName="buttonUrl.innerContent"
            label="Button Link"
            description="Button Link"
          >
            <TextContainer />
          </FieldContainer>
        </GroupContainer>

        <BackgroundGroup />

        <AdminLabelGroup defaultGroupAttr={defaultSettingsAttrs?.adminLabel} />
      </React.Fragment>
    ),

    // React function component that renders module settings' design panel.
    design: () => (
      <React.Fragment>
        <FontGroup attrName="title.decoration.font" groupLabel="Title Font" />
        <FontBodyGroup
          attrName="content.decoration.bodyFont"
          groupLabel="Content Font"
        />

        <GroupContainer id="buttonStyle" title="Button Styles">
          <FontGroup attrName="button.decoration.font" grouped={false}/>
          <SpacingGroup attrName="button.decoration.spacing" grouped={false}/>
          <BackgroundGroup attrName="button.decoration.background" grouped={false} />
          <BorderGroup attrName="button.decoration.border" grouped={false} />
        </GroupContainer>
        
        <SizingGroup />
        <SpacingGroup />
        <BorderGroup />
        <BoxShadowGroup />
        <FiltersGroup />
        <TransformGroup />
        <AnimationGroup />
      </React.Fragment>
    ),

    // React function component that renders module settings' advanced panel.
    advanced: () => (
      <React.Fragment>
        <VisibilitySettingsGroup />
        <TransitionGroup />
        <PositionSettingsGroup />
        <ScrollSettingsGroup />
      </React.Fragment>
    ),
  },

  // Attribute that is automatically added into the module when the module is inserted
  // into the layout so that the newly inserted module has some placeholder content
  placeholderContent: {
    module: {
      decoration: {
        background: {
          desktop: {
            value: {
              color: "#DFDFDF",
            },
          },
        },
      },
    },
    image: {
      innerContent: {
        desktop: {
          value: {
            src: placeholderContent?.image?.landscape,
          },
        },
      },
    },
    title: {
      innerContent: {
        desktop: {
          value: "Module Title ...",
        },
      },
    },
    content: {
      innerContent: {
        desktop: {
          value: "Module Content ...",
        },
      },
    },
    button: {
      innerContent: {
        desktop: {
          value: "Click Here",
        },
      },
    },
    buttonUrl: {
      innerContent: {
        desktop: {
          value: "#",
        },
      },
    },
  },
};

// Register module.
addAction(
  "divi.moduleLibrary.registerModuleLibraryStore.after",
  "DIVI5.simpleQuickModule",
  () => {
    registerModule(simpleQuickModule.metadata, simpleQuickModule);
  }
);
