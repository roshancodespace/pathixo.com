import { LiquidMetal } from "@paper-design/shaders-react"

export const LiquidMetalOrb = () => {
    return (
        <LiquidMetal
            style={{ height: 100 + "vh", width: 100 + "vw" }}
            colorBack="#7a7a7a00"
            colorTint="#4CC9F0"
            repetition={3}
            softness={1}
            shiftRed={0}
            shiftBlue={0}
            distortion={0}
            contour={0}
            shape="metaballs"
            offsetX={0}
            offsetY={0}
            scale={1}
            rotation={0}
            speed={0.3}
        />
    );
}