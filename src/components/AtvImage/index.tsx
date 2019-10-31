import * as React from 'react';
import { Img } from './style';

type Props = {
  src: string,
  Component?: React.ReactComponentElement<any>,
  alt: string,
};

export default function AtvImage(props: Props) {
  const { src, Component, alt } = props;

  return (
    <div className="atvImg">
      {Component ? (
        // @ts-ignore
        <Component
          className="atvImg-layer"
          data-img={src}
          src={src}
          alt={alt}
        />
      ) : (
        <Img className="atvImg-layer" data-img={src} src={src} alt={alt} />
      )}
    </div>
  );
}