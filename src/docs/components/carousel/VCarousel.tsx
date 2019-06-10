import React from 'react';
import { VCarousel, VInputField, VTextAreaField } from 'gsi-ui';

const elementsCarousel: any = [
  <VInputField
    layer={{
      labelWidth: 6,
      inputWidth: 6,
      labelOrientation: 'end',
      inputOrientation: 'center'
    }}
    value=""
    id="username"
    label="Username"
    inline
  />,
  <VTextAreaField
    fill
    layer={{
      labelWidth: 6,
      inputWidth: 3,
      labelOrientation: 'end',
      inputOrientation: 'start'
    }}
    id="description"
    label="Description"
    inline
    value=""
  />,
  <VTextAreaField
    fill
    layer={{
      labelWidth: 6,
      inputWidth: 3,
      labelOrientation: 'end',
      inputOrientation: 'start'
    }}
    id="description"
    label="Description"
    inline
    value=""
  />
];

const VCarouselDoc = () => {
  return (
    <VCarousel
      height="200px"
      width="500px"
      elements={elementsCarousel}
      buttonsJustify="flex-end"
    />
  );
};

export default VCarouselDoc;
