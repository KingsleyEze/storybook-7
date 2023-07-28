import React, { useState, useRef, useEffect } from "react"
import Warp from "warpjs"
import { ReactComponent as SampleTextSVG } from "./stories/assets/sampleText.svg"

const WarpSVG = ({ initialArchValue = 0, min = -100, max = 100, step = 1 }) => {
    const [archValue, setArchValue] = useState(initialArchValue)
    const svgRef = useRef(null)
    const warpInstanceRef = useRef(null)
    const previousValueRef = useRef(archValue)

    useEffect(() => {
        if (!svgRef.current) return
        const svgElement = svgRef.current
        warpInstanceRef.current = new Warp(svgElement)
        warpInstanceRef.current.interpolate(4)

        const applyArchEffect = (strength, previousValue) => {
            const horizontalX = 385
            warpInstanceRef.current.transform(([x, y]) => {
                const strengthChange = previousValue - strength
                const distortionOffset = x / 2 ** Math.floor(Math.log2(horizontalX / 2))
                return [x, y + strengthChange * Math.sin(distortionOffset)]
            })
        }

        const previousValue = previousValueRef.current
        applyArchEffect(archValue, previousValue)
        previousValueRef.current = archValue
    }, [archValue])

    const handleArchChange = (event) => {
        const value = parseFloat(event.target.value)
        setArchValue(value)
    }

    return (
        <div style={{ textAlign: "center" }}>
            <SampleTextSVG ref={svgRef} />
            <div>
                <label htmlFor="arch-slider">Arch Effect Slider:</label>
                <input
                    type="range"
                    id="arch-slider"
                    min={min}
                    max={max}
                    step={step}
                    value={archValue}
                    onChange={handleArchChange}
                />
                <span>{archValue}</span>
            </div>
        </div>
    )
}

export default WarpSVG
