'use client'

import { useState } from 'react'

const CENTER = { cx: 280, cy: 210, r: 40, label: 'Human Flourishing' }

const NODES = [
  {
    label: 'Health & Care Systems',
    cx: 280,
    cy: 55,
    tags: ['care coordination', 'patient outcomes', 'friction reduction'],
  },
  {
    label: 'Psychology & Philosophy',
    cx: 427,
    cy: 163,
    tags: ['behavior change', 'mental models', 'spirituality'],
  },
  {
    label: 'Technology & Tools',
    cx: 371,
    cy: 348,
    tags: ['dashboards', 'automation', 'data systems'],
  },
  {
    label: 'Coaching & Education',
    cx: 189,
    cy: 348,
    tags: ['habit design', 'accountability', 'growth frameworks'],
  },
  {
    label: 'Leadership & Creativity',
    cx: 133,
    cy: 163,
    tags: ['storytelling', 'systems thinking', 'team design'],
  },
]

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t
}

export default function Constellation() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <>
      {/* Desktop SVG */}
      <div className="hidden md:block w-full">
        <svg
          viewBox="0 0 560 480"
          width="100%"
          style={{ display: 'block' }}
          aria-hidden="true"
        >
          {/* Lines */}
          {NODES.map((node, i) => {
            const active = hovered === i
            return (
              <line
                key={i}
                x1={node.cx}
                y1={node.cy}
                x2={CENTER.cx}
                y2={CENTER.cy}
                stroke={active ? '#FFFFFF' : '#888888'}
                strokeWidth={active ? 1.5 : 1}
                opacity={active ? 1 : 0.4}
                style={{ transition: 'opacity 0.2s, stroke 0.2s' }}
              />
            )
          })}

          {/* Keyword tags along lines (shown on hover) */}
          {hovered !== null &&
            NODES[hovered].tags.map((tag, ti) => {
              const t = [0.28, 0.52, 0.76][ti]
              const node = NODES[hovered]
              const x = lerp(node.cx, CENTER.cx, t)
              const y = lerp(node.cy, CENTER.cy, t)
              return (
                <text
                  key={ti}
                  x={x}
                  y={y}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize="9.5"
                  fontFamily="var(--font-inter), sans-serif"
                  fill="#888888"
                  style={{ pointerEvents: 'none', userSelect: 'none' }}
                >
                  {tag}
                </text>
              )
            })}

          {/* Outer nodes */}
          {NODES.map((node, i) => {
            const active = hovered === i
            return (
              <g
                key={i}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{ cursor: 'default' }}
              >
                <circle
                  cx={node.cx}
                  cy={node.cy}
                  r={22}
                  fill={active ? '#000000' : '#FFFFFF'}
                  stroke={active ? '#FFFFFF' : '#000000'}
                  strokeWidth={active ? 2 : 1.5}
                  style={{ transition: 'fill 0.2s, stroke 0.2s' }}
                />
                <text
                  x={node.cx}
                  y={node.cy}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize="8"
                  fontFamily="var(--font-inter), sans-serif"
                  fontWeight="700"
                  fill={active ? '#FFFFFF' : '#000000'}
                  style={{ pointerEvents: 'none', userSelect: 'none', transition: 'fill 0.2s' }}
                >
                  {node.label.split(' & ').map((part, pi, arr) => (
                    <tspan
                      key={pi}
                      x={node.cx}
                      dy={pi === 0 ? (arr.length > 1 ? '-0.55em' : '0') : '1.2em'}
                    >
                      {pi < arr.length - 1 ? part + ' &' : part}
                    </tspan>
                  ))}
                </text>
              </g>
            )
          })}

          {/* Center node */}
          <g>
            <circle
              cx={CENTER.cx}
              cy={CENTER.cy}
              r={CENTER.r}
              fill="#000000"
              stroke="#000000"
            />
            <text
              x={CENTER.cx}
              y={CENTER.cy}
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="9"
              fontFamily="var(--font-inter), sans-serif"
              fontWeight="700"
              fill="#FFFFFF"
              style={{ pointerEvents: 'none', userSelect: 'none' }}
            >
              <tspan x={CENTER.cx} dy="-0.6em">Human</tspan>
              <tspan x={CENTER.cx} dy="1.3em">Flourishing</tspan>
            </text>
          </g>
        </svg>
      </div>

      {/* Mobile fallback */}
      <ul className="md:hidden flex flex-col gap-3">
        {NODES.map((node) => (
          <li
            key={node.label}
            className="text-[#888888] text-sm font-inter"
          >
            {node.label}
          </li>
        ))}
      </ul>
    </>
  )
}
