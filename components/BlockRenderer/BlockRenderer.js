import { CallToActionButton } from "components/CallToActionButton/CallToActionButton";
import { Column } from "components/Column";
import { Columns } from "components/Columns";
import { Cover } from "components/Cover";
import { FormspreeForm } from "components/FormspreeForm";
import { Gallery } from "components/Gallery";
import { Heading } from "components/Heading";
import { Paragraph } from "components/Paragraph/Paragraph";
import { PropertyFeatures } from "components/PropertyFeatures";
import { PropertySearch } from "components/PropertySearch";
import { TickItem } from "components/TickItem";
import Image from "next/image";
import { theme } from "theme";

export const BlockRenderer = ({ blocks }) => {
  // console.log(blocks);
  return blocks.map((block) => {
    switch (block.name) {
      case "core/cover": {
        return (
          <Cover key={block.id} background={block.attributes.url}>
            <BlockRenderer blocks={block.innerBlocks} />
          </Cover>
        );
      }
      case "core/paragraph": {
        return (
          <Paragraph
            key={block.id}
            content={block.attributes.content}
            textAlign={block.attributes.textAlign}
            textColor={
              theme[block.attributes.textColor] ||
              block.attributes.style?.color?.text
            }
          />
        );
      }
      case "acf/ctabutton": {
        return (
          <CallToActionButton
            key={block.id}
            label={block.attributes.data.label}
            destination={block.attributes.data.destination || "/"}
            align={block.attributes.data.align}
          />
        );
      }
      case "acf/propertysearch": {
        return <PropertySearch key={block.id} />;
      }
      case "acf/tickitem": {
        return (
          <TickItem key={block.id}>
            <BlockRenderer blocks={block.innerBlocks} />
          </TickItem>
        );
      }
      case "core/post-title":
      case "core/heading": {
        return (
          <Heading
            key={block.id}
            content={block.attributes.content}
            level={block.attributes.level}
            textAlign={block.attributes.textAlign}
          />
        );
      }
      case "core/columns": {
        return (
          <Columns
            key={block.id}
            isStackedOnMobile={block.attributes.isStackedOnMobile}
            textColor={
              theme[block.attributes.textColor] ||
              block.attributes.style?.color?.text
            }
            backgroundColor={
              theme[block.attributes.backgroundColor] ||
              block.attributes.style?.color?.background
            }
          >
            <BlockRenderer blocks={block.innerBlocks} />
          </Columns>
        );
      }
      case "core/column": {
        console.log("core/column block", block);
        return (
          <Column
            key={block.id}
            width={block.attributes?.width}
            textColor={
              theme[block.attributes?.textColor] ||
              block.attributes?.style?.color?.text
            }
            backgroundColor={
              theme[block.attributes?.backgroundColor] ||
              block.attributes?.style?.color?.background
            }
          >
            <BlockRenderer blocks={block.innerBlocks} />
          </Column>
        );
      }
      case "core/block": {
        return <BlockRenderer key={block.id} blocks={block.innerBlocks} />;
      }
      case "core/group": {
        return (
          <div key={block.id} className="max-w-5xl mx-auto">
            <BlockRenderer blocks={block.innerBlocks} />
          </div>
        );
      }
      case "core/gallery": {
        return (
          <Gallery
            key={block.id}
            columns={block.attributes.columns || 3}
            cropImages={block.attributes.imageCrop}
            items={block.innerBlocks}
          />
        );
      }
      case "acf/formspreeform": {
        return (
          <FormspreeForm
            key={block.id}
            formId={block.attributes.data.form_id}
          />
        );
      }
      case "acf/propertyfeatures": {
        return (
          <PropertyFeatures
            key={block.id}
            price={block.attributes.price}
            bedrooms={block.attributes.bedrooms}
            bathrooms={block.attributes.bathrooms}
            pet_friendly={block.attributes.pet_friendly}
            has_parking={block.attributes.has_parking}
          />
        );
      }
      case "core/image": {
        console.log("core/column block", block);
        return (
          <Image
            key={block.id}
            src={block.attributes.url}
            width={block.attributes.width}
            height={block.attributes.height}
            alt={block.attributes.alt || ""}
          ></Image>
        );
      }
      default: {
        console.log("unknown block", block);
        return null;
      }
    }
  });
};
