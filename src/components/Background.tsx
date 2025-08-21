import { ShaderGradientCanvas, ShaderGradient } from "@shadergradient/react";

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10">
      <ShaderGradientCanvas>
        <ShaderGradient
          control="query"
          urlString="https://www.shadergradient.co/customize?animate=on&axesHelper=on&bgColor1=%23000000&bgColor2=%23000000&brightness=0.4&cAzimuthAngle=60&cDistance=7.1&cPolarAngle=90&cameraZoom=15.3&color1=%2300ff00&color2=%23001a00&color3=%23000000&destination=onCanvas&embedMode=off&envPreset=dawn&format=gif&fov=45&frameRate=10&grain=off&http%3A%2F%2Flocalhost%3A3002%2Fcustomize%3Fanimate=on&lightType=3d&pixelDensity=1&positionX=0&positionY=-0.15&positionZ=0&range=enabled&rangeEnd=40&rangeStart=0&reflection=0.1&rotationX=0&rotationY=0&rotationZ=0&shader=defaults&type=sphere&uAmplitude=1.4&uDensity=1.1&uFrequency=5.5&uSpeed=0.1&uStrength=0.4&uTime=0&wireframe=false"
        />
      </ShaderGradientCanvas>
    </div>
  );
}
